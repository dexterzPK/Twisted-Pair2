/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollup=()=>{
    const scrollup=document.getElementById('scroll-up')
    this.scrollY>=350?scrollup.classList.add('show-scroll'):scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollup)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections=document.querySelectorAll('section[id]')

const scrollActive=()=>{
  const scrollY=window.pageYOffset

  sections.forEach(current=>{
    const sectionHeight=current.offsetHeight,
    sectionTop=current.offsetHeight-58,
    sectionId=current.getAttribute('id'),
    sectionClass=document.querySelectorAll('.nav__menu a[href*='+sectionId+']')

    if(scrollY>sectionTop && scrollY<=sectionTop+sectionHeight){
      sectionClass.classList.add('active-link')
    }
    else{
      sectionClass.classList.remove('active-link')
    }
  })
}

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
const sr=ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay:400,
    // reset:true, //Animations repeat v
})

sr.reveal(`.home__img, .newsletter__container, .footer__logo
            .footer__description, .footer__content, .footer__info`)
sr.reveal(`.home__data`, {origin: 'botton'})
sr.reveal(`.about__data , .recently__data`, {origin: 'left'})
sr.reveal(`.about__img, .recently__img`, {origin: 'right'})
sr.reveal(`.popular__card`, {interval:100})