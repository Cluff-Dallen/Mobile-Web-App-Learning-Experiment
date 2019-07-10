var chainlinkRequestURL = 'https://www.cryptonator.com/api/full/link-usd';

var request = new XMLHttpRequest();

request.open('GET', chainlinkRequestURL);
request.send();

request.onload = function() {

    var chainlink = JSON.parse(request.responseText);
    document.getElementById('chainlinkTicker').innerHTML = chainlink.ticker.base;
    document.getElementById('chainlinkPrice').innerHTML = chainlink.ticker.price;
    document.getElementById('chainlinkVolume').innerHTML = chainlink.ticker.volume;
    document.getElementById('chainlinkChange').innerHTML = chainlink.ticker.change;
}