import { Component, OnInit } from "@angular/core";
//Used to call API
import { HttpClient } from "@angular/common/http";
// Creating and maintaining form fields with validation
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
// Displaying Sweet Alert
import Swal from "sweetalert2";
//service
import { DoorService } from "./door.service";
import { IOption } from "ng-select";
import { DoorRefService } from "../../../shared/elements/door.service";
import { first } from "rxjs/operators";
import { NgSelectComponent } from "@ng-select/ng-select";
//Displaying Blinked Cursor
import { DoorDirective } from "./door.directive";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


export interface Person {
  SR_NO: number;
  REF_MATCODE: string;
  QTY: number;
}

@Component({
  selector: "app-door",
  templateUrl: "./door.component.html",
  styleUrls: ["./door.component.scss"],
  providers: [DoorService, DoorRefService],
})
export class DoorComponent implements OnInit {
  CODE;
  path;
  //FormGroup Name
  angForm: FormGroup;
  //Dropdown option variable
  door;
  reference: any;
  UpdateShowButton: boolean = false;
  addShowButton: boolean = true;
  multiField = [];
  referencematerial = [];
  updatebtn: boolean = false;
  savebtn: boolean = false;
  deletebtn: boolean = false;
  showButton: boolean = true;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private _DoorService: DoorService,
    private _DoorRefService: DoorRefService,
    private router: Router,
    public sanitizer: DomSanitizer

  ) {
    this.route.params.subscribe((params) => {
      this.CODE = params["data"];
      this.path = params["state"];
    });
    if (this.CODE != undefined) {
      this.edit(this.CODE);
      if (this.path == "update") {
        this.updatebtn = true;
        this.savebtn = false;
        this.deletebtn = false;
      } else if (this.path == "delete") {
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

    this._DoorService.getFormData().subscribe((data) => {
      console.log("length data", data);
    });
  }

  dtExportButtonOptions: DataTables.Settings = {};
  page: number = 1;
  persons: Person[];
  dtOptions: DataTables.Settings = {};
  doortype: Array<IOption> = this._DoorRefService.getCharacters();

  ngOnInit(): void {
    this.createForm();
    let data: any = localStorage.getItem("user");
    let result = JSON.parse(data);
    this._DoorService.getDescription(result[0].COMPANY_ID).subscribe((data) => {
      let newArray = new Array();

      newArray.push(data["data"]);

      for (let item of newArray) {
        for (let ele of item) {
          this.referencematerial.push(ele);
        }
      }
    });
  }
  //validation
  createForm() {
    this.angForm = this.fb.group({
      DOOR_TYPE: ["", [Validators.required]],
      REF_MATCODE: ["", [Validators.required]],
      QTY: ["0", [Validators.required]],
    });
  }
  intIndex: number;
  intID: number;
  addField() {
    const formVal = this.angForm.value;
    var object = {
      SR_NO: this.multiField.length + 1,
      REF_MATCODE: formVal.REF_MATCODE,
      DOOR_TYPE: formVal.DOOR_TYPE,
      STATUS_CODE: 0,
      SYSADD_LOGIN: "ADMIN",
      // NAME: this.lableData,
      QTY: formVal.QTY,
    };
    if (object.REF_MATCODE == null || object.QTY == "") {
      Swal.fire(
        "warning",
        "Please Fill Referance material and Quantity",
        "warning"
      );
    } else {
      if (object.QTY > 0) {
        if (this.multiField.length != 0) {
          if (
            this.multiField.find((o) => o.REF_MATCODE == formVal.REF_MATCODE)
          ) {
            Swal.fire("Warning", "Selected Material Already Exists", "warning");
          } else {
            this.multiField.push(object);
            this.resetForm();
          }
        } else {
          this.multiField.push(object);
          this.resetForm();
        }
      } else {
        Swal.fire(
          "warning",
          "Please Fill Referance material and Quantity",
          "warning"
        );
      }
    }
  }

  updateField() {
    let index = this.intIndex;
    const formVal = this.angForm.value;
    var object = {
      SR_NO: this.intID,
      REF_MATCODE: formVal.REF_MATCODE,
      DOOR_TYPE: formVal.DOOR_TYPE,
      STATUS_CODE: 0,
      SYSADD_LOGIN: "ADMIN",
      // NAME: this.lableData,
      QTY: formVal.QTY,
    };
    this.multiField[index] = object;
    this.addShowButton = true;
    this.UpdateShowButton = false;
    this.resetForm();
  }
  editField(id) {
    this.intIndex = id;
    this.intID = this.multiField[id].SR_NO;
    this.addShowButton = false;
    this.UpdateShowButton = true;
    this.angForm.patchValue({
      SR_NO: this.multiField[id].SR_NO,
      REF_MATCODE: this.multiField[id].REF_MATCODE,
      QTY: this.multiField[id].QTY,
    });
  }

  delgriddata = [];

  delField(id) {
    this.delgriddata.push(this.multiField[id]);
    this.multiField.splice(id, 1);
  }

  //save button function
  save() {
    let data: any = localStorage.getItem("user");
    let result = JSON.parse(data);
    const formVal = this.angForm.value;
    const dataobj = {

      multiField: this.multiField,
      delgriddata: this.delgriddata,
      COMPANY_ID: result[0].COMPANY_ID
    };
    this._DoorService.postData(dataobj).subscribe(
      (data) => {
        Swal.fire("success", "Door Added Successfully", "success");
        this.angForm.reset();
        this.multiField = [];
      },
      (err) => {
        if (err.error.statusCode == 500) {
          Swal.fire("error", "Server Connection Issue", "error");
        }
      }
    );
  }

  getData(event) {
    this.multiField = [];
    let data: any = localStorage.getItem("user");
    let result = JSON.parse(data);
    let obj = {
      CODE: result[0].COMPANY_ID,
      DCODE: event.value,
    };

    this._DoorService.getedit(obj).subscribe((data) => {
      this.door = data[0].DOOR_TYPE.toString();
      this.multiField = data;
    });
  }

  lableData;
  getValueData(event) {
    const formVal = this.angForm.value;
    if (formVal.DOOR_TYPE == null) {
      this.reference = null;
      Swal.fire("Warning", "Please Select Door Type", "warning");
      this.reference = null;
    } else {
      this.lableData = event.NAME;
    }
  }

  //edit button function
  edit(CODE) {
    this._DoorService.getedit(CODE).subscribe((data) => {
      this.door = data[0].DOOR_TYPE.toString();
      this.multiField = data;
    });
  }

  //update button function
  update() {
    const formVal = this.angForm.value;
    const dataobj = {
      DOOR_TYPE: formVal.DOOR_TYPE,
      STATUS_CODE: 0,
      multiField: this.multiField,
    };
    this._DoorService.getupdate(dataobj).subscribe(
      (data) => {
        Swal.fire("success", "Door Updated Successfully", "success");
        this.angForm.reset();
        this.router.navigateByUrl("/master/doordatatable");
      },
      (err) => {
        if (err.error.statusCode == 500) {
          Swal.fire("error", "Server Connection Issue", "error");
        }
      }
    );
  }
  //delete button function
  delete() {
    const formval = this.angForm.value;
    const dataobj = {
      DOOR_TYPE: formval.DOOR_TYPE,
      STATUS_CODE: 1,
      multiField: this.multiField,
    };
    this._DoorService.getdelete(dataobj).subscribe(
      (data) => {
        Swal.fire("success", "Door Deleted Successfully", "success");
        this.router.navigateByUrl("/master/doordatatable");
      },
      (err) => {
        if (err.error.statusCode == 500) {
          Swal.fire("error", "Server Connection Issue", "error");
        }
      }
    );
  }

  //cancel button function
  cancel() {
    this.angForm.reset();
    this.multiField = [];
  }

  // reset data
  resetForm() {
    this.angForm.controls["REF_MATCODE"].reset();
    this.angForm.controls["QTY"].reset();
  }

  onFocus(ele: NgSelectComponent) {
    ele.open();
  }

  decimal(event) {
    let data = event.target.value;

    if (data > 0) {
      data = Number(data).toFixed(3);
      this.angForm.patchValue({
        QTY: data,
      });
    } else {
      Swal.fire("Warning", "Please Fill Quantity", "warning");
      this.angForm.controls["QTY"].reset();
    }
  }



  urlMap: SafeResourceUrl
  viewImagePreview() {
    this.urlMap = this.sanitizer.bypassSecurityTrustResourceUrl('https://localhost:44384/');
    // this._DoorService.getReport().subscribe(
    //   (data) => {
    //     console.log(data)
      

    //   },
    //   (err) => {
    //     if (err.error.statusCode == 500) {
    //       Swal.fire("error", "Server Connection Issue", "error");
    //     }
    //   }
    // );


  }
}
