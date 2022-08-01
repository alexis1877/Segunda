import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
//import { map } from 'rxjs/operators';
import { InfoI } from 'src/app/Interfaces/infoI';
import { insertarprodI } from 'src/app/Interfaces/insertarprodI';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  buscador = '';
  URL = 'http://localhost:4000/';
  tickets:insertarprodI | undefined;
  
  constructor(private http: HttpClient) { }

mostrarproductoticket(id:number){
  //return this.http.get<Info>(this.URL + 'ticket/prueba/'+ id)
  return this.http.get(this.URL + 'ticket/consulta/'+ id);
}
//busca por el id
showproductos(id:number){
  return this.http.get(this.URL + 'muestra/productos/'+ id);
}

eliminarproducto(id:number){
  return this.http.delete(this.URL + 'ticket/eliminar/' + id)
}


//----------------------------------------------

//inserta producto
//id_ticket, id_producto, cantidad
addcarrito(tickets:insertarprodI){
  return this.http.get<insertarprodI>(this.URL + 'ticket/prueba/'+ tickets)
  
}


//generar id ticket
crearTicket(id_usuario:string){
  return this.http.post(this.URL + 'generaticket', id_usuario);
}
//INSERTAR producto completo

//obtiene id producto Listo  =  productos.id
obtenerproducto(id_producto:any):Observable<InfoI>{
  return this.http.post<InfoI>(this.URL + 'obtenid', id_producto);
}




//obtener nombre del form
//busca y guarda id_producto
private saveproducto(userId: number): void {
  const str = String(userId);
  localStorage.setItem('ACCES_ID', str);
}


//Formulario funciones
addproducto(producto: any): Observable<any> {
  console.log(producto);
  return this.http.post<any>(this.URL + 'nombre_producto', producto).pipe(
    tap((res: insertarprodI) => {
      if (res) {
       this.saveproducto(res.id_producto);
       console.log(res.id_producto);
      }
    })
  );
}






}
