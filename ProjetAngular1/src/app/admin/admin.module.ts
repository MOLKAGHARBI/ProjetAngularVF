import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import { DashboardadminComponent } from './dashboardadmin/dashboardadmin.component';
import { MenuadminComponent } from './menuadmin/menuadmin.component';
import { AuthetifierComponent } from './authetifier/authetifier.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NosparfumComponent } from './nosparfum/nosparfum.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    NosparfumComponent,
    DashboardadminComponent,
    MenuadminComponent,
    AuthetifierComponent,
    HomeComponent,
   ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  
    AppRoutingModule,

    

  ]
})
export class AdminModule { }
