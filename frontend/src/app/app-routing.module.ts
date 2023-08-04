import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestlistComponent } from './components/guestlist/guestlist.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { RsvpComponent } from './components/rsvp/rsvp.component';
import { UsComponent } from './components/us/us.component';

const routes: Routes = [
  // adding the route to home

  {path:'home', component:HomeComponent},
  {path:'landing',component:LandingComponent},
  {path: 'rsvp', component:RsvpComponent},
  {path: 'guestlist', component:GuestlistComponent},
  {path: 'us', component:UsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
