
const buildMovieHtml = (movies) => {
    let html = `<h3>Click a movie to edit</h3><table>`;
    let idMovieNumber = movies.length;
    movies.forEach((movie, id) => {
        html += `<tr><td class="movies${id}" contenteditable="true">${movie.title}</td><td contenteditable="true">Rating: ${movie.rating}</td></tr>`
    });

    console.log(idMovieNumber);
    return html += `<tr><td><button class="btn" type="button">Submit Changes</button></td></tr></table>`;
};

// document.getElementsByClassName('movies0')[0].innerText

export default {buildMovieHtml};