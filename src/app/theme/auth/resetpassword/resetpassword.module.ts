import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetpasswordComponent } from './resetpassword.component';
import {ResetpasswordRoutingModule} from './resetpassword-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgPasswordValidatorModule } from 'ng-password-validator';


@NgModule({
  imports: [
    CommonModule,
    ResetpasswordRoutingModule,
    SharedModule,
    FormsModule,
    NgPasswordValidatorModule
  ],
  declarations: [ResetpasswordComponent]
})
export class ResetpasswordModule { }
