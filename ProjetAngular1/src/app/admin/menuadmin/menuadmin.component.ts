import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthentificationService } from 'src/app/service/authentification.service';

@Component({
  selector: 'app-menuadmin',
  templateUrl: './menuadmin.component.html',
  styleUrls: ['./menuadmin.component.css']
})
export class MenuadminComponent implements OnInit {

  constructor(private A:AuthentificationService, private router:Router) { }
  id: string;
  ngOnInit(): void {
    this.id = localStorage.getItem('token');
  }
  logout(): void {
    console.log("Logout");
    this.A.logout();
    this.router.navigate(['/admin/login']);
  }
}
