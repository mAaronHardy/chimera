import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  scroll(link : string) { document.getElementById(link)!.scrollIntoView({ behavior: 'smooth', block: 'start' }); }

  ngOnInit(): void {
    window.scroll({top: 0})
  }
}
