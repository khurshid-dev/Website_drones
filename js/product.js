function droneBox(smallImg) {
    let fullImg = document.getElementById('lg-img');
    fullImg.src = smallImg.src;
}




// Counter
const countsDisplay = document.querySelector('.counts');
const countsPlus = document.getElementById('pluss');
const countsMinus = document.getElementById('minuss');
let countsPriceOne = document.getElementById('counter-price_ones');


let counts = 1;
countsDisplay.innerHTML = counts;
countsPriceOne.innerHTML = 15001.27;

countsPlus.addEventListener("click",()=>{
    counts++;
    countsDisplay.innerHTML = counts;
    countsPriceOne.innerHTML = 15001.27 * counts;
});
countsMinus.addEventListener("click",()=>{
    counts--;
    countsDisplay.innerHTML = counts;
    countsPriceOne.innerHTML = 15001.27 * counts;
    if(counts === -1) {
        return null;
    }
});


// advSwiper - for responsive

var swiper = new Swiper(".droneAdvSwiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});



//Similar swiper

var swiper = new Swiper(".myproductSwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


//Character (chracteristic) section 

const characterItem = document.querySelectorAll('.character-item');

characterItem.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('active')
    })
})