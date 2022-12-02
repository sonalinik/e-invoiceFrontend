import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  {
     path: 'second', component: SecondComponent 
    // path: '',
    
    // data: {
    //   title: 'first',
    //   status: false
    // },
    // children: [
    //   {
    //     path:  'demo',
    //   component:  DemoComponent
    //     // path: 'demo',
    //     // loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstRoutingModule { }
