import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-gear',
  templateUrl: './gear.component.html',
  styleUrls: ['./gear.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class GearComponent {
  show = [
    true,
    false,
    false
  ];

  toggle( i : number ) {
    if (this.show[i]) {
    } else {
      for (let ii = 0; ii < this.show.length; ++ii) { this.show[ii] = false; }
      this.show[i] = true;
    }
  }

}
