import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent implements OnInit{
  constructor(private fb:FormBuilder, public userService:UserService, private router:Router){

  }
  ngOnInit(): void {
      
  }
  createAccountForm = this.fb.group({
    email:['',[Validators.required,Validators.email ]],
    userName:['',[Validators.required,Validators.maxLength(10) ]],
    password:['',[Validators.required,Validators.minLength(5)]]

  })
  create(){
    this.userService.createNewUser(this.createAccountForm.value).then((res)=>{
      console.log(res);
      this.userService.user=res[0];
      localStorage.setItem('user',JSON.stringify(res[0]));
      this.router.navigate(['/posts']);
    }).catch(err=>{
      console.log(err);
    });
  }
}
