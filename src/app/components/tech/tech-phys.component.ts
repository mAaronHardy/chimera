import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tech-phys',
  encapsulation: ViewEncapsulation.None,
  template: `
    <p>
        <span *ngIf="tec.rng == 'Wpn'">Make a normal weapon attack.<br></span>
        <span *ngIf="tec.rng != 'Wpn'">Rng {{tec.rng}}, Area {{tec.area}}<br></span>
        <span *ngIf="tec.target">Target: {{tec.target}}<br></span>
    </p>
    <p>
        {{tec.pow}}
        <span *ngIf="tec.pow && tec.pow != 0">&times; {{tec.attr}}</span>
        <span *ngIf="tec.pow">{{tec.elem}} Damage</span>
        <span *ngIf="tec.pow && tec.effect">, </span>
        <span *ngIf="tec.effect">{{tec.effect}}</span>
    </p>
  `,
})
export class TechPhysComponent {
    @Input() tec : any;
}
