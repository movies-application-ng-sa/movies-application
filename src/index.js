/**
 * es6 modules and imports
 */
import movieTools from './movieTools';

/**
 * require style imports
 */
import {getMovies} from './api.js';
const loadDiv = document.getElementById('loadScreen');
const movieContainer = document.getElementById('movieContainer');

const usersInputMovie = document.getElementById('movieTitle');
const usersInputRating = document.getElementById('movieRating');

const makeButtonListeners = () => {
    const addMovieBtn = document.getElementById('addMovieButton');
    const editMovieBtn = document.getElementById('editMovieButton');
    addMovieBtn.addEventListener('click', addMovie);
    editMovieBtn.addEventListener('click', editMovies);
    let buttons = document.querySelectorAll('.btn');
    buttons.forEach(function(button) {
        button.addEventListener('click', function(event){
         // these two lines work the same in getting the attribute's value
            deleteMovies(event, this.getAttribute("itemid"));
         // deleteMovies(event, this.getAttributeNode("itemid").value);
        })
    });
};
const toggleMovies = () => {
    loadDiv.style.display = "none";
    movieContainer.style.display = 'block';
};
const toggleLoading = () => {
    loadDiv.style.display = "block";
    movieContainer.style.display = 'none';
};

const loadMovies = () => {
    getMovies()
        .then((movies) => {
            toggleMovies();
            movieContainer.innerHTML = movieTools.buildMovieHtml(movies);
            console.log('Here are all the movies:');
            movies.forEach(({title, rating, id}) => {
                console.log(`id#${id} - ${title} - rating: ${rating}`);
            });
            makeButtonListeners();
        }).catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.');
        console.log(error);
    });
};
loadMovies();

const addMovie = (event) => {
    event.preventDefault();
    if (usersInputMovie.value === ""){
        return;
    }
    const post = {title: usersInputMovie.value, rating: usersInputRating.value};
    const url = '/api/movies';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    };
    fetch(url, options)
        .then(() => {
            toggleLoading();
            loadMovies();
        })
        .catch((error) => console.log(error) /* handle errors */);


    document.getElementById('movieForm').reset();
};



const editMovies = (event) => {
    event.preventDefault();
    const movieArray = document.getElementsByClassName('movies');
    const ratingArray = document.getElementsByClassName('rating');

    console.log(movieArray[0]);
    for(let i = 0; i< movieArray.length; i++){
        let post =  {title: movieArray[i].innerText, rating: ratingArray[i].innerText};
        let url = `/api/movies/${i + 1}`;
        let options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post),
        };
        console.log(`This is post log ${JSON.stringify(post)}`);
        fetch(url, options)
            .then(() => {
                toggleLoading();
                loadMovies();
            })
            .catch((error) => console.log(error) /* handle errors */);
    }
};



const deleteMovies = (event, id) => {
    event.preventDefault();

    const url = `/api/movies/${parseFloat(id)}`;
    const options = {
        method: 'DELETE'
    };
    fetch(url, options)
        .then(() => {
            toggleLoading();
            loadMovies();
        })
        .catch((error) => console.log(error) /* handle errors */);

};
