// Nav Bar

let mainBar = document.getElementById("mainBar");
let closeBar = document.getElementById("closeBar");
let openBar = document.getElementById("openBar");

openBar.onclick = function () {
  mainBar.classList.add("openMainBar");
};

closeBar.onclick = function () {
  mainBar.classList.remove("openMainBar");
};

//  inpSearch

let iconSearch = document.getElementById("iconSearch");
let sectionSearch = document.querySelector(".sectionSearch");
let closePtn = document.getElementById("closePtn");

iconSearch.onclick = function() {
  this.style.display = "none";
  closePtn.style.display = "block";
  sectionSearch.style.display = "flex"
}

closePtn.onclick = function() {
  this.style.display = "none";
  iconSearch.style.display = "block";
  sectionSearch.style.display = "none"
}


// btnScroll

let btnScroll = document.getElementById("btnScroll");

window.onscroll = function () {
  if (scrollY >= 400) {
    btnScroll.style.display = "flex";
  } else {
    btnScroll.style.display = "none";
  }
};

btnScroll.onclick = function () {
  scroll({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
