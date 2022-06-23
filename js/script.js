/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener("DOMContentLoaded", ()=>{
    const doc = document.body,
    filmList = document.querySelector(".promo__interactive-list"),
    form = doc.querySelector("form.add"),
    input = form.querySelector("input.adding__input"),
    adv = doc.querySelectorAll(".promo__adv img"),
    checkbox = form.querySelector("input[type='checkbox']");
    

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        
        let newFilm = input.value.trim();
        const favorite = checkbox.checked;

        if(newFilm){

            if(newFilm.length > 21){
                newFilm = `${newFilm.slice(0, 21)}...`;
            }
            if(favorite){
                console.log("Add favorite film");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            addFilmList(movieDB.movies, filmList);
            e.target.reset();
        }

        
    });
    

    const removeAdv = (adv) =>{
        adv.forEach(item =>{
            item.remove();
        });
    };

    const someChanges = ()=>{
        doc.querySelector(".promo__genre").innerHTML = "ДРАМА";
        doc.querySelector(".promo__bg").style.cssText = `background: url(img/bg.jpg);
                                                    background-repeat: no-repeat;
                                                    background-size: cover;`;
    };

    const sortArr = (arr) =>{
        arr.sort();
    };
    sortArr(movieDB.movies);

    const addFilmList = (filmsListArr, filmAddElement) =>{
        filmAddElement.innerHTML ="";
        sortArr(filmsListArr);

        filmsListArr.sort().forEach((item, i) => {    
            filmAddElement.innerHTML += `<li class="promo__interactive-item">${i + 1} ${item}
                                    <div class="delete"></div>
                                    </li>`;
        });

        document.querySelectorAll(".delete").forEach((trash, i)=>{
            trash.addEventListener("click", ()=>{
                trash.parentElement.remove();
                movieDB.movies.splice(i, 1);
                addFilmList(filmsListArr, filmAddElement);
            });
        });
    };
    
    addFilmList(movieDB.movies, filmList);
    removeAdv(adv);
    someChanges();
});


// recursion
// function factorial(n) {
//     if(n === 1){
//         return n;
//     }else if(isNaN(n)){
//         return "isNaN";
//     }else if(n <= 0){
//         return 1;
//     }else {
//         return n *= factorial(n -1);
//     }
// }
// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(3));
// console.log(factorial(4));
// console.log(factorial(5));