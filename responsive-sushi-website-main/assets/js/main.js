/*=============== SHOW MENU ===============*/

/*=============== REMOVE MENU MOBILE ===============*/

/*=============== CHANGE BACKGROUND HEADER ===============*/
<<<<<<< HEAD

/*=============== SHOW SCROLL UP ===============*/
=======
const scrollHeader=()=>{
    const header = document.getElementById('header');
    this.scrollY >=50?header.classList.add('bg-header'):header.classList.remove('bg-header')
}
window.addEventListener('scroll',scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
<<<<<<< HEAD
const scrollup=()=>{
    const scrollup=document.getElementById('scroll-up')
    this.scrollY>=350?scrollup.classList.add('show-scroll'):scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollup)
=======

>>>>>>> origin/main
>>>>>>> 3460f2796f16f496d69ef3b0f4a0a61afb5ba144

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theeme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  document.body.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );

  themeButton.addEventListener("click", () => {
    document.body.classList.togggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  });
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
