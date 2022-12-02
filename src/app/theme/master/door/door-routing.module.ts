import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DoorComponent} from './door.component';

const routes: Routes = [{
  path: '',
  component: DoorComponent,
  data: {
    title: 'Door',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
    status: true
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoorRoutingModule { }
