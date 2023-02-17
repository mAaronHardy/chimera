import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tech-action',
  encapsulation: ViewEncapsulation.None,
  template: `
    <div *ngIf="tec.type == 'Attack'">
      <p *ngIf="tec.rng">Rng {{tec.rng}}, Area {{tec.area}}</p>
      <p *ngIf="tec.pow">
        {{tec.type}}, Hit: {{tec.pow}} 
        <span *ngIf="!tec.pow.includes('Wpn')">+ {{tec.attr}}</span>
        {{tec.dmg}} Damage
      </p>
      <p *ngIf="tec.effect">
        <span *ngIf="tec.save[0] != null">
          ({{tec.save[0]}} + {{tec.attr}}) {{tec.save[1]}} Save,
          Fail:
        </span>
        {{tec.effect}}
      </p>
    </div>
    <div *ngIf="tec.type == 'Special'">
      <p>
        <span *ngIf="tec.fp">{{tec.fp}} Fp,</span>
        Rng {{tec.rng}}, Area {{tec.area}}
      </p>
      <ng-container *ngIf="tec.pow">
        <p>{{tec.type}}, Hit: {{tec.pow}} {{tec.dmg}} Damage</p>
        <p>Miss: Half damage</p>
      </ng-container>
      <p *ngIf="tec.effect">Fail: {{tec.effect}}</p>
    </div>
    <div *ngIf="tec.type == 'Support'">
      <p>
        <span *ngIf="tec.fp">{{tec.fp}} Fp,</span>
        Rng {{tec.rng}}, Area {{tec.area}}
      </p>
      <p *ngIf="tec.save[0] != null">{{tec.save[0]}} {{tec.attr}} Check</p>
      <p *ngIf="tec.pow">
        {{tec.pow}} + {{tec.attr}} {{tec.dmg}}
      </p>
      <p *ngIf="tec.effect">{{tec.effect}}</p>
    </div>
    <div *ngIf="tec.type == 'Status'">
      <p>
        <span *ngIf="tec.fp">{{tec.fp}} Fp,</span>
        Rng {{tec.rng}}, Area {{tec.area}}
      </p>
      <p *ngIf="tec.pow">
        Hit: {{tec.pow}} + {{tec.attr}} {{tec.dmg}} Damage
      </p>
      <p *ngIf="tec.effect">
        <span *ngIf="tec.save[0] != null">
          ({{tec.save[0]}} + {{tec.attr}}) {{tec.save[1]}} Save,
          Fail:
        </span>
        {{tec.effect}}
      </p>
    </div>
  `,
})
export class TechActionComponent {
  @Input() tec : any;
}
