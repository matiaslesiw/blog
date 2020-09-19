import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { LoginComponent } from './Componentes/login/login.component';
import { HomeComponent } from './Componentes/home/home.component';
import { PosteoComponent } from './Componentes/posteo/posteo.component';
import { NuevoPosteoComponent } from './Componentes/nuevo-posteo/nuevo-posteo.component';
import { MejorPosteoComponent } from './Componentes/mejor-posteo/mejor-posteo.component';
import { PerfilDestacadoComponent } from './Componentes/perfil-destacado/perfil-destacado.component';
import { PerfilComponent } from './Componentes/perfil/perfil.component';
import { MisPublicacionesComponent } from './Componentes/mis-publicaciones/mis-publicaciones.component';
import { EditarPerfilComponent } from './Componentes/editar-perfil/editar-perfil.component';
import { PublicacionComponent } from './Componentes/publicacion/publicacion.component';
import { BuscadorComponent } from './Componentes/buscador/buscador.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { SeguidosComponent } from './Componentes/seguidos/seguidos.component';

export const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "home/:id", component: HomeComponent },
  { path: "perfil/:id", component: PerfilComponent },
  { path: "publicaciones/:id", component: MisPublicacionesComponent },
  { path: "publicacion", component: PublicacionComponent},
  { path: "buscador", component: BuscadorComponent},
  { path: "seguidos/:id", component: SeguidosComponent},
  { path: "**", redirectTo: "/login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  AppComponent,
  LoginComponent,
  HomeComponent,
  PosteoComponent,
  NuevoPosteoComponent,
  MejorPosteoComponent,
  PerfilDestacadoComponent,
  PerfilComponent,
  MisPublicacionesComponent,
  EditarPerfilComponent,
  PerfilComponent,
  PublicacionComponent,
  BuscadorComponent,
  NavbarComponent,
  SeguidosComponent

];
