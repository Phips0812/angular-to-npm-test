import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-iconic-button',
  template: `
    <button (click)="onClick()">phips0812</button>
  `,
  styles: [
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
