import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spacex-app';
  spaceXResponse;
  constructor(public appService: AppService) {

  }

  ngOnInit() {
    this.appService.getAllData().subscribe((res) => {
      this.spaceXResponse = res;
    })
  }

}
