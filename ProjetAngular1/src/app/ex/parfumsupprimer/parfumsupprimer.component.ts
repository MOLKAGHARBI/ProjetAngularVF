import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Parfum } from 'src/app/Model/parfum';
import { ParfumService } from 'src/app/service/parfum.service';

@Component({
  selector: 'app-parfumsupprimer',
  templateUrl: './parfumsupprimer.component.html',
  styleUrls: ['./parfumsupprimer.component.css']
})
export class ParfumsupprimerComponent implements OnInit {
  productForm: FormGroup;
  sp!:Parfum[];

  constructor(private activatedRoute:ActivatedRoute ,private router: Router,private pfn: ParfumService , private formBuilder:FormBuilder) { }

  ngOnInit(): void {
      }
      onSupprimer(id:number){
        this.pfn.deleteParfum(id).subscribe();
        window.location.reload()   
        
        window.location.reload()   
        }
           

          
    }

 