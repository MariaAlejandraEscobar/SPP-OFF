import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  newUsername: string = '';
  newPassword: string = '';

  constructor(private router: Router) {}

  registrar() {
  
    Swal.fire({
      title: 'Registro Exitoso',
      text: '¡Tu cuenta ha sido creada!',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/login']); 
      }
    });
  }
}
