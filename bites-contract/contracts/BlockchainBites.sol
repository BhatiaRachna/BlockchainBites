//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract BlockchainBites is ERC721, Ownable {
    using SafeMath for uint256;

    uint256 private tokenId = 0;
    struct Food {
        string name;
        uint256 quantity;
        uint256 expiryDate;
        bool isGiven;
    }

    mapping(uint256 => Food) public foods;
    mapping(address => bool) public registeredDonors;
    mapping(address => bool) public registeredUsers;

    event DonorRegistered(address donor);
    event UserRegistered(address user);
    event FoodDonated(address indexed donor, uint256[] tokenIds);
    event FoodOwnershipTransferred(address indexed owner, uint256 tokenId);

    modifier onlyNewAddress() {
        require(
            !registeredUsers[msg.sender] && !registeredDonors[msg.sender],
            "Address is already registered as a user or donor."
        );
        _;
    }

    modifier onlyRegisteredDonor() {
        require(
            registeredDonors[msg.sender],
            "Address is not registered as a donor."
        );
        _;
    }

    modifier onlyOwnedToken(uint256 tokenId) {
        require(_exists(tokenId), "Token does not exist");
        require(
            ownerOf(tokenId) == address(this),
            "Token is not owned by the contract"
        );
        _;
    }

    constructor() ERC721("FoodToken", "FT") {}

    function registerAsDonors() public onlyNewAddress {
        registeredDonors[msg.sender] = true;
        emit DonorRegistered(msg.sender);
    }

    function registerAsUsers() public onlyNewAddress {
        registeredUsers[msg.sender] = true;
        emit UserRegistered(msg.sender);
    }

    function donateFood(
        string memory name,
        uint256 quantity,
        uint256 expiryDate
    ) public payable onlyRegisteredDonor {
        // Create a new food token for each unit of donated food and transfer ownership to the donor
        uint256[] memory donatedTokenIds = new uint256[](quantity);
        for (uint256 i = 0; i < quantity; i++) {
            tokenId++;
            _safeMint(msg.sender, tokenId);
            // Transfer ownership of the token from the donor to the contract
            safeTransferFrom(msg.sender, address(this), tokenId);

            // Create a new food item in memory
            Food memory food = Food(name, 1, expiryDate, false);
            // Assign the new food item to an existing storage location using the foods mapping
            foods[tokenId] = food;
            donatedTokenIds[i] = tokenId;
        }
        emit FoodDonated(msg.sender, donatedTokenIds);
    }

    function viewFoodItems() public returns (uint256[] memory, Food[] memory) {
        address contractOwner = owner();
        bool isRegisteredUser = registeredUsers[msg.sender];
        bool isRegisteredDonor = registeredDonors[msg.sender];

        uint256[] memory tokenIds = new uint256[](tokenId);
        Food[] memory foodDetails = new Food[](tokenId);

        uint256 index = 0;
        for (uint256 i = 1; i <= tokenId; i++) {
            bool isOwnedByContract = (ownerOf(i) == contractOwner);

            // Only show food items owned by the NGO to users
            if (isRegisteredUser && isOwnedByContract) {
                continue;
            }

            // Only show food items donated by the current donor to the NGO
            if (isRegisteredDonor && isOwnedByContract) {
                continue;
            }

            tokenIds[index] = i;
            foodDetails[index] = foods[i];
            index++;

            //  emit DebugMsg(i, foods[i].name, foods[i].quantity, foods[i].isGiven);
        }

        // Resize arrays to remove any unused elements
        uint256[] memory finalTokenIds = new uint256[](index);
        Food[] memory finalFoodDetails = new Food[](index);
        for (uint256 i = 0; i < index; i++) {
            finalTokenIds[i] = tokenIds[i];
            finalFoodDetails[i] = foodDetails[i];
        }
        return (finalTokenIds, finalFoodDetails);
    }

    function decrementFoodItem(uint256 donatedtokenId)
        public
        onlyOwnedToken(donatedtokenId)
    {
        // Decrement the quantity of a food token and track when it was given to a user
        Food storage food = foods[donatedtokenId];
        require(food.quantity > 0, "Token has no quantity remaining");
        food.quantity = food.quantity.sub(1);
        // Track when the token was given to a user
        food.isGiven = true;
        transferFoodToUser(msg.sender, donatedtokenId);
        emit FoodOwnershipTransferred(msg.sender, donatedtokenId);
    }

    function transferFoodToUser(address to, uint256 donatedtokenId)
        public
        onlyOwnedToken(donatedtokenId)
    {
        // Transfer ownership of a food token to a new owner
        _transfer(address(this), to, donatedtokenId);
    }

    function onERC721Received(
        address,
        address,
        uint256,
        bytes calldata
    ) external pure returns (bytes4) {
        return
            bytes4(
                keccak256("onERC721Received(address,address,uint256,bytes)")
            );
    }
}
