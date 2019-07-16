window.Apex = {
    chart: {
        background: '#1b2b37',
        foreColor: '#999',
        toolbar: {
            show: false
        },
        height: 300
    },
    stroke: {
        width: 2
    },
    dataLabels: {
        enabled: false
    },
    tooltip: {
        theme: 'dark'
    },
    grid: {
        borderColor: '#243a4a',
        xaxis: {
            lines: {
                show: true
            }
        },
    }
};

$(document).ready(function () {

    var options = {
        chart: {
            type: 'area',
        },
        colors: ['#1986f9', '#f4426a'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            dashArray: 5,
            width: 2
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                shadeIntensity: 1,
                type: 'vertical',
                opacityFrom: 1,
                opacityTo: 0,
                stops: [0, 100, 100, 100]
            },
        },
        markers: {
            size: 5,
            opacity: 0.9,
            colors: ['#1b2b37'],
            strokeColor: ['#1986f9', '#f4426a'],
            strokeWidth: 3,
            hover: {
                size: 7,
            }
        },
        series: [{
            name: 'Some Metric 1',
            data: [31, 40, 30, 51, 42, 70, 80]
        }, {
            name: 'Some Metric 2',
            data: [11, 32, 45, 32, 34, 25, 10]
        }],

        xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        }
    }

    var chart1 = new ApexCharts(
        document.querySelector("#transaction-chart"),
        options
    );

    var chart2 = new ApexCharts(
        document.querySelector("#transaction-chart2"),
        options
    );

    var chart3 = new ApexCharts(
        document.querySelector("#transaction-chart3"),
        options
    );
    var chart4 = new ApexCharts(
        document.querySelector("#transaction-chart4"),
        options
    );
    var chart5 = new ApexCharts(
        document.querySelector("#transaction-chart5"),
        options
    );

    chart1.render();
    chart2.render();
    chart3.render();
    chart4.render();
    chart5.render();

});