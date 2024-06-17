import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent implements OnInit{
  constructor(private fb:FormBuilder){

  }
  ngOnInit(): void {
      
  }
  createAccountForm = this.fb.group({
    email:['',[Validators.required,Validators.email ]],
    userName:['',[Validators.required,Validators.maxLength(10) ]],
    password:['',[Validators.required,Validators.minLength(5)]]

  })
}
