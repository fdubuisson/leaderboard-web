import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from '../../services/leaderboard.service';
import { Player } from '../../models/player';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  players: Player[] = [];

  constructor(private leaderboardService: LeaderboardService) { }

  ngOnInit(): void {
    this.getPlayers()
  }

  getPlayers(): void {
    this.leaderboardService.get(0, 10)
        .subscribe(players => this.players = players);
  }
}
