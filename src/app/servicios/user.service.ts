import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { userI } from '../Interfaces/userI';
import { userlogI } from '../Interfaces/userlogI';
import { correoI } from '../Interfaces/correoI';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  buscador = '';
  URL = 'http://localhost:4000/';
  constructor(private http: HttpClient) {

  }

  login(usuario: any): Observable<any> {
    console.log("entraste");
    console.log(usuario);
    return this.http.post<any>(this.URL + 'login', usuario).pipe(
      tap((res: userI) => {
        if (res) {
         this.saveUsuario(res.id_usuario);
        }
      })
    );
  }

  createUser(usuario:any): Observable<any>{
    return this.http.post<any>(this.URL + 'usuario/registrarUsuario',usuario).pipe(tap((res:any)=>{
      if(res){
        console.log("Usuario Creado");
      }
    }));

  }

  getId(){
    return this.buscador;
  }

  logOut(){
    localStorage.clear();
  }
 //recuperar contraseña
 recoverEmail(correo:any):Observable<correoI>{
  return this.http.post<correoI>(this.URL + 'usuario/recuperar', correo);
}
  getaccount(): Observable<userlogI>{
    //console.log('función inn');
    const iduser = {
      id_usuario: localStorage.getItem('ACCES_ID'),
     // ACCES_ID: userid
    };
    console.log(iduser);
 return this.http.post<userlogI>(this.URL + 'usuario/getUsuario',iduser);
  }

//guardar id de usuario
  private saveUsuario(userId: number): void {
    const str = String(userId);
    localStorage.setItem('ACCES_ID', str);
  }


}
