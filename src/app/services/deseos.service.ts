import { Injectable } from '@angular/core';
import { Lista } from '../models/lista-model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista [] = [];

  constructor() {

    this.cargarStorage ();
    
   }

   crearLista( titulo: string) {
    const nuevaLista = new Lista(titulo); 
    this.listas.push( nuevaLista );
    this.guardarStorage();

    return nuevaLista.id;
   }

   obtenerLista(id: string | number) {
      const idNumber = Number(id);
      return this.listas.find( listaData => listaData.id === idNumber);
   }

   guardarStorage() {

    localStorage.setItem( 'data', JSON.stringify(this.listas) );
   }
   cargarStorage () {
     if(  localStorage.getItem('data') ){
      this.listas = JSON.parse( localStorage.getItem('data') );
      return;
     }
   this.listas = [];
  
  }

  borrarLista( lista: Lista ){
  this.listas = this.listas.filter ( listaData => {
      return listaData.id !== lista.id;
    });
  this.guardarStorage();

  }

}
