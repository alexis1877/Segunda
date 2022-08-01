import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './agregar/agregar.component';
import { AgregaproductoComponent } from './agregaproducto/agregaproducto.component';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    AgregarComponent,
    AgregaproductoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CarritoModule { }
