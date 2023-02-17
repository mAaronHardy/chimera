import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html'
})
export class ItemsComponent {
  items :any[] = [];
  list : any[] = [];
  type : string = 'All';
  rare = false;

  ready() {
    this.list = this.items.filter((item: any) => item.ready == (true));
  }

  filter() {
    if ( this.type == 'All' ) {
      this.ready()
    } else {
      this.ready()
      this.list = this.list.filter((item: any) => item.type == (this.type));
    }
  }

  icon(type : string) {
    switch(type) {
      case "Healing":
        return "🫙";
      case "Status":
        return "💊";
      case "Thrown":
        return "🥏";
      default:
        return "";
    }
  }

  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
    this.http.get('assets/data/items.json').subscribe((data : any) => { this.items = data });
    this.http.get('assets/data/items.json').subscribe((data : any) => {
      this.list = data.filter((item: any) => item.ready == (true));
    });
  }
}
