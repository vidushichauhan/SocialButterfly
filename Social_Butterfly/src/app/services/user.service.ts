import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  user:any;

  public createNewUser(dataObj: any): Promise<any> {
    return this.http.post('http://localhost:3000/user', dataObj).toPromise();
  }

  public getUser(email: any): Promise<any> {
    return this.http.get(`http://localhost:3000/user?email=${email}`).toPromise();
  }
}
