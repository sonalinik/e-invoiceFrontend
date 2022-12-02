import { Component, OnInit } from '@angular/core';
//Used to call API
import { HttpClient } from '@angular/common/http';
// Creating and maintaining form fields with validation
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
//Service
import { FillerMasterService } from './filler-master.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filler-master',
  templateUrl: './filler-master.component.html',
  styleUrls: ['./filler-master.component.scss']
})
export class FillerMasterComponent implements OnInit {
  len
  len1
  len2
  CODE
  path
  updatebtn: boolean = false;
  savebtn: boolean = false;
  deletebtn: boolean = false;
  //FormGroup Name
  angForm: FormGroup;
  constructor(private fb: FormBuilder,
    private http: HttpClient, private route: ActivatedRoute,
    private router: Router,
    private fillermasterservice: FillerMasterService) {
    this.route.params.subscribe(params => {
      this.CODE = params['data'];
      this.path = params['state']
    })

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (this.CODE != undefined) {
      let obj = {
        CODE: this.CODE,
        COMPANY_ID: result[0].COMPANY_ID
      }
      this.edit(obj)
      if (this.path == 'update') {
        this.updatebtn = true;
        this.savebtn = false;
        this.deletebtn = false;
      } else if (this.path == 'delete') {
        this.updatebtn = false;
        this.savebtn = false;
        this.deletebtn = true;
      } else {
        this.updatebtn = false;
        this.savebtn = false;
        this.deletebtn = false;
      }
    } else {
      this.updatebtn = false;
      this.savebtn = true;
      this.deletebtn = false;
    }



    this.fillermasterservice.getFormData().subscribe(data => {
      this.len = data[0][1].CHARACTER_MAXIMUM_LENGTH;

    })
  }
  ngOnInit(): void {
    //Validation
    this.createForm();
    if (this.updatebtn == false && this.savebtn == false && this.deletebtn == false) {
      this.angForm.disable()
    } else if (this.updatebtn == false && this.savebtn == false && this.deletebtn == true) {
      this.angForm.disable()

    }
  }
  //Validation
  createForm() {
    this.angForm = this.fb.group({
      NAME: ['', [Validators.required]],

    });
  }
  // save button function
  save() {
    if (this.angForm.valid) {
      // Get Session data
      let data: any = localStorage.getItem('user');
      let result = JSON.parse(data);
      const formVal = this.angForm.value;
      const dataobj = {
        NAME: formVal.NAME,
        STATUS_CODE: 0,
        SYSADD_LOGIN: result[0].USER_ID,
        SYSCHNG_LOGIN: result[0].USER_ID,
        COMPANY_ID: result[0].COMPANY_ID
      }
      this.fillermasterservice.postData(dataobj).subscribe((data) => {
        Swal.fire({
          icon: 'success',
          title: 'Filler Master Added Successfully!',
          html:
            '<b>Master Number : </b>' + data
        })
        this.router.navigateByUrl('/master/FillerData')

        this.angForm.reset()
      }, err => {
        if (err.error.statusCode == 500) {
          Swal.fire('error', "Server Connection Issue", 'error')
        }
      })
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
    }
  }

  adddate
  addlogin
  //edit button function
  edit(data) {
    this.fillermasterservice.getedit(data).subscribe(data => {
      this.adddate = data[0][0][0].SYSADD_DATETIME
      this.addlogin = data[0][0][0].SYSADD_LOGIN


      this.angForm.patchValue({
        NAME: data[0][0][0].NAME,
      })
    })
  };

  //update button function
  update() {
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (this.angForm.valid) {
      const formval = this.angForm.value;
      const dataobj = {
        CODE: this.CODE,
        NAME: formval.NAME,
        STATUS_CODE: 0,
        SYSADD_LOGIN: this.addlogin,
        SYSADD_DATETIME: this.addlogin,
        SYSCHNG_LOGIN: result[0].USER_ID,
        COMPANY_ID: result[0].COMPANY_ID

      }
      this.fillermasterservice.getupdate(dataobj).subscribe((data) => {
        Swal.fire('success', "Filler Master Updated Successfully", 'success')
        this.angForm.reset()
        this.router.navigateByUrl('/master/FillerData')
      }, err => {
        if (err.error.statusCode == 500) {
          Swal.fire('error', "Server Connection Issue", 'error')
        }
      })
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
    }

  }
  //delete button function
  delete() {
    const formval = this.angForm.value;
    const dataobj = {
      CODE: this.CODE,
      STATUS_CODE: 1
    }
    this.fillermasterservice.getdelete(dataobj).subscribe((data) => {
      Swal.fire('success', "Filler Master Deleted Successfully", 'success')
      this.router.navigateByUrl('/master/FillerData')
    }, err => {
      if (err.error.statusCode == 500) {
        Swal.fire('error', "Server Connection Issue", 'error')
      }
    })

  }
  //cancel button function
  cancel() {
    this.router.navigateByUrl('/master/FillerData')
  }
}
