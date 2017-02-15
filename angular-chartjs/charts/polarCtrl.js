angular.module("chartExample").controller('polarCtrl', function ($scope) {
  let ctx = document.getElementById('polarChart');
  let polarChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: [1, 2, 3, 4, 5, 6],
      datasets: [{
        label: 'Polar Graph',
        data: [26, 15, 34, 23, 32, 21],
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
    }
  })
});