/*=============== SHOW MENU ===============*/


/*=============== REMOVE MENU MOBILE ===============*/


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader=()=>{
    const header = document.getElementById('header');
    this.scrollY >=50?header.classList.add('bg-header'):header.classList.remove('bg-header')
}
window.addEventListener('scroll',scrollHeader)

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


/*=============== SCROLL REVEAL ANIMATION ===============*/
