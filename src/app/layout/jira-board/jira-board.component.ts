import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jira-board',
  templateUrl: './jira-board.component.html',
  styleUrls: ['./jira-board.component.scss'],
})
export class JiraBoardComponent implements OnInit {
  isSidebarOpen = true;
  breadcrumb: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.breadcrumb = ['Projects', 'Jira-clone', 'JC board'];
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
