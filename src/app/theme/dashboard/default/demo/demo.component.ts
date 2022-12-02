import { Component, OnInit, OnDestroy, Input,ViewChild } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
// Multiple Selection
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { SelectOptionService } from '../../../../shared/elements/select-option.service'
import { HttpClient } from '@angular/common/http';
import Swal from "sweetalert2";

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

interface Person {
  id: number;
  NAME: string;
}
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss',
    '../../../../../../node_modules/famfamfam-flags/dist/sprite/famfamfam-flags.min.css',
  ],
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translate(0)' }),
        animate('400ms ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]
})


export class DemoComponent implements OnInit {

  maxDate: Date;


  constructor(public selectOptionService: SelectOptionService,
    private http: HttpClient,
    ) { 
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate());
  }

  option: Array<IOption> = this.selectOptionService.getCharacters();
  optionmulti: Array<IOption> = this.selectOptionService.getCharacters();
  dtExportButtonOptions: DataTables.Settings = {};
  page: number = 1;
  persons: Person[];
  dtOptions: DataTables.Settings = {};

  ngOnInit() {

    const that = this;

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        that.http
          .post<DataTablesResponse>(
            'https://angular-datatables-demo-server.herokuapp.com/',
            dataTablesParameters, {}
          ).subscribe(resp => {
            that.persons = resp.data;

            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [{ data: 'id' }, { data: 'firstName' }, { data: 'lastName' }]
    };
  }

  @ViewChild('ctdTabset') ctdTabset;
  switchNgBTab(id: string) {
    this.ctdTabset.select(id);
  }

  submit(){
    Swal.fire({
      icon: 'success',
      title: 'Submitted successfully!',
      html:
        '<b>Click Ok  </b>'  
        
    })
  }

}
