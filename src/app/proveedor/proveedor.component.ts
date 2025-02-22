import { Component } from '@angular/core';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent {
  proveedores = [
    {
      nombre: 'Distribuidora ABC',
      contacto: 'abc@correo.com',
      productos: 'Lápices, Plumas, Cuadernos',
      imagen: '/assets/Imagen/lapizProv.jpg'
    },
    {
      nombre: 'Suministros Oficina 24',
      contacto: 'so24@correo.com',
      productos: 'Papeles, Clips, Carpetas',
      imagen: '/assets/Imagen/papelesProv.jpg'
    },
    {
      nombre: 'Proveedora La Estrella',
      contacto: 'estrella@correo.com',
      productos: 'Tijeras, Pegamento, Cinta Adhesiva',
      imagen: '/assets/Imagen/TijerasProv.jpg'
    },
    {
      nombre: 'Papelería Mayorista',
      contacto: 'mayorista@correo.com',
      productos: 'Resaltadores, Sacapuntas, Borradores',
      imagen: '/assets/Imagen/borradorProv.jpg'
    },
    {
      nombre: 'Materiales Escolares JJ',
      contacto: 'jjescolares@correo.com',
      productos: 'Cartulinas, Rotuladores, Lápices de colores',
      imagen: '/assets/Imagen/coloresProv.jpg'
    }
  ];

  nuevoProveedor = {
    nombre: '',
    contacto: '',
    productos: '',
    imagen: ''
  };

  agregarProveedor() {
    if (this.nuevoProveedor.nombre && this.nuevoProveedor.contacto && this.nuevoProveedor.productos) {
      this.proveedores.push({ ...this.nuevoProveedor, imagen: 'Imagen/default.jpg' });
      this.nuevoProveedor = { nombre: '', contacto: '', productos: '', imagen: '' };
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }

  eliminarProveedor(index: number) {
    const confirmacion = window.confirm('¿Está seguro de que desea eliminar este proveedor?');
    if (confirmacion) {
        this.proveedores.splice(index, 1);
    }
}


  editarProveedor(index: number) {
    alert(`Editar proveedor: ${this.proveedores[index].nombre}`);
  }
}
