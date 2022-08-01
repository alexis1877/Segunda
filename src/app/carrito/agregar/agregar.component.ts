import { Component, OnInit } from '@angular/core';
import {CarritoService} from 'src/app/servicios/servicios/carrito.service';
import { NgForm } from '@angular/forms';
import { ticketsI } from 'src/app/Interfaces/ticketsI';
import { InfoI } from 'src/app/Interfaces/infoI';
import { map } from 'rxjs/operators';
import { FormGroup, FormBuilder,FormControl, Validator } from '@angular/forms';
import { Observable } from 'rxjs';
//import { ReactiveFormsModule } from '@angular/forms';

// hace referncia a ticketI
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
//pongo el tipo de la variable del objeto
//  tickets:ticketsI | undefined;
  dato: any = [];
  productos: any = [];


  //totalcant:any = [];
  equipo: InfoI [] =[];
  //para insertar
  cantidad: number= 0;
  idproducto:number = 0;
  idticket :number = 1;
  id_usuario :number =0;
  mensaje: ticketsI | undefined;
  //this.cantidad= form.value;
  //call insertar_en_ticket (1, 6, 20);

myticket: any=[];
  constructor(private carrito:CarritoService, private formulario:FormBuilder) { }
//ejecuta esto al iniciar le componente
  ngOnInit() {
    
  }

//-------------------------------------------------------
  //muestra productos con ticket LISTO
  mostrar():any{
    this.carrito.mostrarproductoticket(1).subscribe(
      res => {
        this.dato = res;
      console.log(res);
    },
    err => console.error(err)
    );
  }

  eliminarprod():any{
    this.carrito.eliminarproducto(2).subscribe(res =>{
      console.log(res);
      //el que se muestra elimina
      this.mostrar();
      
    },
    err => console.error(err)
    );
  }

  //IMPRIME productos para añadir a carrito
  imprimeprod():any{
    this.carrito.showproductos(1).subscribe(
      res => {
        this.productos = res;
      console.log(res);
    },
    err => console.error(err)
    );
  }

  //Para insertar ya bien
  //cantidad
  obtenercantidad(form:NgForm){
    console.log (form.value);
    this.cantidad= form.value;
    return this.cantidad;
  }
  //usuario
  guarda_idusuario(dato:any){
  //this.mensaje=this.carrito.mostrarproductoticket(this.dato);
  }
  //id_usuario =localStorage.getltem('')ACCES_ID;

//-------------------------------------------------------

addproducto():any{
  //this.cantidad = this.obtenercantidad(form:NgForm);
  //this.carrito.addcarrito().subscribe(
   // res => {
     // this.dato = res;
    //console.log(res);
  //},
  //err => console.error(err)
  //);
}

vaciarcarrito(){

//consulta
//ruta
}






//-------------------------------------------------------


//id_ticket:number, id_producto:number , cantidad: number
//call insertar_en_ticket (1, 2, 21);
almacen():any{
  this.carrito.mostrarproductoticket(1).subscribe(
    res => {
      this.dato = res;
    console.log(res);
  },
  err => console.error(err)
  );
}


prueba():any{
  this.carrito.addcarrito(this.productos)
  this.carrito.showproductos(1).subscribe(
    res => {
      this.productos = res;
    console.log(res);
    console.log(this.productos.nombre_producto);
  },
  err => console.error(err)
  );
}




//1)no retorna nada la funcion
//funciona pero aun no los coloco en html PENDIENTE
  //mostrar1():void{
    ///manda parametro el id
    ///res se almacena la respuesta
    //this.carrito.mostrarproductoticket(1).subscribe((res) => {
      // objeto en interface : almaceno
      //this.tickets = res;
      //console.log(res.id_ticket);
      //console.log(res);

    //}

}
