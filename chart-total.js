var options = {
    series: [{
    name: "Sunday",
    data: [
    [1, 3], [2, 3], [3, 3], [4, 2], [5, 1], [6, 1], [7, 3], [8, 4], [9, 3], [10, 1], [11, 2], [12, 2], [13, 1], [14, 1], [15, 4]]
  },{
    name: "Monday",
    data: [
    [1, 2], [2, 3], [3, 1], [4, 2], [5, 0], [6, 3], [7, 4], [8, 3], [9, 5], [10, 1], [11, 0], [12, 0], [13, 3], [14, 2], [15, 3]]
  },{
    name: "Tuesday",
    data: [
    [1, 4], [2, 2], [3, 0], [4, 0], [5, 2], [6, 1], [7, 3], [8, 3], [9, 4], [10, 0], [11, 2], [12, 0], [13, 1], [14, 3], [15, 1]]
  },{
    name: "Wednesday",
    data: [
    [1, 5], [2, 1], [3, 0], [4, 1], [5, 2], [6, 1], [7, 3], [8, 0], [9, 2], [10, 0], [11, 3], [12, 3], [13, 2], [14, 1], [15, 1]]
  },{
    name: "Thursday",
    data: [
    [1, 2], [2, 1], [3, 4], [4, 2], [5, 0], [6, 1], [7, 2], [8, 2], [9, 2], [10, 0], [11, 1], [12, 1], [13, 0], [14, 2], [15, 0]]
  },{
    name: "Friday",
    data: [
    [1, 4], [2, 2], [3, 5], [4, 4], [5, 0], [6, 3], [7, 0], [8, 2], [9, 1], [10, 0], [11, 6], [12, 1], [13, 1], [14, 4], [15, 0]]
  },{
    name: "Saturday",
    data: [
    [1, 4], [2, 2], [3, 2], [4, 1], [5, 0], [6, 4], [7, 1], [8, 2], [9, 1], [10, 2], [11, 1], [12, 2], [13, 0], [14, 1], [15, 0]]
  }],
    chart: {
    height: 250,
    width: 450,
    type: 'heatmap',
  },
  xaxis: {
    tickAmount: 14,
    title: {
        text: 'Week number'
    }
  },
  yaxis: {
    tickAmount: 7
  },
  colors: ["#B91FDE"],
  dataLabels: {
    enabled: false
  },
  title: {
    text: 'HeatMap Chart of Both Coffee and Tea'
  }
};

var chart = new ApexCharts(document.querySelector("#chart-total"), options);
chart.render();