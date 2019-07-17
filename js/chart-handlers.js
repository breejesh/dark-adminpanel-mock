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

    var areaOptions1 = areaOptions2 = {
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

    var lineOptions = {
        chart: {
            type: 'line',
            shadow: {
                enabled: false,
                color: '#bbb',
                top: 3,
                left: 2,
                blur: 3,
                opacity: 1
            },
        },
        stroke: {
            width: 7,
            curve: 'smooth'
        },
        series: [{
            name: 'Likes',
            data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
        }],
        xaxis: {
            type: 'datetime',
            categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
        },
        title: {
            text: 'Social Media',
            align: 'left',
            style: {
                fontSize: "16px",
                color: '#666'
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: ['#FDD835'],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
            },
        },
        markers: {
            size: 3,
            opacity: 0.3,
            colors: ["#FFA41B"],
            strokeColor: "#fff",
            strokeWidth: 2,

            hover: {
                size: 7,
            }
        },
        yaxis: {
            min: -10,
            max: 40,
            title: {
                text: 'Engagement',
            },
        }
    }

    var pieOptions = {
        chart: {
            type: 'donut',
        }, stroke: {
            width: 0,
            curve: 'smooth'
        },
        series: [44, 55, 41, 17, 15],

    }


    var lineChart = new ApexCharts(
        document.querySelector("#line-chart"),
        lineOptions
    );

    var pieChart = new ApexCharts(
        document.querySelector("#pie-chart"),
        pieOptions
    );

    var areaChart1 = new ApexCharts(
        document.querySelector("#area-chart1"),
        areaOptions1
    );
    var areaChart2 = new ApexCharts(
        document.querySelector("#area-chart2"),
        areaOptions2
    );

    lineChart.render();
    pieChart.render();
    areaChart1.render();
    areaChart2.render();

});