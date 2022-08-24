///projects page
const clientWrap = document.querySelector(".client-wrap");

function scrollWinBottom() {
  clientWrap.scrollBy(0, 100);
}
function scrollWinTop() {
  clientWrap.scrollBy(0, -100);
}

//client change

const intToggle = document.querySelector(".btn-int-toggle");
const archToggle = document.querySelector(".btn-arch-toggle");
const intSection = document.getElementById("int");
const archSection = document.getElementById("arch");
const intClientBtn = document.querySelectorAll(".btn-int");
const archClientBtn = document.querySelectorAll(".btn-arch");

let section;
let sectionKey;

const init = function () {
  allPageHide();
  intSection.classList.add("displayBlock");
  document.querySelector(".i-img-cont0").classList.add("displayFlex");
  document.querySelector(".i-detail0").classList.add("displayGrid");
  activeClientHide();
  intClientBtn[0].classList.add("active-client");

  archSection.classList.remove("displayBlock");
  intToggle.classList.add("toggle-active");
  archToggle.classList.remove("toggle-active");
  sectionChange();
};

const displayArch = function () {
  allPageHide();
  archSection.classList.add("displayBlock");
  document.querySelector(".a-img-cont0").classList.add("displayFlex");
  document.querySelector(".a-detail0").classList.add("displayGrid");
  activeClientHide();
  archClientBtn[0].classList.add("active-client");

  intSection.classList.remove("displayBlock");
  archToggle.classList.add("toggle-active");
  intToggle.classList.remove("toggle-active");
  sectionChange();
};

const activeClientHide = function () {
  if (intSection.classList.contains("displayBlock")) {
    for (let x = 0; x < intClientBtn.length; x++) {
      intClientBtn[x].classList.remove("active-client");
    }
  } else if (archSection.classList.contains("displayBlock")) {
    for (let x = 0; x < archClientBtn.length; x++) {
      archClientBtn[x].classList.remove("active-client");
    }
  }
};

const allPageHide = function () {
  if (intSection.classList.contains("displayBlock")) {
    for (let x = 0; x < intClientBtn.length; x++) {
      document.querySelector(`.i-img-cont${x}`).classList.remove("displayFlex");
      document.querySelector(`.i-detail${x}`).classList.remove("displayGrid");
    }
  } else if (archSection.classList.contains("displayBlock")) {
    for (let x = 0; x < archClientBtn.length; x++) {
      document.querySelector(`.a-img-cont${x}`).classList.remove("displayFlex");
      document.querySelector(`.a-detail${x}`).classList.remove("displayGrid");
    }
  }
};

const sectionChange = function () {
  if (intSection.classList.contains("displayBlock")) {
    sectionClientBtn = intClientBtn;
    sectionKey = "i";

  } else if (archSection.classList.contains("displayBlock")) {
    sectionClientBtn = archClientBtn;
    sectionKey = "a";
  }

  for (let i = 0; i < sectionClientBtn.length; i++) {
    sectionClientBtn[i].addEventListener("click", function () {
      activeClientHide();
      allPageHide();
      sectionClientBtn[i].classList.add("active-client");
      document
        .querySelector(`.${sectionKey}-img-cont${i}`)
        .classList.add("displayFlex");
      document
        .querySelector(`.${sectionKey}-detail${i}`)
        .classList.add("displayGrid");
    });
  }
};

init();

intToggle.addEventListener("click", init);
archToggle.addEventListener("click", displayArch);

// client image slideshow

const slideshowImages = document.querySelectorAll(
  `.project-image-container .slideshow-img`
);
const slideshowImagesBg = document.querySelectorAll(
  `.project-image-container .slideshow-img-bg`
);
let currentImageCounter = 0;
slideshowImagesBg[currentImageCounter].style.display = "block";
slideshowImages[currentImageCounter].style.display = "block";

// nextImageDelay = 5000;
// setInterval(nextImage, nextImageDelay);

// function nextImage() {
//   slideshowImages[currentImageCounter].style.display = "none";
//   slideshowImagesBg[currentImageCounter].style.display = "none";
//   currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
//   slideshowImages[currentImageCounter].style.display = "block";
//   slideshowImagesBg[currentImageCounter].style.display = "block";
// }

//****************** 

// const intImgIndex = document.querySelectorAll('.section-int .project-image-container');

// let slideshowImg=[];
// let slideshowBgImg=[];

// for(let i = 0; i<intImgIndex.length;i++){
// slideshowImg[i] = document.querySelectorAll(`.${sectionKey}-img-cont${i} .slideshow-img`);
// slideshowBgImg[i]=document.querySelectorAll(`.${sectionKey}-img-cont${i} .slideshow-img-bg`);
// }

// let currentImgCounter = 0;

// for(let i = 0; i<intImgIndex.length;i++){
//   slideshowImg[i][currentImgCounter].style.display = "block";
//   slideshowBgImg[i][currentImgCounter].style.display = "block";
//   // console.log(i);
// }

// let activeIndex=[];

// for(let i = 0;i<intImgIndex.length;i++){
//   activeIndex[i] = i;
// }

// nextImgDelay = 1000;
// setInterval(nextImg,nextImgDelay);
// const maxImgNo = 3;

//   function nextImg(){
//     slideshowImg[i][currentImgCounter].style.display = "none";
//     slideshowBgImg[i][currentImgCounter].style.display = "none";
//     console.log(currentImgCounter);
//     currentImgCounter = (currentImgCounter + 1) % maxImgNo;
//     slideshowImg[i][currentImgCounter].style.display = "block";
//     slideshowBgImg[i][currentImgCounter].style.display = "block";
//   }
