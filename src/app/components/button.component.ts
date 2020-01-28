import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button type="button" class="border shadow-sm px-2 py-1 rounded border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
        <ng-content></ng-content>
    </button>
  `,
  styles: []
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
