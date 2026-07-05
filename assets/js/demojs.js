statics = {
    initslider: function () {

    $(".info-more").click(function () {
         
            if ($('.layer-static').css('display') == 'none')  {
      $(".layer-static").css("display","block");
       $(".layer-static").addClass("shwsearch animated slideInUp");
        } else {
           $(".layer-static").css("display","none");
        }
        });
 $(".ext-layer").click(function () {
     $(".layer-static").css("display","none");     
    
        });
    
    },

    initDatePicker: function () {

        $('.datepicker').datetimepicker({
             
            format: 'DD/MM/YYYY',
             
            icons: {
                time: "now-ui-icons tech_watch-time",
                date: "now-ui-icons ui-1_calendar-60",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                clear: 'fa fa-trash',
                close: 'fa fa-remove'
            }
        });


    },



    initcurrent: function () {
        var ctx = document.getElementById('tmp-graph1').getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [9.00, 9.30, 10.00, 10.30, 11.00, 11.30, 12, 12.30, 13, 13.30],
                datasets: [{
                    data: [116, 114, 106, 106, 107, 111, 133, 221, 783, 478],
                    label: "t1",
                    borderColor: "#FFF",
                    fill: true,
                    backgroundColor: "#3e95cd"
                }, {
                    data: [282, 350, 111, 202, 135, 209, 147, 402, 700, 267],
                    label: "h2",
                    borderColor: "#FFF",
                    fill: true,
                    backgroundColor: "#8e5ea2"
                }, {
                    data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                    label: "t2",
                    borderColor: "#FFF",
                    fill: true,
                    backgroundColor: "#3cba9f"
                }, {
                    data: [440, 220, 10, 316, 224, 38, 74, 167, 508, 784],
                    label: "h2",
                    borderColor: "#FFFF",
                    fill: true,
                    backgroundColor: "#e8c3b9"
                }
    ]
            },
            options: {
                layout: {
                    padding: {
                        left: 20,
                        right: 20,
                        top: 0,
                        bottom: 0
                    }
                },
                maintainAspectRatio: false,
                tooltips: {
                    backgroundColor: '#fff',
                    titleFontColor: '#333',
                    bodyFontColor: '#666',
                    bodySpacing: 4,
                    xPadding: 12,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest"
                },
                legend: {
                    position: "bottom",
                    fillStyle: "#FFF"

                },
                scales: {
                    yAxes: [{
                        ticks: {
                            fontColor: "#7d7d7d",
                            fontStyle: "thin",
                            beginAtZero: true,
                            maxTicksLimit: 5,
                            padding: 10
                        },
                        gridLines: {
                            drawTicks: true,

                            display: true,
                            color: "rgba(255,255,255,0.1)",
                            zeroLineColor: "transparent"
                        }

                    }],
                    xAxes: [{
                        gridLines: {
                            zeroLineColor: "#007bff",
                            display: true

                        },
                        ticks: {
                            padding: 10,
                            fontColor: "#7d7d7d",
                            fontStyle: "thin"
                        }
                    }]
                }
            }
        });
    }



}