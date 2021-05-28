import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] =['Superman','Batman',"Wonderwoman","flash"];
  heroeBorrado: string='';



  borrarHeroe(){
  console.log('borrando...');
this.heroeBorrado= this.heroes.shift() || '';

  }

}


//el NgOnInit se utiliza
//para inicializar cosas por ej: si se hace peticiones se trae la informacion acá se puede hacer esta parte.
//NgFor se utiliza para duplicar elementos en el HTML
//NgIf

