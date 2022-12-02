import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() url: any;
  @Output() buttonClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @Output() buttonClick1: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @Output() buttonClick2: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @Output() buttonClick3: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  //FormGroup Name
  // angForm: FormGroup;
  updatebtn: boolean = false;
  savebtn: boolean = false;
  deletebtn: boolean = false;
  CODE
  path
  showButton: boolean = false;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    this.route.params.subscribe(params => {
      this.CODE = params['data'];
      this.path = params['state']
    })
    if (this.CODE != undefined) {
      if (this.path == 'update') {
        this.updatebtn = true;
        this.savebtn = false;
        this.deletebtn = false;
      } else if (this.path == 'delete') {
        this.updatebtn = false;
        this.savebtn = false;
        this.deletebtn = true;
      } else if (this.path == 'insert') {
        this.updatebtn = false;
        this.savebtn = true;
        this.deletebtn = false;
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
  }

  ngOnInit(): void {
    console.log(this.url)
  }


}
