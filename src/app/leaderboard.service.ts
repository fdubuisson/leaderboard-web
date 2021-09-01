import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  private rootUrl = 'http://localhost:8080'; // TODO: extract config

  constructor(
    private http: HttpClient,
  ) { }

  get(start: number, count: number): Observable<Player[]> { // TODO: default values
    return this.http.get<Player[]>(`${this.rootUrl}/leaderboard?start=${start}&count=${count}`)
    // TODO: error handling
  }
}
