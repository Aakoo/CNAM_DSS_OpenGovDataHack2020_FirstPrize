$(document).ready(function(){
	'use strict';

	am4core.useTheme(am4themes_animated);
	var chart = am4core.create("piechart", am4charts.PieChart3D);

	chart.data = [{
		"country": "Lithuania",
		"litres": 501.9
	}, {
		"country": "Czech Republic",
		"litres": 301.9
	}, {
		"country": "Ireland",
		"litres": 201.1
	}, {
		"country": "Germany",
		"litres": 165.8
	}, {
		"country": "Australia",
		"litres": 139.9
	}];
	chart.innerRadius = am4core.percent(0);
	chart.depth = 50;

	chart.legend = new am4charts.Legend();
	chart.legend.position = "right";

	var series = chart.series.push(new am4charts.PieSeries3D());
	series.dataFields.value = "litres";
	series.dataFields.depthValue = "litres";
	series.dataFields.category = "country";
});