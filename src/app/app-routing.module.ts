import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'restdemo' },
  {
    path: 'restdemo',
    loadChildren: () =>
      import('./rest-demo/rest-demo.module').then(m => m.RestDemoModule)
  },
  {
    path: 'graphqldemo',
    loadChildren: () =>
      import('./graphql-demo/graphql-demo.module').then(m => m.GraphqlDemoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
