import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexGrid, ApexLegend, ApexPlotOptions, ApexResponsive, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis } from "ng-apexcharts";

export interface App {
}
export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  markers: any; //ApexMarkers;
  stroke: any; //ApexStroke;
  yaxis: ApexYAxis | ApexYAxis[] | any;
  plotOptions: ApexPlotOptions | any;
  dataLabels: ApexDataLabels | any;
  colors: string[] | any;
  labels: string[] | number[] | any;
  title: ApexTitleSubtitle | any;
  subtitle: ApexTitleSubtitle | any;
  legend: ApexLegend | any;
  fill: ApexFill | any;
  tooltip: ApexTooltip | any;
  grid: ApexGrid | any;
  responsive: ApexResponsive[];
};
