import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-armor',
  templateUrl: './armor.component.html'
})
export class ArmorComponent {
  equip :any[] = [];
  list : any[] = [];
  type : string = 'All';
  rare = false;

  filterRare() {
      this.rare ? this.list = this.equip : this.list = this.equip.filter((item: any) => item.rare == (false));
  }

  filterType() {
    if ( this.type == 'All' ) {
      this.list = this.list;
    } else if ( this.type == 'Accessory' ) {
      this.list = this.list.filter((item: any) => item.type == ('Cloak' || 'Gloves' || 'Shoes' || 'Amulet' || 'Ring'));
    } else {
      this.list = this.list.filter((item: any) => item.type == (this.type));
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
      case "Hat":
        return "👒";
      case "Helm":
        return "🪖";
      case "Clothes":
        return "👕";
      case "Armor":
        return "🧥";
      case "Robe":
        return "🥼";
      case "Cloak":
        return "🧣";
      case "Gloves":
        return "🧤";
      case "Shoes":
        return "🥾";
      case "Amulet":
        return "📿";
      case "Ring":
        return "💍";
      default:
        return "";
    }
  }

  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
    this.http.get('assets/data/equip.json').subscribe((data : any) => { this.equip = data });
    this.http.get('assets/data/equip.json').subscribe((data : any) => {
      this.list = data.filter((item: any) => item.rare == (false));
    });
  }
}