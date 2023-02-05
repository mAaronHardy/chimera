import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
})
export class WeaponsComponent {
  wpns :any[] = [];
  list : any[] = [];
  type : string = 'All';
  rare = false;

  filterRare() {
    this.rare ? this.list = this.wpns : this.list = this.wpns.filter((item: any) => item.rare == (false));
  }

  filterType() {
    if ( this.type == 'All' ) {
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

  weaponFormula() {
    switch(this.type) {
      case "Dagger":
        return "Pow × (STR + AGI)";
      case "Sword":
        return "Pow × STR";
      case "Axe":
        return "Pow × STR";
      case "Bow":
        return "Pow × (STR + AGI)";
      case "Crossbow":
        return "Pow × STR";
      case "Cane":
        return "Pow × STR";
      case "Hammer":
        return "Pow × STR";
      case "Gun":
        return "Pow²";
      case "Book":
        return "Pow × INT";
      case "Bag":
        return "Pow × STR";
      case "Shield":
        return "Pow × STR";
      case "Shield":
        return "Pow × STR";
      default:
        return "";
    }
  }

  icon(type : string) {
    switch(type) {
      case "Dagger":
        return "🔪";
      case "Sword":
        return "🗡️";
      case "Axe":
        return "🪓";
      case "Bow":
        return "🏹";
      case "Crossbow":
        return "⛏️";
      case "Cane":
        return "🦯";
      case "Katana":
        return "🔪";
      case "Hammer":
        return "🔨";
      case "Gun":
        return "🔫";
      case "Book":
        return "📕";
      case "Bag":
        return "👜";
      case "Cloth":
        return "🎗️";
      case "Shield":
        return "🛡️";
      case "Unarmed":
        return "🥊";
      default:
        return "";
    }
  }

  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
    this.http.get('assets/data/arms.json').subscribe((data : any) => { this.wpns = data });
    this.http.get('assets/data/arms.json').subscribe((data : any) => {
      this.list = data.filter((item: any) => item.rare == (false));
    });
  }
}
