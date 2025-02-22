import { Component, Input, input } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { format } from 'date-fns-tz';

@Component({
  selector: 'app-cu-usuario',
  templateUrl: './cu-usuario.component.html',
  styleUrl: './cu-usuario.component.css'
})
export class CuUsuarioComponent {
  @Input() usuario: Usuario | undefined;

  formatoDateTimeLocal(fecha:Date){
    let fechaFormateada = format(fecha, "yyyy-MM-dd 'T' HH:mm",{timeZone:"America/Bogota"});
    return fechaFormateada;
  }
 
}
