import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mobs',
  templateUrl: './mobs.component.html',
  styleUrls: ['../jobs/jobs.component.less'],
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
  
  constructor( private http: HttpClient ) { }
  
  ngOnInit(): void {
    window.scroll({top: 0})
    
    this.http.get('assets/data/mojo.json').subscribe((data : any) => { 
      this.mobs = data.filter((item: any) => item.type == ('Mob'));
    });
    
    for (let i = 0; i < this.mobs.length; i++) {
      this.show.push (false)
    }
    }
}
