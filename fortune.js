const FORTUNES = document.getElementById('fortune-data').text.split('\n%\n');
const NUM_FORTUNES = FORTUNES.length - 1;  // The last element is an empty string.

document.getElementById('fortune').textContent = FORTUNES[Math.floor(Math.random() * NUM_FORTUNES)];
