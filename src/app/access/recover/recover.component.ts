import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { correoI } from 'src/app/Interfaces/correoI';
import { UserService } from 'src/app/servicios/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css']
})
export class RecoverComponent implements OnInit {
correo:correoI|undefined;
  constructor(private service: UserService) { }

  ngOnInit(): void {
  }
  onRecover(form:NgForm){
    this.service.recoverEmail(form.value).subscribe((res)=>{
      if(res){
        this.correo = res;
        console.log(this.correo);
        Swal.fire({

          title: 'Tu contraseña es ',
          html:'<pre> '+ this.correo +' </pre>',

          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
      }
      else{

      }
    })
  }

}
