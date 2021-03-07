import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { TicketItemComponent } from './ticket-item/ticket-item.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { IconDefinition } from '@ant-design/icons-angular';
import { UpOutline, DownOutline } from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [UpOutline, DownOutline];

@NgModule({
  declarations: [BreadcrumbComponent, TicketItemComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    NzIconModule.forChild(icons),
    NzDropDownModule,
  ],
  exports: [BreadcrumbComponent, TicketItemComponent],
})
export class SharedModule {}
