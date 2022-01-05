import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
    <button mat-button>Click Me!</button>


    <button mat-button>
      <mat-icon aria-hidden="false" aria-label="Example home icon">face</mat-icon>
      <span class="material-icons">lock</span>
      Click Me!
    </button>

    <mat-checkbox>Check me!</mat-checkbox>

  `,
  styles: [
  ]
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
