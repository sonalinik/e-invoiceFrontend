import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DemoComponent } from './demo.component';


const routes: Routes = [
  {
    path: '',
    component: DemoComponent,
    data: {
      title: 'Demo',
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
export class DemoRoutingModule { }
