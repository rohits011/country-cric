import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EventService {
private apiServerUrl=environment.apiUrl;
  constructor(private http:HttpClient) { }

  public getAllEvent(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiServerUrl}/event/all`);
  }

}
