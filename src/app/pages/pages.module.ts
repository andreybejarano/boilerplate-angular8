import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DefaultComponent } from '../layouts/default/default.component';
import { DefaultModule } from '../layouts/default/default.module';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    RouterModule,
    DefaultModule
  ],
  exports: [
    DefaultComponent,
    HomeComponent,
    AboutComponent
  ]

})
export class PagesModule { }
