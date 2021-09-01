import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../models/player';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  private rootUrl = environment.serverUrl;

  constructor(
    private http: HttpClient,
  ) { }

  get(page: number, size: number): Observable<Page<Player>> {
    return this.http.get<Page<Player>>(`${this.rootUrl}/leaderboard?page=${page}&size=${size}`)
  }
}

export type Page<T> = {
	content: T[];
	totalCount: number;
};
