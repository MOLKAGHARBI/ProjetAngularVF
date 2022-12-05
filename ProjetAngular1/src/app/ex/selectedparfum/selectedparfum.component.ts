import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Parfum } from 'src/app/Model/parfum';
import { ParfumService } from 'src/app/service/parfum.service';


@Component({
  selector: 'app-selectedparfum',
  templateUrl: './selectedparfum.component.html',
  styleUrls: ['./selectedparfum.component.css']
})
export class SelectedparfumComponent implements OnInit {

parfumForm=FormGroup;
   constructor(private activatedRoute:ActivatedRoute ,private pfn: ParfumService , private formBuilder:FormBuilder ) { }
 identifiant:number;
 select :Parfum ;
 id:number ;


  ngOnInit(): void {
     
    this.identifiant = this.activatedRoute.snapshot.params['idl'];
    this.pfn.getParfumByid(this.identifiant).subscribe((data)=>(this.select=data));

    
   
  }

}
      

