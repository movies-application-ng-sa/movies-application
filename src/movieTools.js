
const buildMovieHtml = (movies) => {
    let html = `<table><form action="">`;
    let idMovieNumber = movies.length;
    movies.forEach((movie) => {
        html += `<tr><td>${movie.title}</td><td>Rating: ${movie.rating}</td><td><button class="btn" type="button">Edit Movie</button></td></tr>`
    });
    console.log(idMovieNumber);
    return html += `</table></form>`;
};



export default {buildMovieHtml};