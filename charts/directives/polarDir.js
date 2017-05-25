const data = {
          labels: [1, 2, 3, 4, 5, 6],
          datasets: [{
            label: 'Polar Graph',
            data: [10,20,30,20,10,20],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        };

// const options = {

// }
angular.module('chartExample').directive('polarDir', function() {
  return {
    restrict: 'E',
    templateUrl: "./charts/directives/polarDir.html",
    // controller: 'dirCtrl',
    // scope: {
    //   data: '='
    // }
    controller: function($scope) { 
      let ctxPolar = document.getElementById("polarDirChart")
      let myPolarDir = new Chart(ctxPolar, {
        type: 'polarArea',
        data: data
      }); // close myPolarDir

    } //close controller
  } // close return
}); // close directive