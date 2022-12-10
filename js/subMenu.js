const arrowSec = document.querySelectorAll('.category-item-menu h6');
const submenu = document.querySelectorAll('.sub-menu');

for(let i = 0; i < arrowSec.length; i++) {
    arrowSec[i].addEventListener('click', (e) => {
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle('showMenu');
        arrowParent.classList.toggle('hideMenu');
    })
}
