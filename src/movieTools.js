
const buildMovieHtml = (movies) => {
    let html = `<h3>Click a movie to edit</h3><table>`;
    let idMovieNumber = movies.length;
    movies.forEach((movie, id) => {
        html += `<tr class="rowForMovies"><td class="movies" contenteditable="true">${movie.title}</td><td class='rating'contenteditable="true">${movie.rating}</td></tr>`
    });

    console.log(idMovieNumber);
    return html += `</table>`;
};

// Class always returns as an array, use indexes of to move through the class array

// document.getElementsByClassName('movies0')[0].innerText

export default {buildMovieHtml};