import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {
  links = [
    {
      path: '',
      name: 'footer 1'
    },
    {
      path: '',
      name: 'footer 2'
    },
    {
      path: '',
      name: 'footer 3'
    },
    {
      path: '',
      name: 'footer 4'
    }
  ]
}
