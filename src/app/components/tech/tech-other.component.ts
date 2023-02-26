import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tech-other',
  styleUrls: ['./tech.less'],
  encapsulation: ViewEncapsulation.None,
  template: `
  <ng-container *ngIf="tec.type == 'Reaction'">
    <header class="action-details-item">
      <h4 id="{{tec.name}}" class="action-name">{{tec.name}}</h4>
      <span>- Reaction ⭟</span>
      <span class="txt-right">{{tec.cost}} JP</span>
    </header>
    <p>{{tec.desc}}</p>
    <p *ngIf="tec.dmg">Trigger: {{tec.dmg}}</p>
    <p>Dex Check (10), Success: {{tec.effect}}</p>
  </ng-container>
  
  <ng-container *ngIf="tec.type == 'Passive'">
    <header class="action-details-item">
      <h4 id="{{tec.name}}" class="action-name">{{tec.name}}</h4>
      <span>- Passive ↻</span>
      <span class="txt-right">{{tec.cost}} JP</span>
    </header>
    <p>{{tec.desc}}</p>
    <p>{{tec.effect}}</p>
  </ng-container>

  <ng-container *ngIf="tec.type == 'Movement'">
    <header class="action-details-item">
      <h4 id="{{tec.name}}" class="action-name">{{tec.name}}</h4>
      <span>- Movement ↗</span>
      <span class="txt-right">{{tec.cost}} JP</span>
    </header>
    <p>{{tec.desc}}</p>
    <p>{{tec.effect}}</p>
  </ng-container>
  `,
})
export class TechOtherComponent {
  @Input() tec : any;
}
