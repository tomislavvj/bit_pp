
class Movie {
  constructor(movieTitle, movieLength, movieGenre) {
    this.movieTitle = movieTitle;
    this.movieLength = movieLength;
    this.movieGenre = movieGenre;
  }
  getData() {
    return `${this.movieTitle} duration: ${this.movieLength} genre: ${this.movieGenre}`;
  }
}





var addMovieButton = document.querySelector(".button");
addMovieButton.addEventListener("click", onAddMovieClick);

function onAddMovieClick() {
  var movieTitle = document.querySelector(".inputTitle").value;
  //  console.log(movieTitle);

  var movieLength = document.querySelector(".inputLength").value;
  //  console.log(movieLength);

  var movieGenre = document.querySelector(".inputGenre").value;
  // console.log(movieGenreValue);

  var movie = new Movie(movieTitle, movieLength, movieGenre);

  // console.log(movieTitle, movieLength, movie.movieGenre);

  console.log(movie.getData());


output=document.querySelector(".output");


  

  output.append(movie.getData());





}



