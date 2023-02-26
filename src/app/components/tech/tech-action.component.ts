import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tech-action',
  encapsulation: ViewEncapsulation.None,
  template: `
    <style>
      .action-details-item {
        display: grid;
        grid-template-columns: max-content auto auto;
        gap: 0.25rem;
      }
      h4 {
        font-family: serif;
        font-size: 1.1rem;
        text-transform: none;
      }
    </style>

    <header class="action-details-item">
      <h4 id="{{tec.name}}" class="action-name">{{tec.name}}</h4>
      <span>Action ↯</span>
      <span class="txt-right">{{tec.cost}} JP</span>
    </header>
    
    <div *ngIf="tec.subtype == 'Attack'">
      <p *ngIf="tec.rng">Rng {{tec.rng}}, Area {{tec.area}}</p>
      <p *ngIf="tec.pow">
        {{tec.subtype}}, Hit: {{tec.pow}} 
        <span *ngIf="!tec.pow.includes('Wpn')">+ {{tec.attr}}</span>
        {{tec.dmg}} Damage
      </p>
      <p *ngIf="tec.sav">
        {{tec.sav}} Save ({{tec.chk}} + {{tec.attr}}),
        Fail: {{tec.effect}}
      </p>
    </div>

    <div *ngIf="tec.subtype == 'Special'">
      <p>
        <span *ngIf="tec.fp">{{tec.fp}} Fp,</span>
        Rng {{tec.rng}}, Area {{tec.area}}
      </p>
      <ng-container *ngIf="tec.pow">
        <p>Special, Hit: {{tec.pow}} {{tec.dmg}} Damage</p>
        <p>Miss: Half damage</p>
      </ng-container>
      <p *ngIf="tec.effect">Fail: {{tec.effect}}</p>
    </div>
    <div *ngIf="tec.subtype == 'Support'">
      <p>
        Support, 
        <span *ngIf="tec.fp">{{tec.fp}} Fp,</span>
        Rng {{tec.rng}}, Area {{tec.area}}
      </p>
      <p *ngIf="tec.sav != ''">{{tec.attr}} Check ({{tec.chk}})</p>
      <p *ngIf="tec.pow">
        {{tec.pow}} {{tec.dmg}}
      </p>
      <p *ngIf="tec.effect">{{tec.effect}}</p> 
    </div>
    
    <div *ngIf="tec.subtype == 'Status'">
      <p>
        <span *ngIf="tec.fp">{{tec.fp}} Fp,</span>
        Rng {{tec.rng}}, Area {{tec.area}}
      </p>
      <p *ngIf="tec.pow">
        Hit: {{tec.pow}} + {{tec.attr}} {{tec.dmg}} Damage
      </p>
      <p *ngIf="tec.effect">
        <span *ngIf="tec.sav != null">
          {{tec.sav}} Save ({{tec.attr}} + {{tec.chk}}),
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
