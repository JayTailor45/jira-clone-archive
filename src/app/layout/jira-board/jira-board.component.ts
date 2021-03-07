import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { BoardTicket, Ticket } from 'src/models/ticket';

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

  constructor() {}

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
