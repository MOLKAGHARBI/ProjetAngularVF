import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/Model/admin';
import { AuthentificationService } from 'src/app/service/authentification.service';

@Component({
  selector: 'app-authetifier',
  templateUrl: './authetifier.component.html',
  styleUrls: ['./authetifier.component.css']
})
export class AuthetifierComponent implements OnInit {
  tabadmin$:Observable<Admin[]>;
  loginForm!:FormGroup;
  message:String="";
  submitted = false;
  constructor( private A: AuthentificationService , private fb : FormBuilder  , private router:Router ) { }
  
  ngOnInit(): void {
    this.loginForm = this.fb.nonNullable.group({
      login:['', Validators.required],
      pwd:['', Validators.required]
    })
    this.tabadmin$=this.A.getAdmin(); 
}
  get f() { return this.loginForm.controls; }
onSubmit(){
  this.submitted = true;
  if (this.loginForm.invalid) {
    return;
}else {
  
  this.A.login1(this.loginForm.value['login'] ,this.loginForm.value ['pwd']).subscribe(
    Admin=>{
      console.log(Admin.length);
      if (Admin.length==1){
        console.log("Login successful");
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('token', this.f['login'].value);
        this.router.navigate(['admin/dashboard']);
      }
      else if (Admin.length==0){
        this.message = "Please check your login and password";
        this.loginForm.reset();
        console.log(Admin.length); 
      }
    }
  ) 
  }
} 

}