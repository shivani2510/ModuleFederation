import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'app2' },
  /* { path: '', pathMatch: 'full', redirectTo: 'child' },
  {
    path: 'child',
    loadChildren: () => import('app2/Module').then(m => m.ChildModule)
  },
  {
    path: 'comp2',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:3000/remoteEntry.js',
        remoteName: 'app2',
        exposedModule: './Comp2',
      })
        .then(m => m.FlightsModule)
  }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
