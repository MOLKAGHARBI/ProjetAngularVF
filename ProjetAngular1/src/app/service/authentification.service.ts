import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { observable, Observable } from 'rxjs';
import { Admin } from '../Model/admin';

const URL='http://localhost:3400/Admin';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  
  admin!:Admin;
  role='autre';
  constructor(private http :HttpClient, private router:Router ) { }
  /*loginauth(){
    if (this.http.get<any>("http://localhost:3400/Admin/"+"?login=molkaetsahar&pwd=projet")){
      return true
    }else return false*/


  /*if (login=="molkaetsahar" && pwd=="projet"){
       this.role="admin";
       
   }
     else this.role="autre";
    return this.role;
   }*/
   login1(login:string, pwd:string):Observable<any>{
    
      return this.http.get<any>("http://localhost:3400/Admin/"+"?login="+login+"&pwd="+pwd);
   }
  

  getAdmin():Observable<Admin[]> {
    return this.http.get<Admin[]>(URL);

  }
  logout(): void {
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('token');
  } 


  
}
