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
  launchYear = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  selectedYear = '';
  launchSucess = '';
  landSuccess = '';
  activeYear = '';
  activeLaunch = '';
  activeLand = '';

  constructor(public appService: AppService) {
  }

  ngOnInit() {
    this.appService.getData().subscribe((res) => {
      this.spaceXResponse = res;
    })
  }

  onClickYear(year, launchSuccess, landSuccess) {
    if(year === this.selectedYear) {
      this.selectedYear = '';
      this.activeYear = ''
    } else {
      this.selectedYear = year ? year : this.selectedYear;
      this.activeYear = this.selectedYear;
    }

    if(launchSuccess === this.launchSucess) {
      this.launchSucess = '';
      this.activeLaunch = ''

    } else {
      this.launchSucess = launchSuccess ? launchSuccess : this.launchSucess;
      this.activeLaunch = this.launchSucess;

    }

    if(landSuccess === this.landSuccess) {
      this.landSuccess = '';
      this.activeLand = ''

    } else {
      this.landSuccess = landSuccess ? landSuccess : this.landSuccess;
      this.activeLand = this.landSuccess;
    }
    this.appService.getData(this.selectedYear, this.launchSucess, this.landSuccess).subscribe((res) => {
      this.spaceXResponse = res;
    })
  }

}
