// ==============================
// preloader
// ==============================
let preloader = document.querySelector(".preloader");
setTimeout(function () {
  preloader.style.display = "none";
  document.body.style.overflow = "auto";
}, 3000);

// ===============================
// nav-list-toggle
// ===============================
let lis = document.querySelectorAll(".nav-list li");
lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
  });
});

// ===============================
//  change word
// ===============================
let text = ["web developer", "front end developer"];
let textindex = 0;
let print = true;
let index = 0;

function typing() {
  let pargraph = document.querySelector("#titles");
  if (!pargraph) return;

  if (print) {
    pargraph.textContent = text[textindex].slice(0, index);
    index++;
    if (index > text[textindex].length) {
      print = false;
      setTimeout(typing, 1000);
      return;
    }
    setTimeout(typing, 180);
  } else {
    pargraph.textContent = text[textindex].slice(0, index);
    index--;
    if (index < 0) {
      print = true;
      index = 0;
      textindex = (textindex + 1) % 2;
    }
    setTimeout(typing, 100);
  }
}
window.onload = () => {
  typing();
};
// ===============================

// ===============================
// toogle menue
// ===============================
let togglebtn = document.querySelector("#toggle");
let navlist = document.querySelector("#nav-list");
let separetor = document.querySelector("#separetor");
let frist = document.querySelector("#frist");
let middel = document.querySelector("#middel");
let last = document.querySelector("#last");
let apper = true;
if (window.innerWidth < 768) {
  navlist.style.display = "none";
} else if (window.innerWidth >= 768) {
  navlist.style.display = "block";
}
togglebtn.addEventListener("click", () => {
  if (apper) {
    navlist.style.display = "block";
    separetor.style.display = "block";
    document.body.style.overflow = "hidden";
    separetor.style.zIndex = "39";
    togglebtn.style.transform = "translateX(-75px)";
    togglebtn.style.transition = "transform 1s ease";
    middel.style.display = "none";
    frist.style.transform = "rotate(45deg) translate(1px, -1px)";
    last.style.transform = "rotate(-45deg) translate(8px, -8px)";
    frist.style.transition = "transform 0.5s ease";
    last.style.transition = "transform 0.5s ease";
    apper = !apper;
  } else {
    navlist.style.display = "none";
    separetor.style.display = "none";
    document.body.style.overflow = "auto";
    separetor.style.zIndex = "0";
    middel.style.display = "block";
    frist.style.transform = "rotate(0deg) translate(0px, 0px)";
    last.style.transform = "rotate(0deg) translate(0px, 0px)";
    frist.style.transition = "transform 0.5s ease";
    last.style.transition = "transform 0.5s ease";
    apper = !apper;
    togglebtn.style.transform = "translateX(0px)";
  }
});
// ===============================
// ===============================
lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    if (window.innerWidth < 768) {
      navlist.style.display = "none";
      separetor.style.display = "none";
      document.body.style.overflow = "auto";

      separetor.style.zIndex = "0";
      middel.style.display = "block";
      frist.style.transform = "rotate(0deg) translate(0px, 0px)";
      last.style.transform = "rotate(0deg) translate(0px, 0px)";
      frist.style.transition = "transform 0.5s ease";
      last.style.transition = "transform 0.5s ease";
      apper = !apper;
      togglebtn.style.transform = "translateX(0px)";
    }
  });
});

// ===============================
// ===============================
separetor.addEventListener("click", () => {
  navlist.style.display = "none";
  separetor.style.display = "none";
  separetor.style.zIndex = "0";
  document.body.style.overflow = "auto";
  middel.style.display = "block";
  frist.style.transform = "rotate(0deg) translate(0px, 0px)";
  last.style.transform = "rotate(0deg) translate(0px, 0px)";
  frist.style.transition = "transform 0.5s ease";
  last.style.transition = "transform 0.5s ease";``

  apper = !apper;
  togglebtn.style.transform = "translateX(0px)";
});
