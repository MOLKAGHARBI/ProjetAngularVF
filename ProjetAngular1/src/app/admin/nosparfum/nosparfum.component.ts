import { Component, OnInit } from '@angular/core';
import { Parfum } from 'src/app/Model/parfum';
import { ParfumService } from 'src/app/service/parfum.service';

import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nosparfum',
  templateUrl: './nosparfum.component.html',
  styleUrls: ['./nosparfum.component.css']
})
export class NosparfumComponent implements OnInit {
  lesParfums$:Observable<Parfum []>;
  n:any;
  parfumForm!:FormGroup;
  
  constructor( private pfn: ParfumService  ,private router:Router, private formBuilder:FormBuilder ) { }
  
  ngOnInit(): void {
    this.lesParfums$=this.pfn.getParfum();
}

onSupprimer(id:number){
  if(confirm("Voulez vous supprimer cette parfum ?")) {
     
    this.pfn.deleteParfum(id).subscribe(() => {
      this.router.navigate(['admin/dashboard/nosparfum'])
        window.location.reload()
      
    })
  }
  }
  /*onModifier(id:number){
    this.pfn.updateParfum(id, this.parfumForm.value).subscribe(data => console.log(data));
    }*/
    
  

}