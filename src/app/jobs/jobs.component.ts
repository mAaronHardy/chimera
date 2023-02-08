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
  
  tech : any[] = [];
    action : any[] = [];
    reaction : any[] = [];
    support : any[] = [];
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

  getTech( job : any[] ) {
    this.tech = this.techs.filter((item: any) => item.job.includes(job));
    this.action = this.tech.filter((item: any) => item.type == ('Action'));
    this.reaction = this.tech.filter((item: any) => item.type == ('Reaction'));
    this.support = this.tech.filter((item: any) => item.type == ('Support'));
    this.movement = this.tech.filter((item: any) => item.type == ('Movement'));
    return this.tech
  }

  checkTech( abil : string ) {
    let action : any[] = this.tech.filter((item: any) => item.type == (abil));
    return action.length > 0;
  }
  
  constructor( private http: HttpClient ) { }
  
  ngOnInit(): void {
    window.scroll({top: 0})
    
    this.http.get('assets/data/jobs.json').subscribe((data : any) => { this.jobs = data });
    this.http.get('assets/data/tech.json').subscribe((data : any) => { this.techs = data });
    
    for (let i = 0; i < this.jobs.length; i++) {
      this.show.push (false)
    }
    }
}
