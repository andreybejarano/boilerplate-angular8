import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { moviesSelector } from '../../store/'
import { getMoviesRequest } from 'src/app/store/movies/movies.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  content = 'Home';
  movies = null;
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(getMoviesRequest());
    this.store.select(moviesSelector).subscribe(movies => { this.movies = movies });
  }
}
