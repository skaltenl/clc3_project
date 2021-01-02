import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public apiKey = '65b6f4a806afc722b748db67e1130294';

  constructor() { }

  ngOnInit(): void {
  }

}
