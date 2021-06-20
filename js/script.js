window.onload = function() {
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
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
}
/* end slid */
let openList  = document.getElementById("open");
let closeList = document.getElementById("close");
let menu      = document.querySelector(".links");
let li        = document.querySelector(".links li")
openList.addEventListener("click", function(){
  menu.classList.add("show-list");
  li.classList.add("li-style");
  openList.classList.toggle("hide");
  closeList.classList.toggle("show");
})
closeList.addEventListener("click", function(){
  menu.classList.remove("show-list");
  openList.classList.toggle("hide");
  closeList.classList.toggle("show");
})
window.onresize = function() {
  let width = window.innerWidth;
  if(width > 768) {
    menu.classList.remove("show-list");
    openList.classList.remove("hide");
    closeList.classList.remove("show");
  }
}
let links =  document.querySelectorAll(".links li");
links.forEach(e => {
  e.addEventListener("click", function(){
    menu.classList.remove("show-list");
    closeList.classList.remove("show");
    openList.classList.remove("hide");
  })
})
onscroll = function() {
  fixedNav();
  showItem();
}
function fixedNav() {
  let nav = document.querySelector("header");
  let links = document.querySelectorAll(".header-content ul li a");
  if(document.documentElement.scrollTop > nav.getBoundingClientRect().height){
    nav.classList.add("fixed-nav");
    links.forEach(link => {
      link.classList.add("hover-a")
    })
  }else {
    nav.classList.remove("fixed-nav");
    links.forEach(link => {
      link.classList.remove("hover-a")
    })
  }
}
function showItem() {
  let contentText  = document.querySelector(".content-text");
  let contentTitle = document.querySelector(".content-title");
  if(contentTitle.getBoundingClientRect().top < innerHeight / 1.3) {
    contentTitle.classList.add("fade-in");
    contentText.classList.add("fade-in");
  }
}