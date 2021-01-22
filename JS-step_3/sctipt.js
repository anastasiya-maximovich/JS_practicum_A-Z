/* Задание на урок:
1) Первую часть задания повторить по уроку(с преподавателем):
    а) создать функцию start , которая должна спрашивать у пользователя 'Сколько фильмов вы уже просмотрели?'. Проверить , что ответ является числом;
    б) создать функцию rememberMyFilms , которая дважды задает два вопроса(- 'Один из последних просмотренных фильмов?' - 'На сколько оцените его?');
    в) создайте функцию detectPersonalLevel, которая даст оценку вашим просторам фильма.
    
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос "Ваш любимый жанр под номером ${номер по порядку}". 
Каждый ответ записывается в массив данных genres
P.S. Функции вызывать не обязательно */

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){ //в проверке на число идём от обратного
        numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for(let i = 0; i < 2; i++){                               //тут цикл из step_2
        const a = prompt('Один из последних просторенных фильмов?', '');
        const b = +prompt('На сколько оцените его?', '');

        if(a != '' && b != '' && a != null && b != null && a.length < 50){ 
            personalMovieDB.movies[a] = b;
        }else{
            i--;                                            
        }      
    }
}

rememberMyFilms();


function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        console.log("Маловато будет");
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы любитель кино!");
    }else if(personalMovieDB.count >= 30){
        console.log("Да вы киноман!");
    }else{
        console.log('error');                   // тут цикл из step_2
    }
}

detectPersonalLevel();


function showMyDB (hidden){
    if(!hidden){                       // проверка от обратного -- не скрыта. У нас придет false, оно проверяется с неСкрыто. Это  true => выводим
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);


function writeYourGenres(){
    for(let i = 1; i <= 3; i++){          // можно сначала создать переменную и в неё положить вопрос, но ТАК мы экономим доли секунд для подсчета
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}

writeYourGenres();
