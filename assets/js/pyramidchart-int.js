am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("pyramidChart", am4charts.SlicedChart);
chart.paddingBottom = 30;
chart.data = [{
  "name": "Stage #1",
  "value": 600
}, {
  "name": "Stage #2",
  "value": 300
}, {
  "name": "Stage #3",
  "value": 200
}, {
  "name": "Stage #4",
  "value": 180
}, {
  "name": "Stage #5",
  "value": 50
}, {
  "name": "Stage #6",
  "value": 20
}, {
  "name": "Stage #7",
  "value": 280
}];

var series = chart.series.push(new am4charts.PyramidSeries());
series.dataFields.value = "value";
series.dataFields.category = "name";
series.alignLabels = true;
series.valueIs = "height";

}); // end am4core.ready()