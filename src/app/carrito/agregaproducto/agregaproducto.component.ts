import { Component, OnInit } from '@angular/core';
import {CarritoService} from 'src/app/servicios/servicios/carrito.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { InfoI } from 'src/app/Interfaces/infoI';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregaproducto',
  templateUrl: './agregaproducto.component.html',
  styleUrls: ['./agregaproducto.component.css']
})
export class AgregaproductoComponent implements OnInit {
  productos: any = [];
  dato: any = [];
  nombre_producto:InfoI|undefined;

  constructor(private carrito:CarritoService, private router: Router) { }

  ngOnInit(): void {
    
  }
  imprimeprod():any{
    this.carrito.showproductos(1).subscribe(
      res => {
        this.productos = res;
      console.log(res);
    },
    err => console.error(err)
    );
  }


  obtengoidform(form:any){ 
    this.carrito.obtenerproducto(form.value).subscribe((res)=>{
      console.log(res);
      if(res){
        this.nombre_producto = res;
        console.log(res.nombre_producto);
        console.log(Object.values(this.nombre_producto));
      }
      else{

      }
    })
  }






  
  }





  ////mostrar():any{
    //this.carrito.mostrarproductoticket(2).subscribe(
      //res => {
        //this.dato = res;
      //console.log(res);
    //},
    //err => console.error(err)
    //);
  //}

  
  





