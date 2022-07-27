import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './access/login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos/productos.component';

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
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
