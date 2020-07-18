const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?","");

const personalMoveDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilm1 = prompt("Один из последних просмотренных фильмов?",""),
      rateTheFilm1 = prompt("Оцените его:",""),
      lastFilm2 = prompt("Один из последних просмотренных фильмов?",""),
      rateTheFilm2 = prompt("Оцените его:","");

personalMoveDB.movies[lastFilm1] = rateTheFilm1;
personalMoveDB.movies[lastFilm2] = rateTheFilm2;

console.log(personalMoveDB);