import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DefaultComponent} from './default.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Default',
      status: false
    },
    children: [
      {
        path: 'demo',
        loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
      },
      {
        path: 'demo1',
        loadChildren: () => import('./demo1/demo1.module').then(m => m.Demo1Module)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
