import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Parfum } from 'src/app/Model/parfum';
import { ParfumService } from 'src/app/service/parfum.service';

@Component({
  selector: 'app-parfumajouter',
  templateUrl: './parfumajouter.component.html',
  styleUrls: ['./parfumajouter.component.css']
})
export class ParfumajouterComponent implements OnInit {
  parfumForm!:FormGroup;
  ap!:Parfum[];
  nom1: string;
  Choix=[
    true,
    false
  ]

  constructor(private activatedRoute:ActivatedRoute ,private router : Router,private pfn: ParfumService , private formBuilder:FormBuilder) { }
   

  ngOnInit(): void {
    
    this.parfumForm = this.formBuilder.nonNullable.group({
      nom:[''],
      photo:[''],
      prix:[0],
      enstock:[false],
      dats:[''],
      categorie:[''],
      typeparfum:[''],
      marque:['']
    })

    this.pfn.getParfum().subscribe (data => this.ap = data)
    
  }
  addParfum(){
  this.pfn.addParfum(this.parfumForm.value).subscribe (data=> this.ap.push(data));
  this.router.navigate(['admin/dashboard/nosparfum']).then(()=>{

    window.location.reload()
  });

}
onListeParfum(){
  this.router.navigate(['admin/dashboard/nosparfum']);
}
}
