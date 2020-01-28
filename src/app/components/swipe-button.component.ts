import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import interact from 'interactjs';

@Component({
  selector: 'app-swipe-button',
  template: `
    <div class="relative select-none">
        <div #track class="text-center rounded-full text-2xl font-light h-12 uppercase tracking-wider flex items-center justify-center"
             [class.text-gray-700]="!isActive" [class.text-red-800]="isActive"
             [class.bg-red-200]="isActive" [class.bg-gray-200]="!isActive">
            <ng-content></ng-content>
        </div>
        <div #handle class="drag-handle shadow w-16 h-16 bg-white rounded-full absolute top-0 -mt-2 flex items-center justify-center" 
             [class.dragging]="isDragging"
             [style.transform]="'translateX(' + pos + 'px)'">
            <svg class="w-5 h-5 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z"/></svg>
        </div>
    </div>
  `,
  styles: [`    
    .drag-handle:not(.dragging) {
        transition: 0.3s;
    }
  `]
})
export class SwipeButtonComponent implements OnInit, AfterViewInit {

  pos = 0;
  isActive = false;
  isDragging = false;

  @ViewChild('track', { static: true })
  track: ElementRef;

  @ViewChild('handle', { static: true })
  handle: ElementRef;

  @Output() activated = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    interact(this.handle.nativeElement).draggable({
      lockAxis: 'x',
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'parent'
        })
      ],
      onmove: moveEvent => {
        this.isDragging = true;
        const delta = moveEvent.delta.x;
        this.pos += delta;
        const trackWidth = this.track.nativeElement.clientWidth;
        const handleWidth = moveEvent.target.clientWidth;
        const rangeWidth = trackWidth - handleWidth;
        this.isActive = (rangeWidth * 0.9) <= this.pos;
      },
      onend: () => {
        this.isDragging = false;
        if (!this.isActive) {
          this.pos = 0;
        } else {
          this.activated.emit();
        }
      }
    });
  }

}
