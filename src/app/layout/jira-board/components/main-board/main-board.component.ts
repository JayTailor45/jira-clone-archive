import { Component, OnInit } from '@angular/core';
import { BoardTicket, Ticket } from 'src/models/ticket';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Observable, of } from 'rxjs';

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
  constructor() {}

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
    this.issues$ = of([]);
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
