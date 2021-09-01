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

  get(start?: number, count?: number): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.rootUrl}/leaderboard?start=${start}&count=${count}`)
    // TODO: error handling
  }
}
