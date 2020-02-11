import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';

import { MovieActionType, getMoviesSuccess } from './movies.actions';
import { MoviesService } from '../../services/movies.service'

@Injectable()
export class MoviesEffects {
  constructor(private actions$: Actions, private service: MoviesService) { }

  getMovies$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MovieActionType.GET_MOVIES_REQUEST),
        mergeMap(() => this.service.getMovies()
          .pipe(
            map((response) => getMoviesSuccess({movies: response }))
          )
        )
      )
    )
}
