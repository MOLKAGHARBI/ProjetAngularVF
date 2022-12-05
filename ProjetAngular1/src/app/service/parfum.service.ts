import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Client } from '../Model/client';
import { Parfum } from '../Model/parfum';
const httpOptions ={
  headers: new HttpHeaders ({'Content-Type': 'application/json'}) 
}
const URL ='http://localhost:3000/Parfum';
const URL2 ='http://localhost:2500/client';
@Injectable({
  providedIn: 'root'
})
export class ParfumService {
 
  listPrfum!: Parfum;
  nonNullable: any;
  constructor(private http :HttpClient) { }
    getParfum():Observable<Parfum[]> {
      return this.http.get<Parfum[]>(URL);
    }
   getParfumByid(id :number):Observable<Parfum> {
    return  this.http.get<Parfum>(URL + '/'+ id);
   }

   addParfum(p:Parfum):Observable<Parfum>{
    return this.http.post<Parfum>(URL, p);
    }
    updateParfum(id:number, p:Parfum):Observable<Parfum>{
      return this.http.put<Parfum>(URL+"/"+ id, p);
      }
    updateParfum1( id:number,parfum : Parfum) : Observable<Parfum>{
      return this.http.put<Parfum>(URL+'/'+id, parfum , httpOptions)
    }
    deleteParfum(id:number){
      return this.http.delete(URL+"/"+ id);
    }

    findParfumById(id : number): Observable<Parfum> {
      
      return this.http.get<Parfum>(URL+'/'+id,httpOptions)
    }
         
    getClient():Observable<Client[]> {
      return this.http.get<Client[]>(URL2);

    }
    addClient(c:Client):Observable<Client>{
      return this.http.post<Client>(URL2, c);
      }
}
