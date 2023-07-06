
const menuIcon = document.querySelector(".hidden2");
const closeMenu = document.querySelector(".close-menu");
const navElements = document.querySelector(".nav-elements");
const subMenu = document.querySelectorAll(".white");
const subMenu2 = document.querySelector(".hide");
const submenu3 = document.querySelector(".hide2");
const navElementsDesktop =document.querySelector(".nav-links");

/* to display the hidden menu*/
menuIcon.addEventListener("click", () => {
    menuIcon.style.display = "none";
    closeMenu.classList.remove("close-menu");
    navElements.classList.remove("hidden");
})

/*to remove the hidden menu*/
closeMenu.addEventListener("click", () => {
    closeMenu.classList.add("close-menu")
    menuIcon.style.display = "unset";
    navElements.classList.add("hidden");
})

/*for the sub-menu*/
subMenu.forEach(subMenu => {
    subMenu.addEventListener("click", () => {
        subMenu.classList.toggle("active");
    })
});
