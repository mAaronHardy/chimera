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

  filterRare() {
    this.rare ? this.list = this.items : this.list = this.items.filter((item: any) => item.rare == (false));
  }

filterType() {
    if ( this.type == 'All' ) {
    } else {
      this.list = this.items.filter((item: any) => item.type == (this.type));
    }
  }

  filter() {
    this.filterRare();
    this.filterType();
  }

  sortName() {
    this.list.sort(function(a, b) {
      let textA = a.name.toUpperCase();
      let textB = b.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
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
      this.list = data.filter((item: any) => item.rare == (false));
    });
  }
}
