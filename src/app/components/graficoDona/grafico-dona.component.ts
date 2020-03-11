import { Component, OnInit, Input } from '@angular/core';
import { Label } from 'ng2-charts';

@Component({
  selector: 'grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {
  @Input ('ChartLabels') doughnutChartLabels: Label[] = [];
  @Input ('ChartData') doughnutChartData: number [] = [];
  @Input ('ChartType') doughnutChartType: string = '';
  @Input () leyenda: string = 'Leyenda'
  constructor() { }

  ngOnInit() {
  }

}
