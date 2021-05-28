 import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

//las declaraciones dicen que tiene este modulo (componentes pipes etc)
 @NgModule({
     declarations: [
     HeroeComponent,
     ListadoComponent
    ],
    //Export significa que quiero hacer publico del modulo
    exports: [
        ListadoComponent
    ],

    //en los imports VAN SOLO LOS MODULOS
    imports: [
        CommonModule

    ]
 })
 export class HeroesModule{}