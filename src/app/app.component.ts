import { Component } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {EventService} from "./event.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers:[EventService]
})
export class AppComponent {
  title = 'CountryCric';
  public events: Event[] = [];
  // private eventService:EventService;
  constructor(private eventService:EventService) {}
  //
  ngOnInit(){
    this.getEvent();
  }
  //
  public getEvent(): void {
    this.eventService.getAllEvent().subscribe(
      (response: Event[]) => {
        this.events = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
