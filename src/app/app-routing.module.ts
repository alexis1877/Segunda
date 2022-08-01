import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './access/account/account.component';
import { LoginComponent } from './access/login/login.component';
import { RecoverComponent } from './access/recover/recover.component';
import { RegisterComponent } from './access/register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductosDetailComponent } from './productos-detail/productos-detail.component';
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
},
{
  path:'productos/:id',component:ProductosDetailComponent
},
{
  path:'register',
  component: RegisterComponent
},
{
  path:'recover',
  component: RecoverComponent
},
{
  path:'account',
  component: AccountComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
