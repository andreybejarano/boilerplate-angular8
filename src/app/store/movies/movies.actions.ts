import { createAction, props } from "@ngrx/store";

export enum MovieActionType {
  GET_MOVIES_REQUEST = "[MOVIES] Get all movies Request",
  GET_MOVIES_SUCCESS = "[MOVIES] Get all movies Success"
}

export const getMoviesRequest = createAction(MovieActionType.GET_MOVIES_REQUEST);
export const getMoviesSuccess = createAction(MovieActionType.GET_MOVIES_SUCCESS, props<{movies}>());

