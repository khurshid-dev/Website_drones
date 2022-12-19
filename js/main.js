const parentNavbar = document.querySelector('.h-ends');
const navbar = document.querySelector('.navbar-menu');
const iconMenu = document.querySelector('.h-ends button');


iconMenu.addEventListener('click', () => {
    parentNavbar.classList.toggle('active');
    iconMenu.classList.toggle('icon_menu');
})


// Modal Window section

const korzina = document.querySelector('.korzina-section');
const product = document.querySelector('.product-korzina');
const shoppingIcon = document.querySelector('.icon_shoppingcart');
const closeModal = document.getElementById('closeModal');


shoppingIcon.addEventListener('click', () => {
    korzina.classList.toggle('block');
    korzina.classList.toggle('hidden');
});
closeModal.addEventListener('click', () => {
    korzina.classList.toggle('block');
    korzina.classList.toggle('hidden');
});


// Counter
const countDisplay = document.querySelector('.count');
const countPlus = document.getElementById('plus');
const countMinus = document.getElementById('minus');
let countPriceOne = document.getElementById('counter-price_one');
let countPriceAll = document.getElementById('counter-price_all');


let count = 1;
countDisplay.innerHTML = count;
countPriceOne.innerHTML = 15001.27;
countPriceAll.innerHTML = countPriceOne.innerHTML;

countPlus.addEventListener("click",()=>{
    count++;
    countDisplay.innerHTML = count;
    countPriceOne.innerHTML = 15001.27 * count;
    countPriceAll.innerHTML = countPriceOne.innerHTML;
});
countMinus.addEventListener("click",()=>{
    count--;
    countDisplay.innerHTML = count;
    countPriceOne.innerHTML = 15001.27 * count;

    countPriceAll.innerHTML = countPriceOne.innerHTML;
});



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