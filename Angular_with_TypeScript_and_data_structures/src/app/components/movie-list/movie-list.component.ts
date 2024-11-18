import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent {
  movie: string[] = ['Money Heist'];
  newMovie: string = '';

  addMovie() {
    if (this.newMovie.trim()) {
      this.movie.push(this.newMovie);
      this.newMovie = '';
    }
  }

  deleteMovie(movie: string) {
    this.movie = this.movie.filter(m => m !== movie);
  }
}
