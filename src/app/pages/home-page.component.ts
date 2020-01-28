import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  template: `
    <h3 class="text-4xl font-hairline mb-8 text-gray-800">Swipe button test</h3>
    <app-swipe-button (activated)="login()">Login</app-swipe-button>
  `,
  styles: []
})
export class HomePageComponent implements OnInit {

  constructor(
    private readonly router: Router
  ) { }

  ngOnInit() {
  }

  async login() {
    await this.router.navigate(['/user']);
  }
}
