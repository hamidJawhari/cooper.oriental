window.onload = function () {
	let load = document.querySelector(".load");
	document.body.removeChild(load);
	document.querySelector(".site").style.display = "block";
}
/* slid */
const myslide = document.querySelectorAll('.myslide');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 3000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 3000);
}
function slidefun(n) {

	let i;
	for (i = 0; i < myslide.length; i++) {
		myslide[i].style.display = "none";
	}
	if (n > myslide.length) {
		counter = 1;
	}
	if (n < 1) {
		counter = myslide.length;
	}
	myslide[counter - 1].style.display = "block";
}
document.querySelector(".next").addEventListener("click", function () {
	plusSlides(1);
})
document.querySelector(".prev").addEventListener("click", function () {
	plusSlides(-1);
})
/* end slid */
function showItem() {
	let contentText = document.querySelector(".content-text");
	let contentTitle = document.querySelector(".content-title");
	if (contentTitle.getBoundingClientRect().top < innerHeight / 1.3) {
		contentTitle.classList.add("fade-in");
		contentText.classList.add("fade-in");
	}
}
onscroll = function () {
	showItem();
	fixedNav()
}