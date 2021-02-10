import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarComponent } from './components/buscar/buscar.component';
import { FormularioComponent } from './components/formulario/formulario.component';


const routes: Routes = [
  {
    path: '',
    redirectTo : "/formulario",
    pathMatch: "full",
  },
  {
    path: "formulario",
    component: FormularioComponent,
  },
  {
    path: "buscar",
    component: BuscarComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
