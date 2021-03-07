import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from 'src/models/ticket';

@Component({
  selector: 'app-ticket-item',
  templateUrl: './ticket-item.component.html',
  styleUrls: ['./ticket-item.component.scss'],
})
export class TicketItemComponent implements OnInit {
  @Input() item;

  constructor() {}

  ngOnInit(): void {}

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
}
