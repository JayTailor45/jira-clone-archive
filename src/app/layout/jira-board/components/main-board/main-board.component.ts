import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { BoardTicket, Ticket } from 'src/models/ticket';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { GET_ISSUES } from 'src/app/graphql/queries/issue';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

interface IssuesResponse {
  issues: Ticket[];
}

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.scss'],
})
export class MainBoardComponent implements OnInit {
  tickets: BoardTicket[] = [];
  avaliableStatus = [
    { id: 'BACKLOG', text: 'BACKLOG' },
    { id: 'SELECTED_FOR_DEVELOPMENT', text: 'SELECTED FOR DEVELOPMENT' },
    { id: 'IN_PROGRESS', text: 'IN PROGRESS' },
    { id: 'DONE', text: 'DONE' },
  ];
  issues$: Observable<Ticket[]>;
  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.tickets.push(
      {
        title: 'BACKLOG',
        id: 'BACKLOG',
        tasks: [],
      },
      {
        title: 'SELECTED_FOR_DEVELOPMENT',
        id: 'SELECTED FOR DEVELOPMENT',
        tasks: [],
      },
      {
        title: 'IN_PROGRESS',
        id: 'IN PROGRESS',
        tasks: [
          {
            title: 'MVP Product',
            ticketKey: 'JC-3',
            assignedTo: 'Jay Tailor',
            issueType: 'EPIC',
            priority: 'HIGH',
            status: 'IN_PROGRESS',
          },
        ],
      },
      {
        title: 'DONE',
        id: 'DONE',
        tasks: [
          {
            title: 'Board UI',
            ticketKey: 'JC-1',
            assignedTo: 'Jay Tailor',
            issueType: 'TASK',
            priority: 'HIGH',
            status: 'DONE',
          },
        ],
      }
    );
    this.issues$ = this.apollo
      .watchQuery<IssuesResponse>({
        query: GET_ISSUES,
        context: {
          headers: new HttpHeaders().set(
            'Authorization',
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUyNWFiZDU1M2FiMjI5YTRhMjcxMTMiLCJlbWFpbCI6InRhaWxvcmo2NEBnbWFpbC5jb20iLCJpYXQiOjE2MTY0MzYzOTMsImV4cCI6MTYxNjQ0MzU5M30.lg_qRlxI-knFRt1LFxuN4VmYvb-15AQ2ytwAMf56O04'
          ),
        },
      })
      .valueChanges.pipe(
        map((res) => res.data.issues),
        tap((res) => console.log(res))
      );
  }

  onTaskDrop(event: CdkDragDrop<Ticket[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
