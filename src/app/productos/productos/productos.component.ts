import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Interfaces/producto';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
 productos:any;

  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.service.getProductos().subscribe(respuesta=>{

      this.productos = respuesta;
      console.log(this.productos);
     });
   }


   mostrarProd(id:number){

    this.router.navigate(['productos',id]);

   }
   agregarCarrito(id:any,cantidad:number){

   }

  }


