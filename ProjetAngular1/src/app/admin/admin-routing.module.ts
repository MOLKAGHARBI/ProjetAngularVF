import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from '../authguard.guard';
import { AuthetifierComponent } from './authetifier/authetifier.component';
import { DashboardadminComponent } from './dashboardadmin/dashboardadmin.component';
import { HomeComponent } from './home/home.component';
import { NosparfumComponent } from './nosparfum/nosparfum.component';


const routes: Routes = [
  
  { path:'admin', 
  children:[ 
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', component: AuthetifierComponent},  
    {path:'dashboard', component: DashboardadminComponent,canActivate:[AuthguardGuard],
   children:[
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'nosparfum', component:NosparfumComponent }
   ]}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
