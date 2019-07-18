$(document).ready(function () {
    var pieOptions = {
        chart: {
            type: 'donut',
        }, stroke: {
            width: 0,
            curve: 'smooth'
        },
        series: [44, 55, 41, 17, 15],
        fill: {
            type: 'gradient',
        }
    }

    var pieChart = new ApexCharts(
        document.querySelector("#pie-chart"),
        pieOptions
    );

    pieChart.render();
});