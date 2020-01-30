import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  links = [
    {
      path: '',
      name: 'Home'
    },
    {
      path: '/about',
      name: 'About'
    }
  ]
  constructor(private router: Router) { }

  toRoute(path) {
    this.router.navigate([path]);
  }
}
