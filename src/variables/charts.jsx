// ##############################
// // // javascript library for creating charts
// #############################
var Chartist = require("chartist");
var Tooltip = require("chartist-plugin-tooltips");

// ##############################
// // // variables used to create animation on charts
// #############################
var delays = 80,
  durations = 500;
var delays2 = 80,
  durations2 = 500;

// ##############################
// // // Daily Ontime
// #############################

const dailyOntimeChart = {
  data: {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    series: [[4, 6, 9, 9, 6, 9, 8]]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 15, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  // for animation
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

// ##############################
// // // Email Subscriptions
// #############################

const adherenceBreakdownChart = {
  data: {
    labels: ["SMS", "CC", "Ontime", "AC"],
    series: [4, 3, 6, 1]
  },
  options: {
    labelInterpolationFnc: function(value) {
      return value[0];
    }
  },
  responsiveOptions: [
    [
      "screen and (min-width: 640px)",
      {
        chartPadding: 0,
        labelOffset: 10,
        labelInterpolationFnc: function(value) {
          return value;
        }
      }
    ],
    [
      "screen and (min-width: 1024px)",
      {
        labelOffset: 10,
        chartPadding: 0
      }
    ]
  ]
};

// ##############################
// // // Completed Tasks
// #############################

const adherenceHistoryChart = {
  data: {
    labels: ["Jun", "Jul",'Aug','Sep','Oct'],
    series: [ [5, 3, 2, 1, 1],
    [9, 8, 3.5, 2, 1],
    [4, 6, 10, 11, 12],
    [6, 5, 4, 3, 2]]
  },
  options: {
    stackBars: true,
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 15, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

const adherenceBreakdownChart1 = {
  data: {
    labels: ["Ontime", "SMS", "CC", "AC"],
    series: [5, 8, 4, 6]
  },
  options: {
    labelInterpolationFnc: function(value) {
      return value[0];
    },
    plugins: [
      Chartist.plugins.tooltip({
        transformTooltipTextFnc: function(x){
            return parseFloat(x).toLocaleString();
        }
   })
    ]
  },
  responsiveOptions: [
    [
      "screen and (min-width: 640px)",
      {
        chartPadding: 0,
        labelOffset: 10,
        labelInterpolationFnc: function(value) {
          return value;
        }
      }
    ],
    [
      "screen and (min-width: 1024px)",
      {
        labelOffset: 10,
        chartPadding: 0
      }
    ]
  ]
};


module.exports = {
  dailyOntimeChart,
  adherenceBreakdownChart,
  adherenceHistoryChart,
  adherenceBreakdownChart1
};
