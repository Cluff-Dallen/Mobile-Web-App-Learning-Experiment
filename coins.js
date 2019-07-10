var bitcoinRequestURL = 'https://www.cryptonator.com/api/full/btc-usd';
var requestBitcoin = new XMLHttpRequest();
requestBitcoin.open('GET', bitcoinRequestURL);
requestBitcoin.send();

requestBitcoin.onload = function() {

    var bitcoin = JSON.parse(requestBitcoin.responseText);
    document.getElementById('bitcoinTicker').innerHTML = bitcoin.ticker.base;
    document.getElementById('bitcoinPrice').innerHTML = bitcoin.ticker.price;
    document.getElementById('bitcoinVolume').innerHTML = bitcoin.ticker.volume;
    document.getElementById('bitcoinChange').innerHTML = bitcoin.ticker.change;
}

var chainlinkRequestURL = 'https://www.cryptonator.com/api/full/link-usd';
var requestChainlink = new XMLHttpRequest();
requestChainlink.open('GET', chainlinkRequestURL);
requestChainlink.send();

requestChainlink.onload = function() {

    var chainlink = JSON.parse(requestChainlink.responseText);
    document.getElementById('chainlinkTicker').innerHTML = chainlink.ticker.base;
    document.getElementById('chainlinkPrice').innerHTML = chainlink.ticker.price;
    document.getElementById('chainlinkVolume').innerHTML = chainlink.ticker.volume;
    document.getElementById('chainlinkChange').innerHTML = chainlink.ticker.change;
}

var binanceCoinRequestURL = 'https://www.cryptonator.com/api/full/bnb-usd';
var requestBinanceCoin = new XMLHttpRequest();
requestBinanceCoin.open('GET', binanceCoinRequestURL);
requestBinanceCoin.send();

requestBinanceCoin.onload = function() {

    var binanceCoin = JSON.parse(requestBinanceCoin.responseText);
    document.getElementById('binanceCoinTicker').innerHTML = binanceCoin.ticker.base;
    document.getElementById('binanceCoinPrice').innerHTML = binanceCoin.ticker.price;
    document.getElementById('binanceCoinVolume').innerHTML = binanceCoin.ticker.volume;
    document.getElementById('binanceCoinChange').innerHTML = binanceCoin.ticker.change;
}

var xrpRequestURL = 'https://www.cryptonator.com/api/full/xrp-usd';
var requestXrp = new XMLHttpRequest();
requestXrp.open('GET', xrpRequestURL);
requestXrp.send();

requestXrp.onload = function() {

    var xrp = JSON.parse(requestXrp.responseText);
    document.getElementById('xrpTicker').innerHTML = xrp.ticker.base;
    document.getElementById('xrpPrice').innerHTML = xrp.ticker.price;
    document.getElementById('xrpVolume').innerHTML = xrp.ticker.volume;
    document.getElementById('xrpChange').innerHTML = xrp.ticker.change;
}