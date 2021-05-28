import {Component} from '@angular/core';
//TEMPLATE DEL COMPONENTE
@Component({
    selector: 'contador-app',
    template: `
    <h1>{{title}} </h1>

<h3>la base es: <strong> {{base}} </strong></h3>

<button (click)=" acumular(base)"> +{{base}}</button>

<span> {{numero}} </span>

<button (click)="acumular(-base)">-{{base}}</button>
    `
})
//se le pone export para poder utilzar esta clase fuera de este archivo :3

export class contadorComponent{
    title = 'contadorApp';
    numero: number=10; 
    base: number=5;
  //se coloca acá el this para hacer referencia a la clase
    acumular(valor:number){
      this.numero += valor;
    }

   

}