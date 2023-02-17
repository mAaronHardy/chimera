import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mobs',
  templateUrl: './mobs.component.html',
  styleUrls: ['./mobs.component.less'],
})
export class MobsComponent {
  show : any[] = [];
  mobs : any[] = [];
  techs : any[] = [];
  
  action : any[] = [];
  reaction : any[] = [];
  passive : any[] = [];
  movement : any[] = [];

  scroll(link : string) {
    document.getElementById(link)!.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
  toggle( i : number ) {
    if (this.show[i]) {
        this.show[i] = false;
    } else {
      for (let ii = 0; ii < this.show.length; ++ii) { this.show[ii] = false; }
      this.show[i] = true;
    }
  }

  getAction( job : string ) {
    return this.action.filter((item: any) => item.origin == (job));
  }
  getReaction( job : string ) {
    return this.reaction.filter((item: any) => item.origin == (job));
  }
  getPassive( job : string ) {
    return this.passive.filter((item: any) => item.origin == (job));
  }
  getMovement( job : string ) {
    return this.movement.filter((item: any) => item.origin == (job));
  }
  
  constructor( private http: HttpClient ) { }
  
  ngOnInit(): void {
    window.scroll({top: 0})
    
    this.http.get('assets/data/mobs.json').subscribe((data : any) => { this.mobs = data });
    this.http.get('assets/data/actions.json').subscribe((data : any) => { this.action = data });
    this.http.get('assets/data/reactions.json').subscribe((data : any) => { this.reaction = data });
    this.http.get('assets/data/passive.json').subscribe((data : any) => { this.passive = data });
    this.http.get('assets/data/movement.json').subscribe((data : any) => { this.movement = data });
    
    for (let i = 0; i < this.mobs.length; i++) {
      this.show.push (false)
    }
    }
}
