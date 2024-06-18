import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit{
  constructor(public userService: UserService, private router: Router){}
  ngOnInit(): void {
    if(this.userService.user==undefined || this.userService.user==null){
      let str = localStorage.getItem('user');
      if(str!=null){
        this.userService.user=JSON.parse(str);
      }
      else{
      this.router.navigate(['/login']);
      }
    }
  }


}
