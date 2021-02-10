import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Compra } from '../models/compra';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  constructor(private http: HttpClient) { }

  getPersonas(){
    return this.http.get(`http://localhost:5000/api/personas`);
  }

  getPersona(id: number){
    return this.http.get(`http://localhost:5000/api/personas/${id}`);
  }

  getCompras(){
    return this.http.get(`http://localhost:3030/api/compras`);
  }

  saveCompra(compra: Compra){
    return this.http.post(`http://localhost:3030/api/compras`, compra );
  }

}
