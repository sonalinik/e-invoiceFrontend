import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { NgPasswordValidatorOptions } from "ng-password-validator";

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  inputValue: string;
  options: NgPasswordValidatorOptions = {
    placement: "bottom",
    "animation-duration": 500
};
  currentPassword : any;
  newPassword : any;
  confirmPassword : any;
  email:any;
  toastr: any;


  constructor(private _authService : AuthService,private router: Router) { }

  ngOnInit(): void {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
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

onInput(event: any): void {
  this.inputValue = event.target.value;
}

//function to confirm password
checkPassword() {
  let  password1 = ((document.getElementById("Create_Password") as HTMLInputElement).value);
  let password2 = ((document.getElementById("Confirm_Password") as HTMLInputElement).value);
 
   // If password not entered
   if (password1 == ''){
     Swal.fire("Warning!", "Please enter Password !", "warning");
 
   }
 
         
   // If confirm password not entered
   else if (password2 == ''){
     Swal.fire("Warning!", "Please enter confirm password!", "warning");
 
   }
       // alert ("Please enter confirm password");
         
   // If Not same return False.    
   else if (password1 != password2) {
     Swal.fire("Warning!", "Password did not match: Please try again...!", "warning");      
   }
 
   // If same return True.
   // else{
   //   Swal.fire("Success!", "Password Match!", "success");
 
   //     // alert("Password Match: Welcome to GeeksforGeeks!")
       
   // }
 }
 
  //reset password
  resetpassword(){
    if(this.currentPassword == ''){
      Swal.fire('Error!', 'Please insert you current password', 'error');
    }
    else if(this.newPassword != this.confirmPassword){
      Swal.fire('Error!', 'Your password not matched', 'error');
    }else{

      let resetpassword = {
        'currentPassword' : this.currentPassword,
        'newPassword' : this.newPassword,
        'confirmPassword' :  this.confirmPassword,
        'email': this.email
      }

      this._authService.resetPassword(resetpassword).subscribe(data=>{
        Swal.fire('Success!', 'Password Reset Successfully', 'success');
        this.router.navigate(['/auth/login/simple']);

      },error=>{
        Swal.fire('Error!', error.error.message, 'error');

      })
    }
  }
}
