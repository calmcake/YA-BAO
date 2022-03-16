function toggleActive(){
    menu.classList.toggle("active");
    burgerBtn.classList.toggle("active");
}

let menu = document.getElementById("menu");
let burgerBtn = document.getElementById("burgerBtn");

burgerBtn.addEventListener("click", toggleActive);