import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ticket, TicketStatuse } from 'src/models/ticket';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  getTickets(): Observable<Ticket[]> {
    return of([
      {
        title: 'Board UI',
        ticketKey: 'JC-1',
        assignedTo: 'Jay Tailor',
        issueType: 'TASK',
        priority: 'HIGH',
        status: 'DONE',
      },
    ]);
  }

  getTicketStatuses(): Observable<TicketStatuse[]> {
    return of([
     { id: 'BACKLOG', text: 'BACKLOG' },
     { id: 'SELECTED_FOR_DEVELOPMENT', text: 'SELECTED FOR DEVELOPMENT' },
     { id: 'IN_PROGRESS', text: 'IN PROGRESS' },
     { id: 'DONE', text: 'DONE' },
    ]);
  }
}
