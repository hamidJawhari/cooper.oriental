window.onload = function() {
  let load = document.querySelector(".load");
  document.body.removeChild(load);
  document.querySelector(".site").style.display = "block";
}
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