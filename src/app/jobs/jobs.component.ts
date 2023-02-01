import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.less'],
})
export class JobsComponent {
  show : any[] = [];
  jobs : any [] = [];
  tech : any [] = [];

  scroll(link : string) {
    console.log(link);
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

  checkLists( job : any[], abil : string ) {
    let list : any[] = this.tech.filter((item: any) => item.job == (job));
    let action : any[] = list.filter((item: any) => item.type == (abil));
    return action.length > 0;
  }

  getTech( job : any[] ) {
    return this.tech.filter((item: any) => item.job == (job));
  }
  
  getType( job : any[], abil : string ) {
    let list = this.getTech(job);
    let action : any[] = list.filter((item: any) => item.type == (abil));
    return action.length > 0;
  }

  constructor( private http: HttpClient ) { }
  
  ngOnInit(): void {
    this.http.get('assets/jobs.json').subscribe((data : any) => { this.jobs = data });
    this.http.get('assets/tech.json').subscribe((data : any) => { this.tech = data });
    
    for (let i = 0; i < this.jobs.length; i++) {
      this.show.push (false)
    }
  }
}
