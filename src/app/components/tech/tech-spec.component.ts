import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tech-spec',
  encapsulation: ViewEncapsulation.None,
  template: `
    <p>
        <span *ngIf="tec.rng">Rng {{tec.rng}}, Area {{tec.area}}</span>
        <span *ngIf="tec.check">, {{tec.attr}} {{tec.check}}</span>
    </p>
    <p>
        {{tec.pow}}
        <span *ngIf="tec.pow && tec.pow != 0">&times; {{tec.attr}} </span>
        <span *ngIf="tec.pow">{{tec.elem}}</span>
        <span *ngIf="!tec.tags.includes('Heal') && tec.pow"> Damage</span>
        <span *ngIf="tec.effect && tec.pow">, </span>
        <span *ngIf="tec.effect">{{tec.effect}}</span>
    </p>
  `,
})
export class TechSpecComponent {
    @Input() tec : any;
}
