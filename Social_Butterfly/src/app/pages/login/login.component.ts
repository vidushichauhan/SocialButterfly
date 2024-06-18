import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  // Note: Correct property name 'styleUrls'
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, public userService: UserService, private snackBar: MatSnackBar, private router:Router) { }

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]  // Added minLength value
  });

  ngOnInit(): void { }



  login(){
    this.userService.getUser(this.loginForm.value.email).then((res)=>{
      if(res.length==0){console.log("account does not exist");
        this.snackBar.open('Account does not exist','ok');
      }
      else{
        if(res[0].password === this.loginForm.value.password){
          console.log("matched");
          this.snackBar.open('Login successful','ok');
          this.userService.user = res[0];
          localStorage.setItem('user',JSON.stringify(res[0]));
          this.router.navigate(['/posts']);
        }
        else{
          console.log("incorrect password");
          this.snackBar.open('Password doest not match','ok');
        }
      }
    }).catch(err=>{
      console.log(err);
    });
  }

}
