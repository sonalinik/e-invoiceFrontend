import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
declare var $: any;
declare var colreorder :any;

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
@Component({
  selector: 'app-datatablekit',
  templateUrl: './datatablekit.component.html',
  styleUrls: ['./datatablekit.component.scss']
})
export class DatatablekitComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  persons: any;
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) {
    debugger
    this.http.post<any>('http://localhost:3000', {}).subscribe(data => {
      this.persons = data.data;

    })
  }

  ngOnInit(): void {
    var table = $('#example').DataTable({
      colReorder: true,
      rowReorder: true,
      pagingType: 'full_numbers',
    });
    
    // table.on( 'column-reorder', function ( e, settings, details ) {
    //   console.log('Hey!! You are fired, column-reorder');
    // });


    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 2,
    //   serverSide: true,
    //   processing: true,
    //   ajax: (dataTablesParameters: any, callback) => {
    //     that.http
    //       .post<DataTablesResponse>(
    //         'http://localhost:3000',
    //         dataTablesParameters, {}
    //       ).subscribe(resp => {
    //         debugger
    //         this.persons = resp.data;

    //         callback({
    //           recordsTotal: resp.recordsTotal,
    //           recordsFiltered: resp?.recordsFiltered,
    //           data: []
    //         });
    //       });
    //   },
    //   columns: [{ data: 'student_name' }, { data: 'student_phone' }, { data: 'home_address' }]
    // };
  }

}
