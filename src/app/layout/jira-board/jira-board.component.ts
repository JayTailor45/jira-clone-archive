import { Component, OnInit } from '@angular/core';

interface Ticket {
  title: string;
  ticketKey: string;
  assignedTo: string;
  priority: 'HIGHEST' | 'HIGH' | 'MEDIUM' | 'LOWEST';
  issueType: 'STORY' | 'TASK' | 'SUB-TASK' | 'BUG' | 'EPIC';
}

@Component({
  selector: 'app-jira-board',
  templateUrl: './jira-board.component.html',
  styleUrls: ['./jira-board.component.scss'],
})
export class JiraBoardComponent implements OnInit {
  isSidebarOpen = true;
  breadcrumb: string[] = [];
  tickets: Ticket[] = [];

  constructor() {}

  ngOnInit(): void {
    this.breadcrumb = ['Projects', 'Jira-clone', 'JC board'];
    this.tickets.push(
      {
        title: 'MVP Product',
        ticketKey: 'JC-1',
        assignedTo: 'Jay Tailor',
        issueType: 'EPIC',
        priority: 'HIGH',
      },
      {
        title: 'Create MVP design',
        ticketKey: 'JC-2',
        assignedTo: 'Jay Tailor',
        issueType: 'TASK',
        priority: 'MEDIUM',
      },
      {
        title: 'Create header',
        ticketKey: 'JC-3',
        assignedTo: 'Jay Tailor',
        issueType: 'SUB-TASK',
        priority: 'MEDIUM',
      },
      {
        title: 'Create board UI',
        ticketKey: 'JC-4',
        assignedTo: 'Jay Tailor',
        issueType: 'SUB-TASK',
        priority: 'HIGHEST',
      }
    );
  }

  getPriorityClass(ticket: Ticket): string {
    if (ticket.priority === 'HIGHEST') {
      return 'text-red-600';
    } else if (ticket.priority === 'HIGH') {
      return 'text-yellow-500';
    } else if (ticket.priority === 'MEDIUM') {
      return 'text-green-600';
    } else if (ticket.priority === 'LOWEST') {
      return 'text-green-300';
    }
    return '';
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
