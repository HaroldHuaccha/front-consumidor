import { Component, HostBinding, OnInit } from '@angular/core';
import {Compra} from '../../models/compra';
import {ComprasService} from '../../services/compras.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  compra: Compra = {
    id: 0,
    nombres: '',
    apellidos: '',
    dni: 0,
    mensaje: '',
  };

  orden: any = [];

  constructor(private comprasService: ComprasService) { }

  ngOnInit(): void {
  }

  buscarDni(){
    // console.log(this.compra.dni);
    this.comprasService.getPersona(this.compra.dni).
    subscribe(
      res => {
        console.log(res);
        this.compra.nombres = res[0].nombres;
        this.compra.apellidos = res[0].apellidos;
        

      }
    )
    // this.compra.nombres = this.orden.nombres;
        // this.compra.apellidos = this.orden.apellidos;
  }

  guardarCompra(){
    this.comprasService.saveCompra(this.compra).
    subscribe(
      res => {
        console.log(res);
        this.compra.id = 0,
        this.compra.nombres= "",
        this.compra.apellidos = "",
        this.compra.dni = 0,
        this.compra.mensaje = ""
      }
    )
  }
}
