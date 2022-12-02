import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { Demo1Component } from './demo1.component';


const routes: Routes = [
  {
    path: '',
    component: Demo1Component,
    data: {
      title: 'Demo1',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demo1RoutingModule { }
