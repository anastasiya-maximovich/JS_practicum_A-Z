/* Задание на урок:
1) Первую часть задания повторить по уроку(с преподавателем)Ж
    а) создать ункцию start , которая должна спрашивать у пользователя 'Сколько фильмов вы уже просмотрели?'. Проверить , что ответ является числом;
    б) создать функцию rememberMyFilms , которая дважды задает два вопроса(- 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?');
    в) создайте функцию detectPersonalLevel, которая даст оценку вашим просторам фильма.

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
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
    for(let i = 0; i < 2; i++){           // тут i < 2, т.к. мы хотим задать 2 вопроса дважды (из задания  step_1)
        const a = prompt('Один из последних просторенных фильмов?', '');
        const b = +prompt('На сколько оцените его?', '');

        if(a != '' && b != '' && a != null && b != null && a.length < 50){ // тут нам проще проверить , чтобы условия НЕ выполнились
            personalMovieDB.movies[a] = b;
        }else{
            i--;                                            //т.е. хотим сделать шаг назад - на одну итерацию назад
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
        console.log('error');                   // тут в условии мы не проверяли на введение пустой строки , отмены или строки, а не цифрового значения вообще
    }
}

detectPersonalLevel();


function showMyDB (hidden){
    if(!hidden){                   // проверка от обратного -- не скрыта. У нас придет false, оно проверяется с неСкрыто. Это  true => выводим
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);


function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}

writeYourGenres();