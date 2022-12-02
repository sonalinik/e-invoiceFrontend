import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../auth.service';
import * as moment from 'moment';

@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent implements OnInit {

  isInvalidNumber: boolean = false;
  isInvalidPassword: boolean = false;
  mobileno: string;
  password: string;
  passType: string = 'password';
  resetPassword: boolean = false;
  forgetPassword: boolean = true;
  constructor(private router: Router, private _authService: AuthService) { }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }
  login() {

    // if (this.mobileno == '9090909090' && this.password == 'Admin@21') {
    //   this.router.navigate(['/dashboard']);
    // } else {
    //   Swal.fire({
    //     title: '',
    //     text: "Please Check Your Username And Password",
    //     icon: 'error',
    //     confirmButtonColor: '#229954',
    //     confirmButtonText: 'OK'
    //   })
    // }

    let dataObject = {
      "username": this.mobileno,
      "password": this.password,
      "CODE": ''
    }
    this._authService.login(dataObject).subscribe(data => {
      if (data.Details.length != 0) {
        if (this.password == 'Admin@21') {
          this.router.navigate(['/dashboard/default']);
          localStorage.setItem('user', JSON.stringify(data.Details));
        } else {
          Swal.fire({
            title: '',
            text: "Please Check Your Password",
            icon: 'error',
            confirmButtonColor: '#229954',
            confirmButtonText: 'OK'
          })
        }
      } else {
        Swal.fire({
          title: '',
          text: "Please Check Your Username",
          icon: 'error',
          confirmButtonColor: '#229954',
          confirmButtonText: 'OK'
        })
      }
      console.log(data);
      // if (data[0].PASSWORD == 'Admin@21') {

      // localStorage.setItem('token', data.access_token);
      // localStorage.setItem('user', JSON.stringify(data.user));
      // localStorage.setItem('system_master', JSON.stringify(data.system_master))
      // let passwordExpDate = data.user.EXP_DATE;
      // let nowDate = moment().format('YYYY-MM-DD');
      // let dateData = moment(passwordExpDate).format('YYYY-MM-DD');
      // console.log(dateData);
      // console.log(nowDate);
      // if (moment(dateData).isAfter(nowDate)) {
      //   // window.open('/CBS/dashboard/default', "_blank", "toolbar=yes,scrollbars=yes,fullscreen=1,resizable=yes,top=00,left=1000,width=5000,height=1000");
      //   // window.open('/CBS/dashboard/default','','toolbar=0,titlebar=0,fullscreen=1,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=800,height=600,left = 82,top = 54');
      //   // window.open('/dashboard/default', "_blank", "toolbar=yes,scrollbars=yes,fullscreen=1,resizable=yes,top=00,left=1000,width=5000,height=1000");
      //   this.router.navigate(['/dashboard/default']);

      // } else {
      //   this.resetPassword = true;
      //   this.forgetPassword = false;
      //   Swal.fire('Error!', 'Your password is expired please reset your password', 'error');
      // }
    }, err => {

      if (err.error.statusCode == 401) {
        Swal.fire({
          title: '',
          text: "Your access denied",
          icon: 'error',
          confirmButtonColor: '#229954',
          confirmButtonText: 'OK'
        })
      } else if (err.error.statusCode == 400) {
        Swal.fire({
          title: '',
          text: err.error.message,
          icon: 'error',
          confirmButtonColor: '#229954',
          confirmButtonText: 'OK'
        })
      } else {
        Swal.fire({
          title: '',
          text: "Please Check Your User Name And Password",
          icon: 'error',
          confirmButtonColor: '#229954',
          confirmButtonText: 'OK'
        })
      }

    })
  }
  showHidePassword() {
    if (this.passType == 'password') {
      this.passType = 'text';
    }
    else {
      this.passType = 'password';
    }
  }
}
