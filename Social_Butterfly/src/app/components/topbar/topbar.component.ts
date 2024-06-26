import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent implements OnInit{
  constructor (public userService:UserService,private router:Router){}
  ngOnInit(): void {
    
  }

  logout(){
    this.userService.user= undefined;
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
