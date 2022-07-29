import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { RecoverComponent } from './recover/recover.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [LoginComponent, RecoverComponent, RegisterComponent],
  imports: [CommonModule,FormsModule],
})
export class AccessModule {}
