var express = require('express');
var app = express();
const host = '0.0.0.0';
const port = process.env.PORT;


app.use(express.static('src'));
app.use(express.static('../bites-contract/build/contracts'));

app.get('/', function (req, res) {
    res.render('index.html');
});

app.listen(port,host, function () {
    console.log('BlockchainBites Dapp listening on port ' + port);
});
