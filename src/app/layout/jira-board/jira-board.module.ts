import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { JiraBoardComponent } from './jira-board.component';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { AppstoreFill } from '@ant-design/icons-angular/icons';


const icons: IconDefinition[] = [
  AppstoreFill,
];

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
    NzButtonModule,
    NzIconModule.forChild(icons),
    HttpClientModule,
  ]
})

export class JiraBoardModule { }
