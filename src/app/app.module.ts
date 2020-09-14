import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { LoginComponent } from './Componentes/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";
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
import { MockServiceService } from './Services/mock-service.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './Componentes/navbar/navbar.component';

const appRoutes: Routes = [
  { path: "", component: LoginComponent },
  { path: "home", component: HomeComponent },
];

@NgModule({
  declarations: [
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
    NavbarComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
  ],
  providers: [MockServiceService],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
