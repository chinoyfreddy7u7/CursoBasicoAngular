import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModule } from './Heroes/heroes.module';
import { ContadorModule } from './contador/contador/contador.module';

// uno de los objetivos de los modulos es encapsular las cosas y ayudarnos con la carga perezosa
@NgModule({ 
  declarations: [
    AppComponent,
    
   
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  

  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
