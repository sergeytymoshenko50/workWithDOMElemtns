/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

// const doc = document.body,
//         filmList = document.querySelector(".promo__interactive-list");

// const movieDB = {
//     movies: [
//         "Логан",
//         "Лига справедливости",
//         "Ла-ла лэнд",
//         "Одержимость",
//         "Скотт Пилигрим против..."
//     ]
// };

// doc.querySelectorAll(".promo__adv img").forEach(item =>{
//     item.remove();
// });

// doc.querySelector(".promo__genre").innerHTML = "ДРАМА";
// doc.querySelector(".promo__bg").style.cssText = `background: url(img/bg.jpg);
//                                                 background-repeat: no-repeat;
//                                                 background-size: cover;`;


// filmList.innerHTML ="";
// movieDB.movies.sort().forEach((item, i) => {    
//     filmList.innerHTML += `<li class="promo__interactive-item">${i + 1} ${item}
//                                 <div class="delete"></div>
//                            </li>`;
// });

// recursion
function factorial(n) {
    if(n === 1){
        return n;
    }else if(isNaN(n)){
        return "isNaN";
    }else if(n <= 0){
        return 1;
    }else {
        return n *= factorial(n -1);
    }
}
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));