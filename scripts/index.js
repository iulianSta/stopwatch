// Any code you will write for your website (in the future!) should go here
//Variables
let seconds = 00;
let tens = 00;
const spanSeconds = document.querySelector("#seconds");
const spanTens = document.querySelector("#tens");
const buttons = document.querySelector(".buttons");
let interval;
// startWatch function
function startWatch(e) {
  tens++;
  if (tens < 9) spanTens.innerHTML = `0${tens}`;
  if (tens > 9) spanTens.innerHTML = `${tens}`;
  if (tens > 99) {
    seconds++;
    spanSeconds.innerHTML = `0${seconds}`;
    tens = 0;
    spanTens.innerHTML = `00`;
  }
  if (seconds > 9) spanSeconds.innerHTML = `${seconds}`;
}
// Add Event Listener
buttons.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.id == "button-start") {
    interval = setInterval(startWatch);
  }
  if (e.target.id == "button-stop") {
    clearInterval(interval);
  }
  if (e.target.id == "button-reset") {
    interval = setInterval(startWatch);
    clearInterval(interval);
    spanTens.innerHTML = `00`;
    spanSeconds.innerHTML = `00`;
    tens = 0;
    seconds = 0;
  }
});
