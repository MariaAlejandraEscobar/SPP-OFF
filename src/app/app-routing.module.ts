import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component'; // Asegúrate de importar el RegistroComponent
import { HomeComponent } from './home/home.component'; // Importa el HomeComponent
import { FavoritosComponent } from './favoritos/favoritos.component';
import { ProveedorComponent } from './proveedor/proveedor.component';

const routes: Routes = [
  {
    path: 'usuarios',
    loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro', 
    component: RegistroComponent
  },
  {
    path: 'home', // Agrega la ruta para HomeComponent
    component: HomeComponent
  },
  {
    path: '', // Ruta por defecto (puedes cambiarla si es necesario)
    redirectTo: 'home', // Redirige a home por defecto
    pathMatch: 'full'
  },
  {
    path: 'favoritos', // Agrega la ruta para el componente Favoritos
    component: FavoritosComponent
  },
  
  { path: 'proveedores', 
  component: ProveedorComponent 
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
