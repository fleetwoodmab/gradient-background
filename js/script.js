var colour1 = document.getElementById("colour1");
var colour2 = document.getElementById("colour2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + colour1.value + ", " + colour2.value + ")";
}

