import {
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import { moviesReducer } from './movies/movies.reducers';
import { MoviesEffects } from './movies/movies.effects'

export const reducers = {
  movies: moviesReducer
}

export const effects = [
  MoviesEffects
]

const MoviesStateSelector = createFeatureSelector('movies');

export const moviesSelector = createSelector(
  MoviesStateSelector,
  (state: any) => state.movies
)
