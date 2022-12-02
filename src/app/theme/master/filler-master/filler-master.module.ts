import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillerMasterRoutingModule } from './filler-master-routing.module';
import { FillerMasterComponent } from './filler-master.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DataTablesModule } from 'angular-datatables';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ButtonModule } from '../../../theme/button/button.module';


@NgModule({
  declarations: [FillerMasterComponent],
  imports: [
    CommonModule,
    FillerMasterRoutingModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    NgSelectModule,
    ReactiveFormsModule,
    DataTablesModule,
    FormsModule,
    ButtonModule
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class FillerMasterModule { }
