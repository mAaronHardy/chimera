import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tech-other',
  encapsulation: ViewEncapsulation.None,
  template: `
      <p>
          <span *ngIf="tec.target">Trigger: {{tec.target}}<br></span>
          <span *ngIf="tec.rng">Rng {{tec.rng}}, Area {{tec.area}}</span>
      </p>
      <p *ngIf="tec.effect">{{tec.effect}}</p>
  `,
})
export class TechOtherComponent {
    @Input() tec : any;
}
