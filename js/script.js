let openList  = document.getElementById("open");
let closeList = document.getElementById("close");
let menu      = document.querySelector(".links");
let li        = document.querySelector(".links li")
openList.addEventListener("click", function(){
  menu.classList.add("show-list")
  li.classList.add("li-style")
  openList.classList.toggle("hide")
  closeList.classList.toggle("show")
})
closeList.addEventListener("click", function(){
  menu.classList.remove("show-list")
  openList.classList.toggle("hide")
  closeList.classList.toggle("show")
})

window.onresize = function() {
  let width = window.innerWidth;
  if(width > 768) {
    menu.classList.remove("show-list")
    openList.classList.remove("hide")
    closeList.classList.remove("show")
  }
}
let links =  document.querySelectorAll(".links li");
links.forEach(e => {
  e.addEventListener("click", function(){
    menu.classList.remove("show-list")
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
  if(document.documentElement.scrollTop > nav.getBoundingClientRect().height){
    nav.classList.add("fixed-nav");
  }else {
    nav.classList.remove("fixed-nav");
  }
}
function showItem() {
  let contentText  = document.querySelector(".content-text");
  let contentTitle = document.querySelector(".content-title");
  let section      = document.querySelector(".section-img");
  console.log(contentText.clientTop);
  console.log(section.getBoundingClientRect().top)
  console.log(innerHeight)
  if(section.getBoundingClientRect().top <  innerHeight){
    contentTitle.classList.add("ikhtafi");
    contentText.classList.add("ikhtafi");
    console.log("hamid zeeen");
  }
}