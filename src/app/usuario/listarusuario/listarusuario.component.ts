import { Component, ElementRef, ViewChild } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { Modal } from 'bootstrap';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../services/usuario.service';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-listarusuario',
  templateUrl: './listarusuario.component.html',
  styleUrl: './listarusuario.component.css'
})
export class ListarusuarioComponent {
  @ViewChild('modalUsuario') modal: ElementRef | undefined

  VectorUsuarios: Usuario[] = [];

  usuarioSeleccionado: Usuario | undefined = undefined;
  isNew: boolean = false;

  isLoading = true;

  constructor(private _usuarioService: UsuarioService, private _util: UtilityService) {
    this.LoadUsuarios();
  }

  LoadUsuarios() {
    this.isLoading = true;
    this._usuarioService.getUsuarios() // Call API to get users
      .subscribe({
        next: (rs) => {
          this.VectorUsuarios = rs;
          this.isLoading = false;
        },
        error: () => {
          // Error message if the API call fails
          Swal.fire({
            title: 'Error al cargar los usuarios',
            text: 'No se pudieron cargar los usuarios. Intente nuevamente.',
            icon: 'error'
          });
          this.isLoading = false;
        }
      });
  }

  EditarUsuario(usuario: Usuario) {
    this.isNew = false;
    this.usuarioSeleccionado = usuario;
  }

  NuevoUsuario() {
    this.isNew = true;
    this.usuarioSeleccionado = { id: 0, nombre: "", correo: "", contrasena: "" };
  }

  GuardarUsuario() {
    if (this.isNew) {
    
      this._usuarioService.postUsuarios(this.usuarioSeleccionado!)
        .subscribe({
          next: (rs) => {
          
            Swal.fire({ title: 'Usuario guardado correctamente', icon: 'success' });
            this.LoadUsuarios(); 
          },
          error: () => {
           
            Swal.fire({
              title: 'Error al guardar el usuario',
              text: 'Hubo un problema al guardar el usuario. Intente nuevamente.',
              icon: 'error'
            });
          }
        });
      this.usuarioSeleccionado = undefined;
      this._util.CerrarModal(this.modal);
    } else {
      this._usuarioService.putUsuarios(this.usuarioSeleccionado!)
        .subscribe({
          next: (rs) => {
            Swal.fire({ title: 'Usuario actualizado correctamente', icon: 'success' });
            this.LoadUsuarios(); 
          },
          error: () => {
            Swal.fire({
              title: 'Error al actualizar el usuario',
              text: 'Hubo un problema al actualizar el usuario. Intente nuevamente.',
              icon: 'error'
            });
          }
        });
      this.usuarioSeleccionado = undefined;
      this._util.CerrarModal(this.modal);
    }
  }

  EliminarUsuario(us: Usuario) {
    Swal.fire({
      icon: 'question',
      title: `¿Estás seguro de eliminar al usuario '${us.nombre}'?`,
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonText: 'No, conservar',
      confirmButtonText: 'Si, eliminar',
      allowOutsideClick: false,
      buttonsStyling: false,
      reverseButtons: true,
      customClass: {
        cancelButton: 'btn btn-secondary me-1',
        confirmButton: 'btn btn-danger'
      }
    })
    .then(rs => {
      if (rs.isConfirmed) {
       
        this._usuarioService.deleteUsuarios(us.id)
          .subscribe({
            next: () => {
              
              Swal.fire({
                title: 'Usuario eliminado correctamente',
                icon: 'success'
              });
              this.LoadUsuarios(); 
            },
            error: () => {
              
              Swal.fire({
                title: 'Error al eliminar el usuario',
                text: 'Hubo un problema al eliminar el usuario. Intente nuevamente.',
                icon: 'error'
              });
            }
          });
      }
    });
  }
}
