"use strict"

const express = require("express");
const request = require("request");

const server = express();
const port = 8080;

server.get("/movies", function (req, res) {
  const includeAdult = false;
  const language = "en-US";
  const region = "US";
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/search/movie?query=${req.query.search}&include_adult=${includeAdult}&language=${language}&region=${region}`,
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmE4MmZkYTRmNTg1OTg4MWNkMmNlMTY0NTBjNmVlZiIsInN1YiI6IjYwMjQ2ODAxZGNmODc1MDAzZjM2ZDM4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WpVmYWBK6ARQojbcHVKE2kijUpV7iKRLjxBz46Ki3I0'
    }
  }
  request(options, (error, response, body) => {
    if (error) {
      throw new Error(error);
    }

    const rawMovies = JSON.parse(response.body).results;
    let movies = [];
    for (let rawMovieIndex = 0; rawMovieIndex < 10; rawMovieIndex++) {
      let rawMovie = rawMovies[rawMovieIndex];
      let movie = {
        movie_id: rawMovie.id,
        title: rawMovie.title,
        poster_image_url: rawMovie.poster_path,
        popularity_summary: `${rawMovie.popularity} out of ${rawMovie.vote_count}`
      }

      movies.push(movie);
    }

    res.send({
      status: response.statusCode,
      movies: movies
    });
  });
});

server.listen(port, () => {
  console.log(`server is up and running on port: ${port}`)
});