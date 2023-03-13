import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less']
})
export class CreateComponent {
  ngOnInit(): void {
    window.scroll({top: 0})
  }

}
