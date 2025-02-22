import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  agregarAFavoritos(producto: any) {
    throw new Error('Method not implemented.');
  }
  private favoritos: any[] = []; 

  constructor() { }

  
  agregarFavorito(producto: any): void {
    this.favoritos.push(producto);
  }

  
  eliminarFavorito(productoId: number): void {
    this.favoritos = this.favoritos.filter(item => item.id !== productoId);
  }

  
  obtenerFavoritos(): any[] {
    return this.favoritos;
  }

  esFavorito(productoId: number): boolean {
    return this.favoritos.some(item => item.id === productoId);
  }
}

