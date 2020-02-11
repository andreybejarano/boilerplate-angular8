import { Action, createReducer, on } from '@ngrx/store';

import * as MoviesActions from './movies.actions';

export interface State {
  movies: []
}

export const initialState = {
  movies: null
}

const reducer = createReducer(
  initialState,
  on(MoviesActions.getMoviesRequest, state => ({ ...state })),
  on(MoviesActions.getMoviesSuccess, (state, action )=> ({ ...state, movies: action.movies }))
)

export function moviesReducer(state: State | undefined, action: Action) {
  return reducer(state, action);
}
