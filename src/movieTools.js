const usersInputMovie = document.getElementById('movieFormInput').value

const buildMovieHtml = (movies) => {
    let html = '';
    let idMovieNumber = movies.length
    movies.forEach((movie) => {
        html += `<div><h4>${movie.title}</h4></div>`
    });
    console.log(idMovieNumber)
    return html;
};

const addMovie = (event) => {
    event.preventDefault()
    const blogPost = {title: usersInputMovie};
    const url = '/api/movies';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogPost),
    };
    fetch(url, options)
        .then(/* post was created successfully */)
        .catch(/* handle errors */);
    document.getElementById('movieForm').reset()
}



export default {buildMovieHtml, usersInputMovie, addMovie};