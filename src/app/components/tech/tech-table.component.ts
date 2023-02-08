import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tech-table',
  encapsulation: ViewEncapsulation.None,
  template: `
    <style>
      .tech-button {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        font-family: serif;
        font-size: 1rem;
        padding: 0;

        &:hover {
            text-decoration: underline;
        }
      }
    </style>
    <table>
        <tr>
            <td><h4>{{cat}}</h4></td>
            <td class="txt-right"><strong>JP</strong></td>
        </tr>
        <tr *ngFor="let tec of tech">
            <td><button class="tech-button" (click)="scroll(tec.name)">{{tec.name}}</button></td>
            <td class="txt-right">{{tec.cost}}</td>
        </tr>
    </table>
  `,
})
export class TechTableComponent {
  @Input() cat : any;
  @Input() tech : any;

  scroll(link : string) {
    document.getElementById(link)!.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }  
}
