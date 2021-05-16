import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./layout/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'board',
    loadChildren: () => import('./layout/jira-board/jira-board.module').then(m => m.JiraBoardModule),
  },
  {
    path: 'tailwind',
    loadChildren: () => import('./layout/tailwind/tailwind.module').then(m => m.TailwindModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
