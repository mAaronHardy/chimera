import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav.component';
import { TechPhysComponent } from './components/tech/tech-phys.component';
import { TechTableComponent } from './components/tech/tech-table.component';
import { TechSpecComponent } from './components/tech/tech-spec.component';
import { TechOtherComponent } from './components/tech/tech-other.component';
import { TechTagsComponent } from './components/tech/tech-tags.component';

import { FooterComponent } from './components/footer.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { MobsComponent } from './mobs/mobs.component';
import { WeaponsComponent } from './gear/weapons/weapons.component';
import { GearComponent } from './gear/gear.component';
import { ArmorComponent } from './gear/armor/armor.component';
import { ItemsComponent } from './gear/items/items.component';
import { CreateComponent } from './create/create.component';
import { RulesComponent } from './rules/rules.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TechTableComponent,
    TechPhysComponent,
    TechSpecComponent,
    TechOtherComponent,
    TechTagsComponent,

    FooterComponent,
    HomeComponent,
    JobsComponent,
    MobsComponent,
    WeaponsComponent,
    GearComponent,
    ArmorComponent,
    ItemsComponent,
    CreateComponent,
    RulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
