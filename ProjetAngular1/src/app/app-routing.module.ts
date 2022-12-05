import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './component/acceuil/acceuil.component';
import { AuthetifierComponent } from './admin/authetifier/authetifier.component';
import { ErreurComponent } from './component/erreur/erreur.component';
import { InscrireComponent } from './component/inscrire/inscrire.component';
import { ListparfumComponent } from './component/listparfum/listparfum.component';


import { AproposdenousComponent } from './ex/aproposdenous/aproposdenous.component';
import { ParfumajouterComponent } from './ex/parfumajouter/parfumajouter.component';
import { ParfummodifierComponent } from './ex/parfummodifier/parfummodifier.component';
import { ParfumsupprimerComponent } from './ex/parfumsupprimer/parfumsupprimer.component';
import { SelectedparfumComponent } from './ex/selectedparfum/selectedparfum.component';
import { AuthguardGuard } from './authguard.guard';
const routes: Routes = [ 
  {path:'accueil',title:'accueil', component:AcceuilComponent},
  {path: 'listparfum' , title: 'listparfum ', component:   ListparfumComponent},
  {path:'listparfum/:idl',title:'selectedparfum' , component: SelectedparfumComponent},
  {path:'parfumajouter',title:'parfumajouter' , component:ParfumajouterComponent, canActivate:[AuthguardGuard],},
  {path:'parfumsupprimer',title:'parfumsupprimer' , component:ParfumsupprimerComponent, canActivate:[AuthguardGuard],},
  {path:'parfummodifier/:id',component:ParfummodifierComponent, canActivate:[AuthguardGuard],}, 
  { path: 'aproposdenous' , title: ' aproposdenous ', component:AproposdenousComponent},
  {path:'inscrire',title:'inscrire', component:InscrireComponent},
  {path:'', redirectTo:'accueil', pathMatch:'full'},
  {path:'**', title:'erreur', component: ErreurComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
