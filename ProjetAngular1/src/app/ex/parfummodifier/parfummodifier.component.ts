import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Parfum } from 'src/app/Model/parfum';
import { ParfumService } from 'src/app/service/parfum.service';

@Component({
  selector: 'app-parfummodifier',
  templateUrl: './parfummodifier.component.html',
  styleUrls: ['./parfummodifier.component.css']
})
export class ParfummodifierComponent implements OnInit {
  parfumForm!:FormGroup;
  ap!:Parfum[];
  currentParfum = new Parfum();
  identifiant : number;
  id:number;
  lesParfums$:Observable<Parfum []>;
  
  choix=[
  
    "True",
    "False"
  ]

  constructor(private activatedRoute:ActivatedRoute,private router : Router ,private pfn: ParfumService , private formBuilder:FormBuilder ,private http:HttpClient) { }
 

  ngOnInit(): void {

    this.pfn.findParfumById(this.activatedRoute.snapshot.params['id']).subscribe(
      parfum => this.currentParfum = parfum
    )
    
   /* this.parfumForm = this.formBuilder.nonNullable.group({
      prix:[0],
      dats:[''],
      enstock :[''],
    }) 
   
    this.pfn.getParfum().subscribe (data => this.ap = data)*/
  }
  
  onModifier(){
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id)
    this.pfn.updateParfum1(this.id ,this.currentParfum).subscribe(parfum =>{
      this.router.navigate(['admin/dashboard/nosparfum'])
    }) 
    /*this.pfn.updateParfum(id, this.parfumForm.value).subscribe(data => console.log(data));*/
    }
    onListeParfum(){
      this.router.navigate(['admin/dashboard/nosparfum']);
    }
    
}
