// ==============================
// preloader
// ==============================
let preloader = document.querySelector(".preloader");
setTimeout(function () {
  preloader.style.display = "none";
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
let apper = true;
togglebtn.addEventListener("click", () => {
  if (apper) {
    navlist.style.display = "block";
    navlist.style.opacity = "1";
    togglebtn.style.transform = "translateX(-50px)";
    togglebtn.style.transition = "transform 1s ease";
    apper = !apper;
  } else {
    navlist.style.display = "none";
    navlist.style.opacity = "0";
    apper = !apper;
    togglebtn.style.transform = "translateX(0px)";
  }
});
console.log(togglebtn);
