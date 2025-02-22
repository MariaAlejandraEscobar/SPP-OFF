import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private router: Router) {}

  login() {
   
    if (this.username === 'usuario' && this.password === 'contraseña123') {
     
      this.errorMessage = null;

      Swal.fire({
        icon: 'success',
        title: 'Inicio de sesión exitoso',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this.router.navigate(['home']);  
      });
    } else {
      
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Usuario o contraseña incorrectos',
      });

      this.errorMessage = 'Usuario o contraseña incorrectos.';
    }
  }

  registrarse() {
    this.router.navigate(['registro']);
  }

  olvidasteContrasena() {
    Swal.fire({
      icon: 'info',
      title: 'Recuperar Contraseña',
      text: 'Por favor, contacta al soporte para recuperar tu contraseña.',
      confirmButtonText: 'Aceptar'
    });
  }
}
