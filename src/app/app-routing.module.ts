import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepoListComponent } from './modules/repository/components/repo-list/repo-list.component';
import { RepoDetailComponent } from './modules/repository/components/repo-detail/repo-detail.component';

const routes: Routes = [
  {
    path: 'repo-list',
    component: RepoListComponent
  },
  {
    path: 'repo-detail/:owner/:repo',
    component: RepoDetailComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/repo-list'
  },
  {
    path: '**',
    component: RepoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
