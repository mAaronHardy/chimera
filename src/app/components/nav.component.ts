import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  template: `
    <style>
      .nav-menu {
        background: #f7f6f4;
        position: relative;
      }
      .home-link {
        color: #333333;
        display: inline-block;
        font-weight: bold;
        letter-spacing: 0.125rem;
        line-height: 1.1;
        padding: 0.5rem 1rem;
        position: relative;
        text-decoration: none;
        text-transform: uppercase;
      }
      .home-link:hover {
        color: #ca0b4a;
      }
      .menu-button {
        background: none;
        border: none;
        color: #333333;
        cursor: pointer;
        font-size: 1rem;
        font-weight: bold;
        line-height: 1.1;
        padding: 0.5rem 1rem;
        position: absolute;
        right: 0;
        z-index: 2;
      }
      .menu-button:hover {
        color: #ca0b4a;
      }
      .show .menu-button {
        position: fixed;
        top: 0;
      }
      .nav-list {
        background: #f7f6f4;
        display: none;
        list-style: none;
        margin: 0;
        padding-top: 2rem;
        padding-bottom: 2rem;
        padding-left: 0;
        position: fixed;
        text-align: center;
        top: 0;
        width: 100%;
      }
      .show .nav-list {
        display: block;
        z-index: 1;
      }
      .nav-link {
        color: #333333;
        display: inline-block;
        font-weight: bold;
        letter-spacing: 0.125rem;
        padding: 0.5rem 1rem;
        text-decoration: none;
        text-transform: uppercase;
      }
      .nav-link:hover {
        color: #ca0b4a;
        font-weight: bold;
      }

      @media only screen and (min-width: 35rem) {
        .home-link {
          position: absolute;
        }
        .menu-button {
          display: none;
        }
        .nav-list {
          display: block;
          padding-top: 0;
          padding-bottom: 0;
          position: relative;
          width: auto;
        }
        .nav-item {
          display: inline;
          padding-top: 0;
          padding-bottom: 0;
        }
        .show .nav-list {
        display: block;
        top: 0;
      }
    }
    </style>
    <nav class="nav-menu" [ngClass]="{show}">
      <div class="grid">
        <div class="col xs-75">
          <a routerLink="/" class="home-link">👹Chimera</a>
        </div>
        <div class="col xs-25">
          <button class="menu-button txt-right" (click)="toggle()">{{show ? "✕" : "☰"}}</button>
        </div>
      </div>
      <ul class="nav-list">
        <li class="nav-item"><a routerLink="/" class="nav-link">Home</a></li>
        <li class="nav-item"><a routerLink="/jobs" class="nav-link">Jobs</a></li>
        <li class="nav-item"><a routerLink="/mobs" class="nav-link">Mobs</a></li>
        <li class="nav-item"><a routerLink="/gear/weapons" class="nav-link">Gear</a></li>
      </ul>
    </nav>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class NavComponent {
  show = false;
  toggle() {
    this.show ? this.show = false : this.show = true;
    console.log(this.show)
  }
  constructor(private router: Router) {
    router.events.subscribe((val) => {
      this.show = false;
    });
  }
}
