function droneBox(smallImg) {
    let fullImg = document.getElementById('lg-img');
    fullImg.src = smallImg.src;
}




// Counter
const countDisplay = document.querySelector('.count');
const countPlus = document.getElementById('plus');
const countMinus = document.getElementById('minus');
let countPriceOne = document.getElementById('counter-price_one');


let count = 1;
countPriceOne.innerHTML = 15001.27;

countPlus.addEventListener("click",()=>{
    count++;
    countDisplay.innerHTML = count;
    countPriceOne.innerHTML = 15001.27 * count;
});
countMinus.addEventListener("click",()=>{
    count--;
    countDisplay.innerHTML = count;
    countPriceOne.innerHTML = 15001.27 * count;
    if(countPriceOne.innerHTML === 0) {
        return 0;
    }
});


// advSwiper - for responsive

var swiper = new Swiper(".droneAdvSwiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});