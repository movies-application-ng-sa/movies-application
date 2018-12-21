

const buildMovieHtml = (movies) => {
    let html = '';
    movies.forEach((movie) => {
        html += `<div><h4>${movie.title}</h4></div>`
    });
    return html;
};

export default {buildMovieHtml};