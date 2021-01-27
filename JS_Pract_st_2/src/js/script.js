'use strict';

document.addEventListener('DOMContentLoaded', () =>{

    const adv = document.querySelectorAll('.promo__adv img'),
          bg = document.querySelector('.promo__bg'),
          genre = bg.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');


    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    addForm.addEventListener('submit', (event) =>{
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if(newFilm){  // тут проверка на true, т.е. если ВВЕДЕНО

            if(newFilm.length > 21){
                newFilm = `${newFilm.slice(0, 21)}...`;
            }

            if(favorite){ // тут проверка на true ,т.к. если НАЖАТА 
                console.log('Добавлен любимый фильм');
            }
            movieDB.movies.push(newFilm);
            sortArray(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset();
    });

    const deleteArr = (arr) =>{
        arr.forEach(item => {
            item.remove();
        });
    };
    
    const createStyle = () => {
        genre.textContent = 'драма';

        bg.style.backgroundImage = 'url(img/bg.png)';
    };
   
    const sortArray = (arr) =>{
        arr.sort();
    };


    const createMovieList = (film, perent) =>{
        perent.innerHTML = '';
        sortArray(film);  //мы хотим, чтобы при вызове функции еще и шла сортировка

        film.forEach((item, i) => { 
            perent.innerHTML += `
                <li class="promo__interactive-item">${i+1}. ${item}
                    <div class="delete"></div>
                </li>
            `;
        });                 //далее логика такова: после создания листа фильмов,мы можем какой-то элемент и удалить
        document.querySelectorAll('.delete').forEach((btn, i) => {  //т.к. нам больше "корзинки" не надо, обращаемся к ним без создания переменной
            btn.addEventListener('click', () =>{
                btn.parentElement.remove();             //обращаемся к родителю "корзинки" и удаляем его
                movieDB.movies.splice(i, 1);            //удаляем элемент и из списка :  splice вырезает кусок (от, сколько резать)
                createMovieList(film, perent);          //после удаления элемента, происходит рекурсия (функция вызывает сама себя) и перезаписывает список
            });
        });
    };

   
    deleteArr(adv);
    createStyle();
    createMovieList(movieDB.movies, movieList);

});
