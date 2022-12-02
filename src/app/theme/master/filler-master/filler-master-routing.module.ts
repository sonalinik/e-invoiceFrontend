import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FillerMasterComponent} from './filler-master.component';

const routes: Routes = [{
  path: '',
  component: FillerMasterComponent,
  data: {
    title: 'Filler Master',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
    status: true
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FillerMasterRoutingModule { }
