import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import config from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) { }

  getMovies() {
    const options = {
      params: new HttpParams().set('api_key', config.apiMovieDb.apiKey)
    }
    return this.http.get(
      config.apiMovieDb.basePath,
      options
    );
  }
}
