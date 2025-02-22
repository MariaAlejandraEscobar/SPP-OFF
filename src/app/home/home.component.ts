import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent {

  productos = [
    {
      nombre: 'Cuaderno',
      precio: 9.99,
      imagen: 'assets/Imagen/libroHome.png'
    },
    {
      nombre: 'Lapices Negros',
      precio: 4.99,
      imagen: 'assets/Imagen/lapizHome.jpg'
    },
    {
      nombre: 'Cartuchera',
      precio: 10.00,
      imagen: 'assets/Imagen/cartuHome.png'
    },
    {
      nombre: 'Cuaderno de dibujo',
      precio: 9.99,
      imagen: 'assets/Imagen/Cuaderno1.jpg'
    },
    {
      nombre: 'Lapices de colores',
      precio: 4.99,
      imagen: 'assets/Imagen/LapicesColo.jpg'
    },
    {
      nombre: 'Cuaderno de rayas',
      precio: 7.99,
      imagen: 'assets/Imagen/CuadernoRayas.jpg'
    },
    {
      nombre: 'Set de marcadores',
      precio: 12.99,
      imagen: 'assets/Imagen/Marcadores.jpg'
    },
    {
      nombre: 'Cuaderno de bocetos',
      precio: 8.99,
      imagen: 'assets/Imagen/boceto 1.jpg'
    }
  ];

  favoritos: any[] = [];
  agregarAFavoritos(producto: any) {
    if (!this.favoritos.includes(producto)) {
      this.favoritos.push(producto);
      alert(`${producto.nombre} ha sido agregado a tus favoritos`);
      this.actualizarFavoritosEnStorage();
    } else {
      alert(`${producto.nombre} ya está en tus favoritos`);
    }
  }

  private actualizarFavoritosEnStorage(): void {
    localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
  }
}
