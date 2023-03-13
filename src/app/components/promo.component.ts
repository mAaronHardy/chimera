import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-promo',
  template: `
  <style>
    .content {
      margin-bottom: 1rem;
    }
  </style>
    <div id="content" class="content">
        <p><ng-content></ng-content></p>
        <p class="txt-center">
            <button class="promo-button button" [routerLink]="link">{{button}}</button>
        </p>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class PromoComponent {
  @Input() button? : string;
  @Input() link? : string;
  // @Input() image? : string;
}
