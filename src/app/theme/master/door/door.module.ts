import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoorRoutingModule } from './door-routing.module';
import { DoorComponent } from './door.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DataTablesModule } from 'angular-datatables';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ButtonModule } from '../../../theme/button/button.module';
import { DoorDirective } from './door.directive';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [DoorComponent, DoorDirective],
  imports: [
    CommonModule,
    DoorRoutingModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    NgSelectModule,
    ReactiveFormsModule,
    DataTablesModule,
    FormsModule,
    ButtonModule,
    SharedModule
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class DoorModule { }
