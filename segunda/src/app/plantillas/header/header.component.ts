import { Component, OnInit } from '@angular/core';
import { userlogI } from 'src/app/Interfaces/userlogI';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
bandera:boolean=false;
id_usuario = localStorage.getItem('ACCES_ID');
user:userlogI |undefined;
  constructor(private service: UserService) { }

  ngOnInit(): void {

    this.getAccount();
    this.id_usuario = localStorage.getItem('ACCES_ID');
    console.log(this.id_usuario);
    if(this.id_usuario){
      console.log(this.bandera);
      this.bandera =true;
      console.log(this.bandera);
    }
    else{
      this.bandera=false;
    }
  }
  logOut(){
    this.service.logOut();
  }

  getAccount():void{
    this.service.getaccount().subscribe((res)=>{

      this.user = res;
      console.log(this.user);

    },
    (err)=> console.error(err));
  }

}
