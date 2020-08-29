am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("polarareaChart", am4charts.RadarChart);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

let data = []
for(let i = 0; i < 10; i++){
  data.push({category:i, value1:Math.round(Math.random() * 10), value2:Math.round(Math.random() * 10), value3:Math.round(Math.random() * 10), value4:Math.round(Math.random() * 10)})
}

chart.data = data;
chart.radius = am4core.percent(100);

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.labels.template.location = 0.5;
categoryAxis.renderer.tooltipLocation = 0.5;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.labels.template.disabled = true;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.labels.template.horizontalCenter = "left";
valueAxis.renderer.grid.template.disabled = true;

var series1 = chart.series.push(new am4charts.RadarColumnSeries());
series1.name = "Series 1";
series1.dataFields.categoryX = "category";
series1.dataFields.valueY = "value2";
series1.stroke = am4core.color("#ffffff");
series1.columns.template.strokeOpacity = 0.2;
series1.stacked = true;
series1.sequencedInterpolation = true;
series1.columns.template.width = am4core.percent(100);
series1.columns.template.tooltipText = "{valueY}";

var series2 = chart.series.push(series1.clone());
series2.name = "Series 2";
series2.fill = chart.colors.next();
series2.dataFields.valueY = "value2";

var series3 = chart.series.push(series1.clone());
series3.name = "Series 3";
series3.fill = chart.colors.next();

series3.dataFields.valueY = "value3";

var series4 = chart.series.push(series1.clone());
series4.name = "Series 4";
series4.fill = chart.colors.next();
series4.dataFields.valueY = "value4";

chart.seriesContainer.zIndex = -1;

chart.scrollbarX = new am4core.Scrollbar();
chart.scrollbarX.exportable = false;
chart.scrollbarY = new am4core.Scrollbar();
chart.scrollbarY.exportable = false;

chart.cursor = new am4charts.RadarCursor();
chart.cursor.xAxis = categoryAxis;
chart.cursor.fullWidthXLine = true;
chart.cursor.lineX.strokeOpacity = 0;
chart.cursor.lineX.fillOpacity = 0.1;
chart.cursor.lineX.fill = am4core.color("#000000");

}); // end am4core.ready()