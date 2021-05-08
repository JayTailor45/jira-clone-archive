import { Component, OnInit } from '@angular/core';
import { BoardTicket, Ticket, TicketStatuse } from 'src/models/ticket';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.scss'],
})
export class MainBoardComponent implements OnInit {
  tickets: BoardTicket[] = [];
  avaliableStatus$: Observable<TicketStatuse[]>;
  issues$: Observable<Ticket[]>;
  constructor(
    private apiService: ApiService,
  ) {}

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
    this.avaliableStatus$ = this.apiService.getTicketStatuses();
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
