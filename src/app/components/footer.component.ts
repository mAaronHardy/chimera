import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <style>
      html {
        height: 100%;
      }
      body {
        /* box-sizing: border-box; */
        margin: 0;
        min-height: 100%;
        padding-bottom: 4rem;
        position: relative;
      }
      footer {
        background: #f7f6f4;
        bottom: 0;
        box-sizing: border-box;
        color: #333333;
        font-weight: bold;
        height: 2.25rem;
        padding: 0.5rem 1rem;
        position: absolute;
        left: 0;
        width: 100%;
      }
    </style>
    <footer><ng-content></ng-content></footer>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent { }
