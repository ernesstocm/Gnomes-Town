import { BrastlewarkComponent } from './brastlewark/brastlewark.component';
import { GnomeDetailsComponent } from './gnome-details/gnome-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: BrastlewarkComponent},
  { path: 'gnome/:id', component: GnomeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
