import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  favoritos: any[] = []; 

  constructor() {}

  ngOnInit(): void {
    const storedFavoritos = localStorage.getItem('favoritos');
    if (storedFavoritos) {
      this.favoritos = JSON.parse(storedFavoritos);
    }
  }

  eliminarFavorito(producto: any): void {
    this.favoritos = this.favoritos.filter(item => item.nombre !== producto.nombre);
    this.actualizarStorage();
  }

  private actualizarStorage(): void {
    localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
  }
}
