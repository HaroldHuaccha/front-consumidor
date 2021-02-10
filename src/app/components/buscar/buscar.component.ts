import { Component, HostBinding, OnInit } from '@angular/core';
import {ComprasService} from '../../services/compras.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  constructor(private comprasService: ComprasService) { }

  compras: any = [];
 
  ngOnInit(): void {
    this.comprasService.getCompras().
    subscribe(
      res => {
        console.log(res);
        this.compras = res;

      }
    )    
  }

 
  buscarDni(){
    // this.comprasService.getPersona(this.dni).
    // subscribe(
    //   res => {
    //     console.log(res);
    //   }
    // )
    
  }

}
