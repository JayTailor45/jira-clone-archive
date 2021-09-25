import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputsComponent } from './components/form-inputs/form-inputs.component';
import { CardsComponent } from './components/cards/cards.component';
import { HomeComponent } from './components/home/home.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'forms',
    pathMatch: 'full',
    component: FormInputsComponent,
  },
  {
    path: 'cards',
    pathMatch: 'full',
    component: CardsComponent,
  },
];

@NgModule({
  declarations: [
    FormInputsComponent,
    CardsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class TailwindModule { }
