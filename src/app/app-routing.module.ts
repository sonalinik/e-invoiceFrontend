import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { AuthComponent } from './layout/auth/auth.component';
import { DatatablekitComponent } from './datatablekit/datatablekit.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/auth/login/simple',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./theme/dashboard/dashboard.module').then(m => m.DashboardModule)
      },


      {
        path: 'master',
        loadChildren: () => import('./theme/master/master.module').then(m => m.MasterModule)
      },
      {
        path: 'button',
        loadChildren: () => import('./theme/button/button.module').then(m => m.ButtonModule)
      },

      {
        path: 'user',
        loadChildren: () => import('./theme/user/user.module').then(m => m.UserModule)
      },


      


 
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./theme/auth/auth.module').then(m => m.AuthModule)
      },

    ]
  },
  {
    path: 'datatableKit',
    component: DatatablekitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
