import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RulesComponent } from './rules/rules.component';
import { CreateComponent } from './create/create.component';
import { JobsComponent } from './jobs/jobs.component';
import { MobsComponent } from './mobs/mobs.component';
import { GearComponent } from './gear/gear.component';
import { WeaponsComponent } from './gear/weapons/weapons.component';
import { ArmorComponent } from './gear/armor/armor.component';
import { ItemsComponent } from './gear/items/items.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'create', component: CreateComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'mobs', component: MobsComponent },
  { path: 'gear', component: GearComponent,
    children: [
      { path: '', component: WeaponsComponent },
      { path: 'weapons', component: WeaponsComponent },
      { path: 'armor', component: ArmorComponent },
      { path: 'items', component: ItemsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
