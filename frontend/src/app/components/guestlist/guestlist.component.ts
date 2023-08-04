import { Component, OnInit } from '@angular/core';
// import the service class
import { RsvpService } from 'src/app/services/rsvp.service';
// import the rsvp model
import { IRSVPModelAngular } from 'src/app/share/model/IRSVPModelAngular';
// import router
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-guestlist',
  templateUrl: './guestlist.component.html',
  styleUrls: ['./guestlist.component.css']
})
export class GuestlistComponent {

  rsvpObservable: Observable<IRSVPModelAngular[]>;
  rsvp: IRSVPModelAngular[] = [];

  constructor(private rsvpService: RsvpService, private router: Router, activatedRoute: ActivatedRoute){
    this.rsvpObservable = rsvpService.getAll();
    this.rsvpObservable.subscribe((result) =>{
      this.rsvp = result;
    })

  }

  /*ngOnInit(){
    this.rsvpObservable.subscribe((result)) => {
      this.rsvp = result;
    })
  }*/

}
