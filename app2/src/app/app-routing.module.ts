import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'app2', loadChildren: () => import('./child/child.module').then(m => m.ChildModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'app2' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
