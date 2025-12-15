// ==============================
// preloader
// ==============================
let preloader = document.querySelector(".preloader");
setTimeout(function () {
  preloader.style.display = "none";
}, 100);

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
    navlist.style.right = "0px";
    togglebtn.style.zIndex = "9999";
    togglebtn.style.position = "fixed";
    togglebtn.style.right = "100px";
    apper = !apper;
  } else {
    navlist.style.right = "-150px";
    apper = !apper;
    togglebtn.style.position = "fixed";
    togglebtn.style.right = "50px";
  }
});
console.log(togglebtn);
