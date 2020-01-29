import { NgModule } from '@angular/core';

import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]

})
export class DefaultModule { }
