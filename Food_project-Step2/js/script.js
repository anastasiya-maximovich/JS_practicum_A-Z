window.addEventListener('DOMContentLoaded', ()=>{
     /* логика такая для Табов:
    1. создать функцию, чтобы скрыть Весь контент, и убрать класс активности у Всех табов;
    2. создать функцию, чтобы отобразить контент и назначить класс активности на 1 таб;
    3. делегирование событий, сделать обратотчик события по клику;
    */

    //Tabs

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabContent = document.querySelectorAll('.tabcontent'),
          tabHeader = document.querySelector('.tabheader__items');

    function hideTabContent (){
        tabContent.forEach(item =>{
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item =>{
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0){   
        tabContent[i].classList.add('show', 'fade');
        tabContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabHeader.addEventListener('click', (event) =>{
        const target = event.target;

        if(target && target.classList.contains('tabheader__item')){ 
            tabs.forEach((item, i) => {
                if(target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    /*Логика для отсчета такая:
    1. Необходима функция, которая будет устанавливать таймер;
    2. Необходима функция, которая будет рассчитывать разницу до конечного времени(до дедлайна);
         При этом необхдимо знать время пользователя и сравнивать с датой;
    3. Функция для обновления таймераю
    */

    //Timer

    const deadline = '2021-02-28'; // наш дедлайн

    function getTimeRemaning(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()), /*тут мы создали переменную разница от текущего времени до дедлайна
        мы использовали Date.parse, чтобы можно было получить числа, а именно МИЛлЛИСЕКУНДЫ */

              days = Math.floor(t / (1000 * 60 * 60 * 24)), // рассчет оставшихся дней(...) с округлением до целого
              hours = Math.floor((t / (1000 * 60 * 60)) % 24),
              minutes = Math.floor((t / (1000 * 60)) % 60),
              seconds = Math.floor((t / 1000) % 60);

        return {                        //возвращаем в виде объекта
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num){ // функция-помощник, хотим, чтобы число было двузначным (09, 01...)
        if(num >= 0 && num < 10){
            return `0${num}`;
        }else{
            return num;
        }
    }

    function setClock(selector, endtime){
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000); // создали переменную , в которую записали обновление счетчика

        updateClock(); // рапустили сразу, чтобы установилась дата, а дальше(через секундну) начнет работать setInterval
        
        function updateClock(){
            const t = getTimeRemaning(endtime); //тут создали переменную , в которой результат функции по оставшемуся времени

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if(t.total <= 0){ // проверяем счетчик на дедлайн и останавливем, если время вышло
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

});
