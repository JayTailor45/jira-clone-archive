import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JiraBoardComponent } from './jira-board.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: JiraBoardComponent,
  }
];

@NgModule({
  declarations: [JiraBoardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})

export class JiraBoardModule { }
