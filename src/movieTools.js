
const buildMovieHtml = (movies) => {
    let html = `<h3>Click a movie to edit</h3><table><tr><td>Movie Title</td><td>Rating</td></tr>`;
    let idMovieNumber = movies.length;
    movies.forEach((movie) => {
        html += `<tr>`+
            `<td class="movies" contenteditable="true">${movie.title}</td>`+
            `<td class='rating' contenteditable="true">${movie.rating}</td>`+
            `<td ><button class="btn" type="button" itemid="${movie.id}">Delete Movie</button></td></tr>`

    });

    console.log(idMovieNumber);
    return html += `</table>`;
};

// Class always returns as an array, use indexes of to move through the class array

// document.getElementsByClassName('movies0')[0].innerText

export default {buildMovieHtml};