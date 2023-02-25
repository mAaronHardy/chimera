import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'job-stat',
  template: `
    <span *ngIf="stat"><ng-content></ng-content> <strong><span *ngIf="stat > -1">+</span>{{stat}} </strong></span>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class StatComponent {
    @Input() stat? : any;
}
