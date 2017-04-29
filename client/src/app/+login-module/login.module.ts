import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { BkngModule } from '../bkng-module/bkng.module';

import { LoginComponent } from './components/login.component';
import { routing } from './login.routing';


@NgModule({
  imports: [
    routing,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxErrorsModule,
    BkngModule,
  ],
  declarations: [ LoginComponent ]
})
export class LoginModule { }
