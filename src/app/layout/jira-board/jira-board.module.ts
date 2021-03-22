import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { JiraBoardComponent } from './jira-board.component';

import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import {
  AppstoreFill,
  BellFill,
  QuestionCircleFill,
  SettingFill,
  SettingOutline,
  BuildOutline,
  LineChartOutline,
  FileAddOutline,
  FolderOutline,
  TagsOutline,
  CodeOutline,
  DatabaseOutline,
  InboxOutline,
  InsertRowAboveOutline,
  CaretLeftOutline,
  CaretRightOutline,
  ThunderboltOutline,
  StarOutline,
  ShareAltOutline,
  EllipsisOutline,
  UpOutline,
  DownOutline,
} from '@ant-design/icons-angular/icons';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { BoardQuickActionsComponent } from './components/board-quick-actions/board-quick-actions.component';
import { HighLevelActionsComponent } from './components/high-level-actions/high-level-actions.component';
import { MainBoardComponent } from './components/main-board/main-board.component';

const icons: IconDefinition[] = [
  AppstoreFill,
  BellFill,
  QuestionCircleFill,
  SettingFill,
  BuildOutline,
  LineChartOutline,
  SettingOutline,
  FileAddOutline,
  FolderOutline,
  TagsOutline,
  CodeOutline,
  DatabaseOutline,
  InboxOutline,
  InsertRowAboveOutline,
  CaretLeftOutline,
  CaretRightOutline,
  ThunderboltOutline,
  StarOutline,
  ShareAltOutline,
  EllipsisOutline,
  UpOutline,
  DownOutline,
];

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: JiraBoardComponent,
  },
];

@NgModule({
  declarations: [JiraBoardComponent, MainHeaderComponent, BoardQuickActionsComponent, HighLevelActionsComponent, MainBoardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzButtonModule,
    NzIconModule.forChild(icons),
    NzDropDownModule,
    HttpClientModule,
    SharedModule,
    DragDropModule,
  ],
})
export class JiraBoardModule {}
