 const boxParent = document.querySelector('.news-indexs'),
    boxs = document.querySelectorAll('.news-index'),
    contentNews = document.querySelectorAll('.news-box-header');


function hideContent() {
    boxs.forEach((item) => {
        item.classList.remove('active');
    });
    contentNews.forEach((item) => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    });
}

function showContent(i = 0) {
    boxs[i].classList.add('active');
    contentNews[i].classList.add('show', 'fade');
    contentNews[i].classList.remove('hide');
}

hideContent();
showContent();


boxParent.addEventListener('click', (event) => {
    const target = event.target;
    if(target && target.classList.contains('news-index')) {
        boxs.forEach((item, idx) => {
            if(target === item) {
                hideContent();
                showContent(idx);
            }
        });
    }
});

