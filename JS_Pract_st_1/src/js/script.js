'use strict';

const adv = document.querySelectorAll('.promo__adv img');
const bg = document.querySelector('.promo__bg');
const genre = bg.querySelector('.promo__genre');
const movieList = document.querySelector('.promo__interactive-list');


const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

adv.forEach(item => {
    item.remove();
});

genre.textContent = 'драма';

bg.style.backgroundImage = 'url(img/bg.png)';

movieList.innerHTML = '';

movieDB.movies.sort().forEach((item, i) => { //тут сразу сортировка. можно вынести в однельную строку movieDB.movies.sort();
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i+1}. ${item}
            <div class="delete"></div>
        </li>
    `;
});

