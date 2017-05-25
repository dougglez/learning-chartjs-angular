angular.module('chartExample').directive('barDir', function() {
  return {
    restrict: 'E',
    templateUrl: "./charts/directives/barDir.html",
    // controller: 'dirCtrl',
    // scope: {
    //   data: '='
    // }
    controller: function($scope) {      

/**
|--------------------------------------------------
| Starting barchart code
|--------------------------------------------------
*/

let ctxDir = document.getElementById("myChartDir");
  let myChartDir = new Chart(ctxDir, {
    type: 'bar',
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange", "Test1", "Test2"],
      datasets: [{
        label: '# of Votes',
        data: [1290, 2283, 3092, 1532, 2111, 1003, 1487, 2645],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
    }
  }
});
console.log(myChartDir);

/**
|--------------------------------------------------
| Ending barchart code
|--------------------------------------------------
*/

    } 
  }
});