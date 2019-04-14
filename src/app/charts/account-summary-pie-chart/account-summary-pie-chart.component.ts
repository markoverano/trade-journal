import { Component, OnInit } from '@angular/core';
import { THEME_COLORS } from '../../shared/helpers/theme-colors';

const theme = 'Bright';

@Component({
  selector: 'app-account-summary-pie-chart',
  templateUrl: './account-summary-pie-chart.component.html',
  styleUrls: ['./account-summary-pie-chart.component.css']
})
export class AccountSummaryPieChartComponent implements OnInit {

  constructor() { }

  pieChartData: any[] = [
   2,3,4,5,6,7,8
  ]
  pieChartLabels : string[] = ["Green", "GTCAP", "DD", "X", "ISM"];
  pieChartType: string =  "doughnut";

  colors: any[] = [
    {
      backgroundColor: this.themeColors(theme)
      // borderColor: '#ffffff'
    }
  ];

  options: [{
    responsive: true,
    legend: {
      position: 'left',
    },

    animation: {
      animateScale: true,
      animateRotate: true
    }
  }]
  
  ngOnInit() {
  }

  themeColors(setName: string): string[] {
    const c = THEME_COLORS.slice(0)
      .find(set => set.name === setName).colorSet;

    return c;
  }
}
