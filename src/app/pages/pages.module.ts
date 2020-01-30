import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatTableModule
} from '@angular/material'


import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DefaultComponent } from '../layouts/default/default.component';
import { DefaultModule } from '../layouts/default/default.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DefaultModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule
  ],
  exports: [
    DefaultComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent
  ]

})
export class PagesModule { }
