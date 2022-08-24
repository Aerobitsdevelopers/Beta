/////MOBILE NAVIGATION/////

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// const loginBtn = document.querySelector(".nav-btn");
// loginBtn.addEventListener("click", function () {
//   headerEl.classList.remove("nav-open");
// });

/////smoothscrolling/////

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // e.preventDefault();

    const href = link.getAttribute("href");

    //scroll back to top
    if (link == "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    //scroll to other links
    if (link !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behaviour: "smooth" });
    }

    //Close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

//testimonial

const testimonial = document.querySelectorAll('.testimonial');
const tmnlBtnLeft =document.querySelector('.testimonial-nav-left');
const tmnlBtnRight=document.querySelector('.testimonial-nav-right');

let i =0;
const ini = function(){
  testimonial[0].classList.remove('hide');
  testimonial[0].classList.add('fadein');
}
const activeTmnl = function(){
  testimonial[i].classList.remove('hide');
  testimonial[i].classList.add('fadein');
}
const tmnlHide=function(){
  for(let i = 0;i<testimonial.length;i++){
    testimonial[i].classList.add('hide');
    testimonial[i].classList.add('fadeout');
  }
}

tmnlBtnRight.addEventListener("click",function(){
  tmnlHide();
  i++;
  if(i<=testimonial.length-1) i=i
  else i=0
  activeTmnl();
})

tmnlBtnLeft.addEventListener("click",function(){
  tmnlHide();
  i--;
  if(i>=0) i=i
  else i=testimonial.length-1
  activeTmnl();
})

ini();

