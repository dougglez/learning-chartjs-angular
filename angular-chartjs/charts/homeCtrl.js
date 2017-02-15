angular.module('chartExample').controller('homeCtrl', function ($scope, $interval, service) {
  $scope.counter = 0;
  var increaseCounter = function () {
                $scope.counter = $scope.counter + 1;
            }

            $interval(increaseCounter, 1000); 

  $scope.getRandomChart = function () {
    $scope.chartInfo = service.getRandomChart();
    let ctx = document.getElementById('doubleData');
    let doubleData = new Chart(ctx, {
      type: $scope.chartInfo.type,
      data: {
        labels: $scope.chartInfo.labels,
        datasets: [{
          label: 'Chart 1',
          data: $scope.chartInfo.data.array1,
          backgroundColor: $scope.chartInfo.bgColor1,
          borderColor: 'rgba(10, 10, 10, .8)',
          borderWidth: 1
        }, {
          label: 'Chart 2',
          data: $scope.chartInfo.data.array2,
          backgroundColor: $scope.chartInfo.bgColor2,
          borderColor: 'rgba(0, 0, 0, 1)',
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
  };
// $interval($scope.getRandomChart(), 100);



});