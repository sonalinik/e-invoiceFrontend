import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';




import Swal from 'sweetalert2';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';


import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';
import { Demo1Service } from './demo1.service';
// class DataTablesResponse {
//   data: any[];
//   draw: number;
//   recordsFiltered: number;
//   recordsTotal: number;
// }

// interface Person {
//   A_BALCODE: number;
//   A_ACHEAD: string;
//   A_ACTYPE: string;
// }
@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss'],

})
export class Demo1Component implements OnInit {
//   dtOptions: DataTables.Settings = {};
//   persons:Person[];
// //Data:any;
//   jsonData: any;
//   page: any;
//   filter: any;
//   filterObject = new Array();
//   constructor(private http: HttpClient) {}
  
//   ngOnInit(): void {
//       this.dtOptions = {
//         pagingType: 'full_numbers',
//         pageLength: 10,
//         serverSide: true,
//         processing:true,
//         lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, 'All']],
//         ajax: (dataTableParameters:any , callback)=>{
//           console.log(dataTableParameters.start),
//           dataTableParameters.minNumber=dataTableParameters.start+1;
//           console.log(dataTableParameters.minNumber),
//           dataTableParameters.maxNumber =
//           dataTableParameters.start + dataTableParameters.length;
//           let datatableRequestParam: any;
//           this.page=dataTableParameters.start/dataTableParameters.length;
//           if(dataTableParameters.search.value !='')
//           {
//             this.filter = dataTableParameters.search.value;
//             this.filterObject = [
//               {name: "A_BALCODE", type: "default"},
//               {name: "A_ACHEAD", type: "default"},
//               {name: "A_ACTYPE", type: "default"}
            
//             ]
            
//             datatableRequestParam = {
//               page : this.page,
//               limit : dataTableParameters.length,
//               filter : dataTableParameters.search.value,
//               filter_in : this.filterObject
//             }
//           }
//           else
//           {
//             datatableRequestParam = {
//               page : this.page,
//               limit : dataTableParameters.length
//             }
//           }
        
//           console.log(  dataTableParameters.minNumber,
//             dataTableParameters.maxNumber);
            
//           console.log('All Params',dataTableParameters);
          
//           this.http
//           .post<DataTablesResponse>(
//             'http://localhost:4000/gl-statement-code',
//            dataTableParameters
//           ).subscribe(resp => {
//             this.persons= resp.data;
//             // console.log("this is table data");
//             // console.log(resp);  
          
//             callback({
//               recordsTotal: resp.recordsTotal,
//               recordsFiltered:resp.recordsTotal,
//               data: resp.data
//             });
            
//           });
          
//         },
        
//         columns: [{ data: 'A_BALCODE' }, {  data: 'A_ACHEAD' }, {  data: 'A_ACTYPE' }]
//       };
      
  
  
//     }


dropdownEnabled = true;
  items: TreeviewItem[];
  values: number[];
  config = TreeviewConfig.create({
    hasAllCheckBox: true,
    hasFilter: true,
    hasCollapseExpand: true,
    decoupleChildFromParent: false,
    maxHeight: 400
  });

  buttonClasses = [
    'btn-outline-primary',
    'btn-outline-secondary',
    'btn-outline-success',
    'btn-outline-danger',
    'btn-outline-warning',
    'btn-outline-info',
    'btn-outline-light',
    'btn-outline-dark'
  ];
  buttonClass = this.buttonClasses[0];

  constructor(
    private service: Demo1Service
  ) { }

  ngOnInit(): void {
    this.items = this.service.getBooks();
  }

  onFilterChange(value: string): void {
    console.log('filter:', value);
  }

   
}

 





