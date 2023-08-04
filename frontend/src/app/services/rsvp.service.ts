import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import the data.ts for temporary displaying
import { sample_rsvp } from 'src/data';
import { RSVP_URL } from '../share/constants/urls';
// import the rsvp model
import { IRSVPModelAngular } from '../share/model/IRSVPModelAngular';


// Note modify this later when finish with the backend

@Injectable({
  providedIn: 'root'
})
export class RsvpService {

  // Need to inject the httpClient to the constructor to talk to the backend
  constructor(private http:HttpClient) { }

  // http will send an observable therefore we need to subscribe to it
  getAll(): Observable<IRSVPModelAngular[]>{
    return this.http.get<IRSVPModelAngular[]>(RSVP_URL);
  }


}
