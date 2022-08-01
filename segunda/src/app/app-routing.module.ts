import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './access/login/login.component';
import { RecoverComponent } from './access/recover/recover.component';
import { RegisterComponent } from './access/register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos/productos.component';
import { AgregarComponent } from './carrito/agregar/agregar.component';
import { AgregaproductoComponent } from './carrito/agregaproducto/agregaproducto.component';

const routes: Routes = [


{
  path: 'home',
  component: HomeComponent,
},
{
  path:'login',
  component: LoginComponent
},
{
  path:'productos',
  component: ProductosComponent
},
{
  path:'register',
  component: RegisterComponent
},
{
  path:'recover',
  component: RecoverComponent
},
{//AQUI el de agregar
  path:'agregar',
  component: AgregarComponent
},
{
  path:'agregaproducto',
  component: AgregaproductoComponent
},

{
  path:'**',
  redirectTo:"home"
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
