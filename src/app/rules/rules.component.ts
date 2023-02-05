import { Component } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.less']
})
export class RulesComponent {
  scroll(link : string) { document.getElementById(link)!.scrollIntoView({ behavior: 'smooth', block: 'start' }); }

  ngOnInit(): void {
    window.scroll({top: 0})
  }
}
