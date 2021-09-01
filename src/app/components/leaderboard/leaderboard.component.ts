import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from '../../services/leaderboard.service';
import { Player } from '../../models/player';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  columns = ['rank', 'name', 'score'];
  players: Player[] = [];

  constructor(private leaderboardService: LeaderboardService) { }

  ngOnInit(): void {
    this.getPlayers(0, 10) // TODO: handle pagination
  }

  getPlayers(start: number, count: number): void {
    this.leaderboardService.get(start, count).subscribe(players => this.players = players);
  }
}
