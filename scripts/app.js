const navBtn = document.querySelector(".nav__btn")
let navMenu = document.querySelector(".nav-menu")
let navOpen  = false;

navBtn.addEventListener("click" ,function(){
    if (navOpen){
        navBtn.classList.remove("nav__btn--open")
        navOpen  = false
        navMenu.style.left = "-20rem"
    }else{
        navBtn.classList.add("nav__btn--open")
        navOpen = true
        navMenu.style.left = "0"
    }
})
