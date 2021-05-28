import {Component} from '@angular/core';

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})
//en las clases ponemos atributos relacionados
//a la clase, ya sea nombre, edad, entre otros.
export class HeroeComponent{
    nombre: string= 'Klee' 
    edad: number= 10
  get nombreCapitalizado(){
      return this.nombre.toUpperCase();
  }
    obtenerNombre(): string{
        return `${ this.nombre } - ${ this.edad }`;
}
cambiarNombre(): void{
this.nombre='QiQi';
}
cambiarEdad(): void {
    this.edad=8;
}
}