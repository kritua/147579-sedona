var buttonChoose = document.querySelector("#choose");
var elem = document.querySelector(".hotel-choose");

buttonChoose.onclick = function() {
	buttonChoose.removeAttribute("href");
	if (elem.style.display == "block") {
		elem.style.display = "none";
	} else {
		elem.style.display = "block";
	}
};

var iframe = document.querySelector("#iframe");
var imageMap = document.querySelector(".show");

iframe.classList.add("show");

if (iframe) {
	imageMap.style.display = "none";
} else {
	imageMap.style.display = "block";
}

