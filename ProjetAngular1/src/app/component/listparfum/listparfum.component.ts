import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Parfum } from 'src/app/Model/parfum';
import { ParfumService } from 'src/app/service/parfum.service';

@Component({
  selector: 'app-listparfum',
  templateUrl: './listparfum.component.html',
  styleUrls: ['./listparfum.component.css']
})
export class ListparfumComponent implements OnInit {

  lesParfums$:Observable<Parfum []>;
  formBuilder: any;
  n:any;
  

  constructor( private pfn: ParfumService  ) { }
  
  ngOnInit(): void {
    this.lesParfums$=this.pfn.getParfum();
      
}
oncommander(){
  alert('produit ajouté au panier!')
}
}