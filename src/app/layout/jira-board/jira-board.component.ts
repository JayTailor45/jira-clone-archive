import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jira-board',
  templateUrl: './jira-board.component.html',
  styleUrls: ['./jira-board.component.scss'],
})
export class JiraBoardComponent implements OnInit {
  isSidebarOpen = true;

  constructor() {}

  ngOnInit(): void {}

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
