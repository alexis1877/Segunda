import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RecoverComponent } from './recover/recover.component';

@NgModule({
  declarations: [LoginComponent, RecoverComponent],
  imports: [CommonModule],
})
export class AccessModule {}
