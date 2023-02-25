import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.less'],
})
export class JobsComponent {
  show : any[] = [];
  jobs : any[] = [];
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
    return this.action.filter((item: any) => item.origin.includes(job));
  }
  getReaction( job : string ) {
    return this.reaction.filter((item: any) => item.origin.includes(job));
  }
  getPassive( job : string ) {
    return this.passive.filter((item: any) => item.origin.includes(job));
  }
  getMovement( job : string ) {
    return this.movement.filter((item: any) => item.origin.includes(job));
  }
  
  constructor( private http: HttpClient ) { }
  
  ngOnInit(): void {
    window.scroll({top: 0})
    
    this.http.get('assets/data/jobs.json').subscribe((data : any) => { 
      this.jobs = data.filter((item: any) => item.type == ('Job'));
    });
    this.http.get('assets/data/tech.json').subscribe((data : any) => { 
      this.action = data.filter((item: any) => item.type == ('Action'));
      this.reaction = data.filter((item: any) => item.type == ('Reaction'));
      this.passive = data.filter((item: any) => item.type == ('Passive'));
      this.movement = data.filter((item: any) => item.type == ('Movement'));
    });
    
    for (let i = 0; i < this.jobs.length; i++) {
      this.show.push (false)
    }
  }
}
