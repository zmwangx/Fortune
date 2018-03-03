const FORTUNES = document.getElementById('fortune-data').text.split('\n%\n');
const NUM_FORTUNES = FORTUNES.length - 1;  // The last element is an empty string.
const fortuneTag = document.getElementById('fortune');
var fortuneId = 0;

function randomId () {
  return Math.floor(Math.random() * NUM_FORTUNES);
}

if (window.location.hash !== '') {
  fortuneId = parseInt(window.location.hash.substr(1));
  if (isNaN(fortuneId) || fortuneId < 0 || fortuneId >= NUM_FORTUNES) {
    fortuneId = randomId();
  }
} else {
  fortuneId = randomId();
}
fortuneTag.textContent = FORTUNES[fortuneId];
window.location.hash = fortuneId.toString();
