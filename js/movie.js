let movies = [];
let movie = {};
let countMovie = 0;


let movieTitle = document.querySelector(".movie-title");
// let movieImage = document.querySelector(".movie-image")
let movieDescription = document.querySelector(".movie-description");

let movieBack = document.querySelector(".movie-back");
let movieForward = document.querySelector(".movie-forward");
let movieRead = document.querySelector(".movie-read");

let movieContainer = document.querySelector(".movie-container")


var domReadyMovies = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
    };


    domReadyMovies(getMovies);


    function getMovies(){
        fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=" + MovieKey)
        .then(response => response.json())
        .then(data => {
            movies = data.results;
            movieSelect();
        })
        .catch(console.error());
        
    }


    function movieSelect(){
        countMovie =  countMovie <= movies.length && countMovie >0 ? countMovie : 0;
        console.log(movie);
        movie = movies[countMovie];
        movieTitle.innerHTML = movie.title;
        console.log(movie);
        movieDescription.innerHTML = movie.overview;
        console.log(movie.overview);
        movieContainer.style.backgroundImage = 'url("https://image.tmdb.org/t/p/original/' + movie.backdrop_path + '")';
        movieContainer.style.backgroundSize = 'cover';
        movieContainer.style.backgroundAttachment = "inherit";
    }


    movieBack.addEventListener('click', backMovie);
    movieForward.addEventListener('click', nextMoive);

    function nextMoive(){
    countMovie ++;
    movieSelect();
    }

    function backMovie(){
        countMovie -- ;
        movieSelect();
    }

   


    