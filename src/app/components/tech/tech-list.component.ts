import { HttpClient } from '@angular/common/http';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tech-list',
  styleUrls: ['./tech.less'],
  encapsulation: ViewEncapsulation.None,
  template: `
      <div class="bg-black">
        <ng-container>
          <div class="tech-head">
            <h4>Action ↯</h4>
            <strong class="txt-right">JP</strong>
          </div>
          <ng-container *ngFor="let tec of action">
            <button class="tech-button" (click)="scroll(tec.name)">
              <span class="txt-left">{{tec.name}}</span>
              <span class="txt-right">{{tec.cost}}</span>
            </button>
          </ng-container>
      </ng-container>
      
      <ng-container *ngIf="reaction[0] != null">
        <div class="tech-head">
          <h4>Reaction ⭟</h4>
          <strong class="txt-right">JP</strong>
        </div>
        <ng-container *ngFor="let tec of reaction">
          <button class="tech-button" (click)="scroll(tec.name)">
            <span class="txt-left">{{tec.name}}</span>
            <span class="txt-right">{{tec.cost}}</span>
          </button>
        </ng-container>
      </ng-container>

      <ng-container *ngIf="passive[0] != null">
        <div class="tech-head">
          <h4>Passive ↻</h4>
          <strong class="txt-right">JP</strong>
        </div>
        <ng-container *ngFor="let tec of passive">
          <button class="tech-button" (click)="scroll(tec.name)">
            <span class="txt-left">{{tec.name}}</span>
            <span class="txt-right">{{tec.cost}}</span>
          </button>
        </ng-container>
      </ng-container>

      <ng-container *ngIf="movement[0] != null">
        <div class="tech-head">
          <h4>Movement ↗</h4>
          <strong class="txt-right">JP</strong>
        </div>
        <ng-container *ngFor="let tec of movement">
          <button class="tech-button" (click)="scroll(tec.name)">
            <span class="txt-left">{{tec.name}}</span>
            <span class="txt-right">{{tec.cost}}</span>
          </button>
        </ng-container>
      </ng-container>
    </div>

    <div class="action-details">
      <div *ngFor="let tec of action">
          <tech-action [tec]="tec"></tech-action>
      </div>
      <div *ngFor="let tec of reaction">
        <tech-other [tec]="tec"></tech-other>
      </div>
      <div *ngFor="let tec of passive">
        <tech-other [tec]="tec"></tech-other>
      </div>
      <div *ngFor="let tec of movement">
        <tech-other [tec]="tec"></tech-other>
      </div>
    </div>

  `,
})
export class TechListComponent {
  @Input() mojo : any;
  @Input() tech : any;

  techi : any[] = [];
  action : any[] = [];
  reaction : any[] = [];
  passive : any[] = [];
  movement : any[] = [];

  scroll(link : string) {
    document.getElementById(link)!.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
    this.http.get('assets/data/tech.json').subscribe((data : any) => {
      let mojoTech = data.filter((item: any) => item.origin.includes(this.mojo));
      this.action = mojoTech.filter((item: any) => item.type == ('Action'));
      this.reaction = mojoTech.filter((item: any) => item.type == ('Reaction'));
      this.passive = mojoTech.filter((item: any) => item.type == ('Passive'));
      this.movement = mojoTech.filter((item: any) => item.type == ('Movement'));
    });
  }
}
