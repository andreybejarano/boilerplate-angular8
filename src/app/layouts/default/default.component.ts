import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.sass']
})
export class DefaultComponent implements OnInit {
  titles = [
    'titulo1',
    'titulo2',
    'titulo3',
    'titulo4'
  ]

  constructor() {

  }

  ngOnInit() {

  }
}
