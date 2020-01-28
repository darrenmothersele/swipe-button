import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="max-w-sm mx-auto">
        <div class="bg-gray-200 mb-4">
            <p class="text-center text-xs">View on <a class="text-blue-700 font-medium" href="https://github.com/darrenmothersele/swipe-button">GitHub</a></p>
        </div>
        <div class="mt-6">
            <router-outlet></router-outlet>
        </div>
    </div>
  `,
  styles: []
})
export class AppComponent {
}
