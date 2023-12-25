import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BacklogComponent } from './components/backlog/backlog.component';
import { StartpageComponent } from './components/startpage/startpage.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: StartpageComponent },
  { path: 'backlog', component: BacklogComponent },
  { path: 'board', component: BacklogComponent },
  { path: 'github', component: BacklogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
