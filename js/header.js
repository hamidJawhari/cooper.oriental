function fixedNav() {
  let nav = document.querySelector("header");
  let links = document.querySelectorAll(".header-content ul li a");
  if (document.documentElement.scrollTop > nav.getBoundingClientRect().height) {
    nav.classList.add("fixed-nav");
    links.forEach(link => {
      link.classList.add("hover-a")
    })
  } else {
    nav.classList.remove("fixed-nav");
    links.forEach(link => {
      link.classList.remove("hover-a")
    })
  }
}
let openList = document.getElementById("open");
let closeList = document.getElementById("close");
let menu = document.querySelector(".links");
let li = document.querySelector(".links li")
openList.addEventListener("click", function () {
  menu.classList.add("show-list");
  li.classList.add("li-style");
  openList.classList.toggle("hide");
  closeList.classList.toggle("show");
})
closeList.addEventListener("click", function () {
  menu.classList.remove("show-list");
  openList.classList.toggle("hide");
  closeList.classList.toggle("show");
})
window.onresize = function () {
  let width = window.innerWidth;
  if (width > 768) {
    menu.classList.remove("show-list");
    openList.classList.remove("hide");
    closeList.classList.remove("show");
  }
}
let links = document.querySelectorAll(".links li");
links.forEach(e => {
  e.addEventListener("click", function () {
    menu.classList.remove("show-list");
    closeList.classList.remove("show");
    openList.classList.remove("hide");
  })
})
// scroll to top function
let btn = document.querySelector(".to-top");
btn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
function toTop() {
  if (document.documentElement.scrollTop > window.innerHeight / 2) {
    btn.classList.add("active")
  } else {
    btn.classList.remove("active")
  }
}
onscroll = function () {
  fixedNav();
  toTop();
}