var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var but = document.getElementsByTagName("button")
console.log(but)


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
	return body.style.background
}

function generateRandomColor() {
  var letters = '0123456789ABCDEF';
  var leftColor = '#';
  var rightColor = '#';
  for (var i = 0; i < 6; i++) {
    leftColor += letters[Math.floor(Math.random() * 16)];
  }
  color1.value = leftColor;
  for (var i = 0; i < 6; i++) {
    rightColor += letters[Math.floor(Math.random() * 16)];
  }
  color2.value = rightColor;
  css.textContent = setGradient();
}



css.textContent = setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

but[0].addEventListener("click", generateRandomColor);