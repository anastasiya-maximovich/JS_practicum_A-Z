/* Задание на урок:
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {                                         //можно использовать стрелочную функцию =>
        personalMovieDB.count = +prompt('Сколько фильмов вы уже просмотрели?', ''); // у нас была глобальная переменная numberOfFilms. мы ее исп-м только внутри функции, можем обращаться напрямую
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){ 
            personalMovieDB.count = +prompt('Сколько фильмов вы уже просмотрели?', '');
        }
    },
    rememberMyFilms: function(){
        for(let i = 0; i < 2; i++){          
            const a = prompt('Один из последних просторенных фильмов?', '');
            const b = +prompt('На сколько оцените его?', '');

            if(a != '' && b != '' && a != null && b != null && a.length < 50){ 
                personalMovieDB.movies[a] = b;
            }else{i--;}                                            
        }
    },
    detectPersonalLevel: function (){
        if(personalMovieDB.count < 10){
            console.log("Маловато будет");
        }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log("Вы любитель кино!");
        }else if(personalMovieDB.count >= 30){
            console.log("Да вы киноман!");
        }else{
            console.log('error');           
        }
    },
    showMyDB:  function (hidden){
        if(!hidden){              
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB:function  (){
        if(personalMovieDB.privat === true){
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function (){
        for (let i = 1; i < 2; i++){
            let gende = prompt(`Ваш любимый жанр под номером ${i}`);
            if(gende != '' || gende == null){
               personalMovieDB.genres[i-1] = gende; 
            }else{
                console.log('Вы ввели некорректные данные');
                i--;
            }
            personalMovieDB.genres.forEach((item, i) =>{
                console.log(`Любимый жанр ${i + 1} - это ${item}`);
            });
        }
    }
};

 /* Альтернативный вариант из урока
            
        let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase(); <-- Тут: мы можем задать вопрос лишь один раз и поросить ввести 3 ответа. 
                                                                                          Во избежание разного, ответ переводим в нижний регистр
        if (genres === '' || genres == null) {
            console.log('Вы ввели некорректные данные или не ввели их вовсе');
            i--;
         } else {
             personalMovieDB.genres = genres.split(', ');                  <-- делаем из ответов массив
             personalMovieDB.genres.sort();                                <-- сортируем ответы
         } 
*/


