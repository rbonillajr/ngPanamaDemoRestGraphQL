import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestDemoComponent } from './rest-demo.component';
import { Routes, RouterModule } from '@angular/router';
import { RestDemoService } from './rest-demo.service';

const routes: Routes = [{
  path: '',
  component: RestDemoComponent
}];

@NgModule({
  declarations: [RestDemoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule, RestDemoComponent
  ],
  providers: [RestDemoService]
})
export class RestDemoModule { }
