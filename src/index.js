/**
 * es6 modules and imports
 */
import movieTools from './movieTools';

/**
 * require style imports
 */
const {getMovies} = require('./api.js');
const loadDiv = document.getElementById('loadScreen');
const movieContainer = document.getElementById('movieContainer');

getMovies()
  .then((movies) => {
    loadDiv.style.display = "none";
    movieContainer.style.display = 'block';
    movieContainer.innerHTML = movieTools.buildMovieHtml(movies);
    console.log('Here are all the movies:');

    movies.forEach(({title, rating, id}) => {
      console.log(`id#${id} - ${title} - rating: ${rating}`);
    });
  }).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.');
  console.log(error);
});

