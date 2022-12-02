import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { environment } from '../../../../environments/environment';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

import { NgPasswordValidatorOptions } from "ng-password-validator";
import { AuthService } from '../../auth/auth.service';




@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: [
    './user-profile.component.scss'
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
export class UserProfileComponent implements OnInit {
  inputValue: string;
  options: NgPasswordValidatorOptions = {
    placement: "bottom",
    "animation-duration": 500
  };
  editProfile = true;
  editProfileIcon = 'icofont-edit';

  editAbout = true;
  editAboutIcon = 'icofont-edit';

  public editor;
  public editorContent: string;
  selectedImagePreview: string = '';
  showImage: boolean = false;
  public editorConfig = {
    placeholder: 'About Your Self'
  };

  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  angForm: FormGroup;
  angEditForm: FormGroup;
  profitChartOption: any;
  imgBase64: any;
  profilePath: any;
  id: any;
  fullName: any;
  Email: any;
  toastr: any;

  constructor(public httpClient: HttpClient, private _authService: AuthService, private fb: FormBuilder, private _userService: UserService, private router: Router) {
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    this.profilePath = environment.base_url + '/' + result.PROFILE_PATH;
    this.id = result.id;
  }

  ngOnInit() {
    // this._userService.getUserDetails(this.id).subscribe(data => {
    //   console.log(data);
    //   let userObject = data;
    //   this.fullName = data.F_NAME + ' ' + data.L_NAME;
    //   this.Email = data.EMAIL;
    //   this.angEditForm.patchValue({
    //     firstName: userObject.F_NAME,
    //     LastName: userObject.L_NAME,
    //     email: userObject.EMAIL,
    //     phone: userObject.MOB_NO,
    //   })
    // })
    this.angEditForm = this.fb.group({
      firstName: [''],
      // middleName: [''],
      LastName: [''],
      email: [''],
      phone: [''],
      currentPassword: [''],
      newPassword: [''],
      confirmPassword: [''],
      Profile: [''],
    });




    setTimeout(() => {
      this.editorContent = 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising ';
      this.editorContent += 'pain was born and I will give you a complete account of the system, and expound the actual ';
      this.editorContent += 'teachings of the great explorer of the truth, the master-builder of human happiness. No one ';
      this.editorContent += 'rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who ';
      this.editorContent += 'do not know how to pursue pleasure rationally encounter consequences that are extremely ';
      this.editorContent += 'painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, ';
      this.editorContent += 'because it is pain, but because occasionally circumstances occur in which toil and pain can ';
      this.editorContent += 'procure him some great pleasure. To take a trivial example, which of us ever undertakes ';
      this.editorContent += 'laborious physical exercise, except to obtain some advantage from it? But who has any right ';
      this.editorContent += 'to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, ';
      this.editorContent += 'or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce ';
      this.editorContent += 'with righteous indignation and dislike men who are so beguiled and demoralized by the charms ';
      this.editorContent += 'of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and ';
      this.editorContent += 'trouble that are bound to ensue; and equal blame belongs to those who fail in their duty ';
      this.editorContent += 'through weakness of will, which is the same as saying through shrinking from toil and pain. ';
      this.editorContent += 'These cases are perfectly simple and easy to distinguish. In a free hour, when our power of ';
      this.editorContent += 'choice is untrammelled and when nothing prevents our being able To Do what we like best, ';
      this.editorContent += 'every pleasure is to be welcomed and every pain avoided. But in certain circumstances and ';
      this.editorContent += 'owing to the claims of duty or the obligations of business it will frequently occur that ';
      this.editorContent += 'pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds';
      this.editorContent += 'in these matters to this principle of selection: he rejects pleasures to secure other ';
      this.editorContent += 'greater pleasures, or else he endures pains to avoid worse pain.';
    }, 2800);

    this.data = this.httpClient.get(`assets/data/data.json`);

    setTimeout(() => {
      this.profitChartOption = {
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            const date = new Date(params.value[0]);
            let data = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ';
            data += date.getHours() + ':' + date.getMinutes();
            return data + '<br/>' + params.value[1] + ', ' + params.value[2];
          },
          responsive: true
        },
        dataZoom: {
          show: true,
          start: 70
        },
        legend: {
          data: ['Profit']
        },
        grid: {
          y2: 80
        },
        xAxis: [{
          type: 'time',
          splitNumber: 10
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
          name: 'Profit',
          type: 'line',
          showAllSymbol: true,
          symbolSize: function (value) {
            return Math.round(value[2] / 10) + 2;
          },
          data: (function () {
            const d: any = [];
            let len = 0;
            const now = new Date();
            while (len++ < 200) {
              const random1: any = (Math.random() * 30).toFixed(2);
              const random2: any = (Math.random() * 100).toFixed(2);
              d.push([new Date(2014, 9, 1, 0, len * 10000), random1 - 0, random2 - 0]);
            }
            return d;
          })()
        }]
      };
    }, 1);
  }
  onInput(event: any): void {
    this.inputValue = event.target.value;
  }
  isValid(event: boolean): void {
    if (this.inputValue && this.inputValue.length) {
      if (event) {
        this.toastr.success("Password is Valid.", "Successful!");
      } else {
        this.toastr.error("Password is invalid.", "Error!");
      }
    }

  }
  toggleEditProfile() {
    this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editProfile = !this.editProfile;
  }

  toggleEditAbout() {
    this.editAboutIcon = (this.editAboutIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editAbout = !this.editAbout;
  }

  onEditorBlured(quill) {
    console.log('editor blur!', quill);
  }

  onEditorFocused(quill) {
    console.log('editor focus!', quill);
  }

  onEditorCreated(quill) {
    this.editor = quill;
    console.log('quill is ready! this is current quill instance object', quill);
  }

  onContentChanged({ quill, html, text }) {
    console.log('quill content is changed!', quill, html, text);
  }

  selectedImage(ele: any) {
    let data;
    if (ele.target.files && ele.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.showImage = true;
        this.selectedImagePreview = event.target.result;
        this.imgBase64 = reader.result;
        console.log(data);
        console.log(this.selectedImagePreview);
      }
      reader.readAsDataURL(ele.target.files[0]);
    }
  }

  updateProfile() {

    let updateObject = this.angEditForm.value;
    let user = JSON.parse(localStorage.getItem('user'));

    if (updateObject.newPassword != '' && updateObject.confirmPassword != '') {
      if (updateObject.newPassword != updateObject.confirmPassword) {
        Swal.fire('Error!', 'New password and Confirm password not matched', 'error');
        throw Error("");
      }
    }

    updateObject['imgbase64'] = this.imgBase64;
    updateObject['id'] = user.id;

    this._userService.updateUser(updateObject).subscribe(data => {
      debugger
      Swal.fire('Success!', 'Profile update successfully please login again', 'success');
      console.log(data)

      let data1: any = localStorage.getItem('user');
      let result = JSON.parse(data1);
      console.log(result.USER_NAME, result.PASSWORD)



      // let obj = {
      //   "username": result.USER_NAME,
      //   "password": 'Admin@21'
      // }

      // this._authService.login(obj).subscribe(data => {
      //   debugger
      //   // localStorage.setItem('token', data.access_token);
      //   localStorage.setItem('user', JSON.stringify(data.user));
      //   // if (data.user) {
      //   //   this.router.navigate(['/dashboard']);
      //   let data1: any = localStorage.getItem('user');
      //   let result = JSON.parse(data1);
      //   this.profilePath = environment.base_url + '/' + result.PROFILE_PATH;
      //   // }
      // })
      this._userService.editlocal(data.id).subscribe(data => {
        debugger
        // localStorage.setItem('token', data.access_token);
        localStorage.setItem('user', JSON.stringify(data.user));
        // if (data.user) {
        //   this.router.navigate(['/dashboard']);
        let data1: any = localStorage.getItem('user');
        let result = JSON.parse(data1);
        this.profilePath = environment.base_url + '/' + result.PROFILE_PATH;
        // }
      })


    }, err => {
      Swal.fire('Error!', err.error.message, 'error');

    })
  }
  cancel(){
    this.router.navigateByUrl('/dashboard')

  }
}
