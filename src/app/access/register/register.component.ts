import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: UserService,private router: Router) { }

  ngOnInit(): void {
  }
  onRegister(form:NgForm):void{
    console.log(form.value);
    this.service.createUser(form.value).subscribe(res=>{
      this.router.navigateByUrl("home");
      console.log("Usuario Creado");
    });
  }

  logOut(){
    this.service.logOut();
  }

}
