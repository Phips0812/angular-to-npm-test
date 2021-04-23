import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-iconic-button',
  template: `
    <button class="iconic-button" (click)="onClick()">phips0812</button>
  `,
  styles: [
    '.iconic-button {' +
    '  background-color: #4CAF50; /* Green */' +
    '  border: none;' +
    '  color: white;' +
    '  padding: 15px 32px;' +
    '  text-align: center;' +
    '  text-decoration: none;' +
    '  display: inline-block;' +
    '  font-size: 16px;' +
    '}'
  ]
})
export class IconicButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(): void {
    alert('You clicked the phips0812 iconic button');
  }

}
