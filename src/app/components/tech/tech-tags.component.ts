import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tech-tags',
  encapsulation: ViewEncapsulation.None,
  template: `
    <p>
      <span *ngFor="let tag of tags">
        <span *ngIf="tag != ''">[{{tag}}] </span>
      </span>
    </p>
  `,
})
export class TechTagsComponent {
    @Input() tags : any;
}
