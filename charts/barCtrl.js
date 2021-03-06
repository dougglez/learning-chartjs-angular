angular.module("chartExample").controller('barCtrl', function ($scope, $http, $timeout) {

// function data() {
//   return $http.get('../datafile.js').then((response) => $scope.myData = response)
// }


// $timeout(() => console.log('testing', $scope.myData), 1000);

  let ctx = document.getElementById("barChart");
  let myChart = new Chart(ctx, {
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


// let ctx2 = document.getElementById("bubbleChart");
// let myBubbleChart = new Chart(ctx2,{
//     type: 'bubble',
//     data: {
//         datasets: [
//         {
//             label: 'First Dataset',
//             data: [
//                 {
//                     x: 20,
//                     y: 30,
//                     r: 15
//                 },
//                 {
//                     x: 40,
//                     y: 10,
//                     r: 10
//                 }
//             ],
//             backgroundColor:"#FF6384",
//             hoverBackgroundColor: "#FF6384",
//         }]
// }
    // options: options
// });

});