import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphqlDemoComponent } from './graphql-demo.component';
import { Routes, RouterModule } from '@angular/router';
import { GraphqlListComponent } from './graphql-list/graphql-list.component';
import { GraphqlDetailComponent } from './graphql-detail/graphql-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{
  path: '',
  component: GraphqlDemoComponent
}];

@NgModule({
  declarations: [GraphqlDemoComponent, GraphqlListComponent, GraphqlDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule, GraphqlDemoComponent
  ]
})
export class GraphqlDemoModule { }
