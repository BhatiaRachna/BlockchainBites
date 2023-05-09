const contractAddress = '0x93390e2bff3FFF43be94F9c815687C4bef921960'; // Replace with your contract address
const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "donor",
				"type": "address"
			}
		],
		"name": "DonorRegistered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "donor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "tokenIds",
				"type": "uint256[]"
			}
		],
		"name": "FoodDonated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "FoodOwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "UserRegistered",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "donatedtokenId",
				"type": "uint256"
			}
		],
		"name": "decrementFoodItem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "expiryDate",
				"type": "uint256"
			}
		],
		"name": "donateFood",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "foods",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "expiryDate",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isGiven",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"name": "onERC721Received",
		"outputs": [
			{
				"internalType": "bytes4",
				"name": "",
				"type": "bytes4"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "registerAsDonors",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "registerAsUsers",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "registeredDonors",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "registeredUsers",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "donatedtokenId",
				"type": "uint256"
			}
		],
		"name": "transferFoodToUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "viewFoodItems",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "quantity",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "expiryDate",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isGiven",
						"type": "bool"
					}
				],
				"internalType": "struct BlockchainBites.Food[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]


const Web3 = require('web3');

// Connect to the Goerli network
const web3 = new Web3('https://sepolia.infura.io/v3/d95c35eea31041868055e61a639b3b15');
const contract = new web3.eth.Contract(abi, contractAddress);

const donorRegisterForm = document.getElementById('donorRegistration-form');
if (donorRegisterForm) {
	donorRegisterForm.addEventListener('submit', async (event) => {
		event.preventDefault();
		const name = event.target.elements['name'].value;
		const email = event.target.elements['email'].value;
		const accounts = await web3.eth.requestAccounts();
		const from = accounts[0];
		try {
			await contract.methods.registerAsDonors().send({ from });
			contract.events.DonorRegistered({ fromBlock: 0 })
				.on('data', function (event) {
					console.log(event);
					alert("A new donor has been registered: " + event.returnValues[0]);
					// Redirect to a success page after showing the alert
					window.location.href = "donor-page.html";
				})
		} catch (error) {
			console.error(error);
			if (error.message.includes("Address is already registered as a user or donor.")) {
				alert("This address is already registered as a user or donor.");
			} else {
				alert("An error occurred while processing your request.");
			}
		}
	});
}


const userRegisterForm = document.getElementById('userRegistration-form');
if (userRegisterForm) {
	userRegisterForm.addEventListener('submit', async (event) => {
		event.preventDefault();
		const name = event.target.elements['name'].value;
		const email = event.target.elements['email'].value;
		const accounts = await web3.eth.requestAccounts();
		const from = accounts[0];
		try {
			await contract.methods.registerAsUsers().send({ from });
			contract.events.UserRegistered({ fromBlock: 0 })
				.on('data', function (event) {
					console.log(event);
					alert("A new user has been registered: " + event.returnValues[0]);
					// Redirect to a success page after showing the alert
					window.location.href = "user-page.html";
				})
		} catch (error) {
			console.error(error);
			if (error.message.includes("Address is already registered as a user or donor.")) {
				alert("This address is already registered as a user or donor.");
			} else {
				alert("An error occurred while processing your request.");
			}
		}
	});
}

const donateForm = document.getElementById('donate-form');
if (donateForm) {
	donateForm.addEventListener('submit', async (event) => {
		event.preventDefault();
		const name = event.target.elements['food-name'].value;
		const quantity = event.target.elements['food-quantity'].value;
		const expiryDate = event.target.elements['expiry-date'].value;
		const expDate = "1000";
		const accounts = await web3.eth.requestAccounts();
		const from = accounts[0];
		try {
			const result = await contract.methods.donateFood(name, quantity, expDate).send({ from });
			console.log(result);
			contract.events.FoodDonated({ fromBlock: 0 })
				.on('data', function (event) {
					console.log(event);
					alert("A new donation of " + event.returnValues[1].length + " food tokens has been received from " + event.returnValues[0]);
					window.location.href = "home.html";
				});			
		} catch (error) {
			console.error(error);
			if (error.message.includes("Address is not registered as a donor.")) {
				alert("You are not registered as a donor. Please register before making a donation.");
			} else {
				alert("An error occurred while processing your request.");
			}
		}
	});
}

const displayFoodBtn = document.getElementById('display-food-btn');
if (displayFoodBtn) {
	displayFoodBtn.addEventListener('click', async (event) => {
		event.preventDefault();
		try {
			const result = await contract.methods.viewFoodItems().call();
			const tokenIds = result[0];
			const foodDetails = result[1];
			const table = document.createElement('table');
			const headerRow = document.createElement('tr');
			const tokenIdHeader = document.createElement('th');
			tokenIdHeader.textContent = 'Token Ids';
			headerRow.appendChild(tokenIdHeader);
			const foodHeader = document.createElement('th');
			foodHeader.textContent = 'Food';
			headerRow.appendChild(foodHeader);
			const availabilityHeader = document.createElement('th');
			availabilityHeader.textContent = 'Availability';
			headerRow.appendChild(availabilityHeader);
			table.appendChild(headerRow);
			for (let i = 0; i < tokenIds.length; i++) {
				const row = document.createElement('tr');
				const tokenIdCell = document.createElement('td');
				tokenIdCell.textContent = tokenIds[i];
				row.appendChild(tokenIdCell);
				const nameCell = document.createElement('td');
				nameCell.textContent = foodDetails[i].name;
				row.appendChild(nameCell);
				const availabilityCell = document.createElement('td');
				if (!foodDetails[i].isGiven) {
					availabilityCell.textContent = "Available";
				} else {
					availabilityCell.textContent = "Not Available";
				}
				row.appendChild(availabilityCell);
				table.appendChild(row);
			}
			displayFoodBtn.appendChild(table);
		} catch (error) {
			console.error(error);
			alert("An error occurred while processing your request.");
		}
	});
}

const decrementFoodItemBtn = document.getElementById('decrement-food-item-btn');
if (decrementFoodItemBtn) {
	decrementFoodItemBtn.addEventListener('click', async (event) => {
		event.preventDefault();
		try {
			const tokenId = document.getElementById('tokenId-input').value;
			const accounts = await web3.eth.requestAccounts();
			const from = accounts[0];
			await contract.methods.decrementFoodItem(tokenId).send({ from });
			const message = "Congratulations! You're the proud owner of a delicious new token";
			const messageElem = document.createElement('p');
			contract.events.FoodOwnershipTransferred({ fromBlock: 0 })
				.on('data', function (event) {
					console.log(event);
					alert("The ownership of token " + event.returnValues.tokenId + " has been transferred to " + event.returnValues.owner);
				});
			messageElem.textContent = message;
			decrementFoodItemBtn.appendChild(messageElem);

		} catch (error) {
			if (error.message.includes("Token does not exist")) {
				alert("The token you specified does not exist.");
			} else if (error.message.includes("Token is not owned by the contract")) {
				alert("The token you specified is not available");
			} else {
				alert("An error occurred while processing your request.");
			}

		}
	});
}
