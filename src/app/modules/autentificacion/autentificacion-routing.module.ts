import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importacion a las vistas del modulo autentifiacion 
import { RegistroComponent } from './pages/registro/registro.component';
import { InicioSesionComponent } from './pages/iniciosesion/iniciosesion.component';

const routes: Routes = [
  {
    path:"registro",component:RegistroComponent
  },
  {
    path:"iniciosesion",component:InicioSesionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutentificacionRoutingModule { }
