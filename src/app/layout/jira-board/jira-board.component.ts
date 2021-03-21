import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { BoardTicket, Ticket } from 'src/models/ticket';
import { GET_ISSUES } from '../../graphql/queries/issue';
import { HttpHeaders } from '@angular/common/http';

interface IssuesResponse {
  issues: Ticket[];
}

@Component({
  selector: 'app-jira-board',
  templateUrl: './jira-board.component.html',
  styleUrls: ['./jira-board.component.scss'],
})
export class JiraBoardComponent implements OnInit {
  isSidebarOpen = true;
  breadcrumb: string[] = [];
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
    this.breadcrumb = ['Projects', 'Jira-clone', 'JC board'];
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
            headers: new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUyNWFiZDU1M2FiMjI5YTRhMjcxMTMiLCJlbWFpbCI6InRhaWxvcmo2NEBnbWFpbC5jb20iLCJpYXQiOjE2MTYzNTI2NzIsImV4cCI6MTYxNjM1OTg3Mn0.v2gK5XF3yAgXLVRIPKdX1h9WnEoFdS5P8A5TjBt9O-Y')
          }
        })
      .valueChanges.pipe(
        map(res => res.data.issues),
        tap(res => console.log(res))
      );
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
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
