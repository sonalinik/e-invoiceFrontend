import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Master',
      status: false
    },
    children: [

      //----------------------------- fillermaster--------------------------------------------------------------------
      {
        path: 'FillerData',
        loadChildren: () => import('./table/table.module').then(m => m.TableModule)
      },
      {
        path: 'fillermaster/:data',
        loadChildren: () => import('./filler-master/filler-master.module').then(m => m.FillerMasterModule)
      },
      {
        path: 'fillermaster/:state/:data',
        loadChildren: () => import('./filler-master/filler-master.module').then(m => m.FillerMasterModule)
      },
      {
        path: 'fillermaster',
        loadChildren: () => import('./filler-master/filler-master.module').then(m => m.FillerMasterModule)
      },
      //----------------------------- fillermaster--------------------------------------------------------------------

      {
        path: 'door',
        loadChildren: () => import('./door/door.module').then(m => m.DoorModule)
      },

    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
