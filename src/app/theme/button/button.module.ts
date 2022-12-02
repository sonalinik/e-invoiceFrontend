import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { ButtonRoutingModule } from './button-routing.module';
// import { CustomerGroupService } from '../master/customer-group/customer-group.service';


@NgModule({
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
  imports: [
    CommonModule,
    ButtonRoutingModule,

  ],
 
  // providers: [CustomerGroupService]
})
export class ButtonModule { }
