import { Component } from '@angular/core';

import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  content = 'Home';
  movies = null;
  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.getMovies();
  }

  async getMovies() {
    this.moviesService.getMobies().subscribe((movies) => {
      this.movies = movies;
    });
  }
}
