import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';
import { AccessModule } from './access/access.module';
import { ProductosModule } from './productos/productos.module';
import { HttpClientModule } from '@angular/common/http';
import { CarritoModule} from './carrito/carrito.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccessModule,
    ProductosModule,
    HttpClientModule,
    CarritoModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
