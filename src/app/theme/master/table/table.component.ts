import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TableService } from './table.service';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  // variable for store url
  url = environment.base_url;
  // for Card header name
  tablename

  // variable for button hide show
  print: boolean = false
  view: boolean = false
  edit: boolean = false
  delete: boolean = false
  add: boolean = false

  // variable for disable button button 
  isDisabled: boolean = true


  // variable for store CODE in temprary
  tempcode

  //angular datatable variable
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  //for store table response 
  persons: any;

  // store table data in temprary variable
  temparray: any;

  // for filter
  obj = {}

  // for switch navigation
  navigate: boolean = false

  // for show hide table as per menu
  custGroup: boolean = false
  decorative: boolean = false
  filler: boolean = false
  source: boolean = false

  constructor(
    private http: HttpClient,
    private router: Router,
    private _TableService: TableService,
  ) {
    // Get Session data
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    // get tab path
    var array = window.location.href.split("/");
    let obj = {}
    let edpoint = ''

    // check link , set end point, and show table
    if (array[array.length - 1] == 'FillerData') {
      obj = {
        tranType: 954,
        CODE: 101
      }
      edpoint = this.url + '/login/master/testing'
      this.custGroup = false
      this.decorative = false
      this.filler = true
      this.source = false
    }

    // fetch table data
    // this.http.post(edpoint, obj).subscribe(data => {
    //   this.tablename = data[0][1][0].NAME

    //   let myArray = data[0][1][0].NAVIGATION.split("");
    //   if (myArray[0] == 1) {
    //     this.add = true
    //   } else {
    //     this.add = false
    //   }
    //   if (myArray[1] == 1) {
    //     this.view = true
    //   } else {
    //     this.view = false
    //   }
    //   if (myArray[2] == 1) {
    //     this.delete = true
    //   } else {
    //     this.delete = false
    //   }
    //   if (myArray[3] == 1) {
    //     this.edit = true
    //   } else {
    //     this.edit = false
    //   }
    //   if (myArray[4] == 1) {
    //     this.print = true
    //   } else {
    //     this.print = false
    //   }
    //   this.persons = data[0][0]
    //   this.temparray = data[0][0]
    // })

    this._TableService.aspdatafetch().subscribe((newdata) => {

      console.log('newdata', newdata)

    })



  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 20,
    };
    this.dtTrigger.next();
  }

  ngAfterViewInit(): void {
    //append footer to hader
    $('#decorativetable tfoot tr').appendTo('#decorativetable thead');
  }

  // set tem temp code and check entry status 
  getPendingData(data) {
    this.tempcode = data.CODE

    if (data.STATUS == ' ') {
      this.navigate = false
    } else {
      this.navigate = true
    }

  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  // function for navigate table to form
  btnclick(val) {
    var array = window.location.href.split("/");
    let path = ''
    if (array[array.length - 1] == 'FillerData') {
      path = "/master/fillermaster"
    }

    if (this.navigate == false) {
      if (val == 1) {

        this.router.navigateByUrl(path);

      } else if (val == 2) {

        let state = 'update'
        console.log(path + "/" + state + "/" + this.tempcode)
        this.router.navigateByUrl(path + "/" + state + "/" + this.tempcode);

      } else if (val == 3) {

        let state = 'delete'
        this.router.navigateByUrl(path + "/" + state + "/" + this.tempcode);

      } else if (val == 4) {

        this.router.navigateByUrl(path + "/" + this.tempcode);

      }
    } else {
      this.router.navigateByUrl(path + "/" + this.tempcode);
    }


  }

  // function for single selection checkbox
  checkClick(event, index, value) {
    if (event.currentTarget.checked == true) {
      this.isDisabled = false
    } else {
      this.isDisabled = true
    }
    for (let i = 0; i < this.persons.length; i++) {
      if (i == index) {
        this.persons[i].checked = true
        this.persons[i]['checkbox'] = true
      } else {
        this.persons[i].checked = false
        this.persons[i]['checkbox'] = false

      }
    }
  }

  // Function for column search
  filterObject(ele, type) {
    if (this.obj.hasOwnProperty(type)) {
      if (ele.target.value == '') {
        delete this.obj[type];
      } else {
        this.obj[type] = ele.target.value
      }
    } else {
      this.obj[type] = ele.target.value
    }
    var filtered = this.multiFilter(this.temparray, this.obj);
    this.persons = filtered
  }

  multiFilter(array, data) {
    const filterKeys = Object.keys(data);
    return array.filter((item) => {
      return filterKeys.every(key => !!~String(item[key]).indexOf(data[key]));
    });
  }

  public selectedName: any;

  public highlightRow(data, index) {
    this.selectedName = data.CODE;
    for (let i = 0; i < this.persons.length; i++) {
      if (i == index) {
        this.persons[i].checked = true
        this.persons[i]['checkbox'] = true
      } else {
        this.persons[i].checked = false
        this.persons[i]['checkbox'] = false

      }
    }
    if (data.checkbox == true) {
      this.isDisabled = false
    } else {
      this.isDisabled = true
    }

    this.tempcode = data.CODE

    if (data.STATUS == ' ') {
      this.navigate = false
    } else {
      this.navigate = true
    }
  }

}
