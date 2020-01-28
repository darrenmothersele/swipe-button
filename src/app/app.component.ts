import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="max-w-sm container mx-auto mt-6">
        <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {
}
