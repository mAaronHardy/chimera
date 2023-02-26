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

  ready() {
    this.list = this.wpns;
  }

  filter() {
    if ( this.type == 'All' ) {
      this.ready();
    } else {
      this.ready();
      this.list = this.list.filter((item: any) => item.subtype == (this.type));
    }
  }

  // sortName() {
  //   this.list.sort(function(a, b) {
  //     let textA = a.name.toUpperCase();
  //     let textB = b.name.toUpperCase();
  //     return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  //   });
  // }

  icon(type : string) {
    switch(type) {
      case "Dagger":
        return "🔪";
      case "Sword":
        return "🗡️";
      case "Spear":
        return "🔱";
      case "Axe":
        return "🪓";
      case "Bow":
        return "🏹";
      case "Crossbow":
        return "⛏️";
      case "Staff":
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
      case "Natural":
        return "🥊";
      default:
        return "";
    }
  }

  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
    this.http.get('assets/data/gear.json').subscribe((data : any) => {
      this.wpns = data.filter((item: any) => item.type == ('Weapon'));
    });
    this.http.get('assets/data/gear.json').subscribe((data : any) => {
      this.list = data.filter((item: any) => item.type == ('Weapon'));
    });
  }
}
