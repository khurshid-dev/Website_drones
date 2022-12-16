const parentNavbar = document.querySelector('.h-ends');
const navbar = document.querySelector('.navbar-menu');
const iconMenu = document.querySelector('.h-ends button');


iconMenu.addEventListener('click', () => {
    parentNavbar.classList.toggle('active');
    iconMenu.classList.toggle('icon_menu');
})


// Learn more section
const parenMore = document.querySelector('.info');
const more = document.querySelector('.more');


more.addEventListener('click', () => {
    parenMore.classList.toggle('open-active')
})


//swiper Product Drones on media 768

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
});

//swiper News Section on media 768

var swiper = new Swiper(".mySwiperTwo", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//swiper Advantage Section on media 480

var swiper = new Swiper(".advantageSwiper", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


AOS.init();