export interface Ticket {
  title: string;
  ticketKey: string;
  assignedTo: string;
  priority: 'HIGHEST' | 'HIGH' | 'MEDIUM' | 'LOWEST';
  issueType: 'STORY' | 'TASK' | 'SUB-TASK' | 'BUG' | 'EPIC';
  status: 'BACKLOG' | 'SELECTED_FOR_DEVELOPMENT' | 'IN_PROGRESS' | 'DONE';
}

export interface BoardTicket {
  title: string;
  id: string;
  tasks: Ticket[];
}

export interface TicketStatuse {
  id: string;
  text: string;
}