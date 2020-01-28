import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  template: `
    <h3 class="text-4xl font-hairline mb-8 text-gray-800">Profile page</h3>
    <app-button routerLink="/">Logout</app-button>
  `,
  styles: []
})
export class ProfilePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
