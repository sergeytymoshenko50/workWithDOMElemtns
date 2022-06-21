/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const doc = document.body;

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


doc.querySelectorAll(".promo__adv *").forEach(item =>{
    item.remove();
});

doc.querySelector(".promo__genre").innerHTML = "ДРАМА";
doc.querySelector(".promo__bg").style.cssText = `background: url(../img/bg.jpg);
                                                background-repeat: no-repeat;
                                                background-size: cover;`;

doc.querySelectorAll(".promo__interactive-item").forEach((item, i) => {
    movieDB.movies.sort();
    item.innerHTML = `${i+1}. ${movieDB.movies[i]} <div class="delete"></div>
    `;
});