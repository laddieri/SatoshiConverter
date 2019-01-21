
var outputText = document.getElementById('tempoText');
var currentprice;

var audio = new Audio('assets/clap.wav');

let url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

fetch(url)
.then(res => res.json())
.then((out) => {
  currentprice = parseInt(out.bpi.USD.rate.replace(/,/g,""),10);
})
.catch(err => { throw err });

function convert(){
  audio.play();
  var satoshiInput = document.getElementById('satoshiInput').value;
  var bitcoinOutput = satoshiInput * .00000001;
  document.getElementById('outputText').textContent = bitcoinOutput + ' Bitcoin';
  var valuetodisplay = (bitcoinOutput * currentprice).toFixed(3);
  var formattedvalue = numberWithCommas(valuetodisplay);
  document.getElementById('ValueUSD').textContent = '$'+ formattedvalue;
  var formattedprice = numberWithCommas(currentprice);
  document.getElementById('currentpriceofBTC').textContent = '$'+formattedprice;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
