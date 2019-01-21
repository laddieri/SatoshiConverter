
var outputText = document.getElementById('tempoText');
var currentprice;

let url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

fetch(url)
.then(res => res.json())
.then((out) => {
  currentprice = parseInt(out.bpi.USD.rate.replace(/,/g,""),10);
  console.log(currentprice);
})
.catch(err => { throw err });

function convert(){
  var satoshiInput = document.getElementById('satoshiInput').value;
  var bitcoinOutput = satoshiInput * .00000001;
  document.getElementById('outputText').textContent = bitcoinOutput + ' Bitcoin';
  document.getElementById('ValueUSD').textContent = '$'+(bitcoinOutput * currentprice);
  document.getElementById('currentpriceofBTC').textContent = '$'+currentprice;
}
