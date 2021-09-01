import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LeaderboardService } from '../../services/leaderboard.service';
import { Player } from '../../models/player';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  columns = ['rank', 'name', 'score'];
  dataSource = new MatTableDataSource<Player>();
  data: Player[] = [];
  resultsLength = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public leaderboardService: LeaderboardService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        startWith({}),
        switchMap(() => {
          return this.leaderboardService.get(this.paginator.pageIndex, this.paginator.pageSize)
            .pipe(catchError(() => observableOf(null)));
        }),
        map(data  => {
          if (data === null) {
            return [];
          }

          this.resultsLength = data.totalCount;
          return data.content;
        })
      ).subscribe(data => this.data = data);
  }
}
