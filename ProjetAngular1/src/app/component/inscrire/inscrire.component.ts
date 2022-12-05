import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/Model/client';
import { ParfumService } from 'src/app/service/parfum.service';

@Component({
  selector: 'app-inscrire',
  templateUrl: './inscrire.component.html',
  styleUrls: ['./inscrire.component.css']
})
export class InscrireComponent implements OnInit {
  inscrireForm!:FormGroup;
  ap!:Client[];
  constructor( private fb:FormBuilder,private pfn: ParfumService, private router : Router ) { }
  lesVilles: string[] = [
    'Tunis', 'Ariana', 'Ben arous' ,'Manouba','Bizerte', 'Sousse', 'Sfax' ,'nabeul' ,'Mahdia' , 'Zaghouan' , 'Beja' ,'Kef' ,'Jendouba' 
    ,' Kasserine' , 'Gabes','Tozeur' ,'Monastir' , 'Kebelli', 'Sidi bouzid' ,'Gafsa','Medenine','Tataouin','Kairouan'];
  ngOnInit(): void {
    
this.inscrireForm=this.fb. nonNullable.group({
  nom:['', Validators.required],
   prenom: ['',Validators.required],
   datedenais: [''],
   tel: [''],
  ville : [''],
   motdepasse: ['',Validators.required],
   mail:['compte@gmail.com'],
   sexe:[''],}) 
   this.pfn.getClient().subscribe (data => this.ap = data)
}
onReset(){
  this.inscrireForm.reset();
  }
  addClient(){
    this.pfn.addClient(this.inscrireForm.value).subscribe(data=> this.ap.push(data));
    this.router.navigate(['/'])
  }
}

