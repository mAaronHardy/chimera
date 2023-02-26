import { HttpClient } from '@angular/common/http';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tech-list',
  encapsulation: ViewEncapsulation.None,
  template: `
    <style>
      .bg-black {
        background: #000000ee;
        color: #ffffff;
        padding: 1rem;
        border-radius: 0.5rem;
      }
      .tech-head, .tech-button {
        color: white;
        display: grid;
        grid-template-columns: auto auto;
        gap: 1rem;
      }
      .tech-head {
        margin-bottom: 0.5rem;
      }
      .tech-button {
        background: none;
        border: none;
        border-top: solid 1px #c1c1c1;
        color: white;
        cursor: pointer;
        font-family: serif;
        font-size: 1rem;
        padding: 0.5rem 0;
        width: 100%;
      }
      .tech-button:hover {
        transition: .25s;
        color: #f34232;
      }
    </style>
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
