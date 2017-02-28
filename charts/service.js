angular.module('chartExample').service('service', function () {

  //array of chart types
  this.chartTypes = [null, 'bar', 'line', 'radar'];
  this.doubleData;
  //function to pick a random chart from the array
  this.getRandomChartType = () => {
    this.currentChart = this.chartTypes[Math.floor(Math.random() * 3 + 1)];
    if (['bar', 'line', 'radar'].indexOf(this.currentChart) > -1) {
      this.doubleData = true;
    } else {
      this.doubleData = false;
    }
    return this.currentChart;
  }

  // function to randomly assign how long the length of the data arrays will be
  // also fills the arrays with random numbers according to the randomly chosen length
  this.getArrayLength = () => {
    //get a random length
    this.arrayLength = () => Math.floor(Math.random() * 5 + 3);
    this.data = {
      array1: [],
      array2: []
    };
    //fill both arrays
    // if chart compares two datasets, fill two arrays.
    if (doubleData) {
      for (var i = 0; i <= this.arrayLength() * 2; i++) {
        // basically just switching arrays with each loop
        if (i % 2 === 0) {
          this.data.array1.push(Math.floor(Math.random() * (Math.floor(Math.random() * 10 + 5)) + Math.floor(Math.random() * 10 + 1)));
        } else {
          this.data.array2.push(Math.floor(Math.random() * (Math.floor(Math.random() * 10 + 5)) + Math.floor(Math.random() * 10 + 1)));
        }
      }
      // can't figure out why array1 is sometimes bigger than array2. This is making sure they end up the same size.
      if (this.data.array1.length > this.data.array2.length) {
        this.data.array1.pop();
      }
    }
    // if chart type only accepts one dataset, only fill array1
    else {
      for (var i = 0; i <= this.arrayLength() * 2; i++) {
        this.data.array1.push(Math.floor(Math.random() * (Math.floor(Math.random() * 10 + 5)) + Math.floor(Math.random() * 10 + 1)));
      }
    }
    return this.data;
  };
  // filling out the labels array to make sure its the same length as our data arrays. Randomly splicing items until they match.
  this.getLabels = () => {
    this.labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange", "Black", "Cyan", "Teal"];
    for (var i = 0; this.labels.length > this.data.array1.length; i++) {
      this.labels.splice(Math.floor(Math.random() * 9), 1);
    }
    return this.labels;
  };

  // this.pickBackgroundColor = () => {
    this.bgColors = [
      'rgba(242,139,154',
      'rgba(42,86,94',
      'rgba(59,143,186',
      'rgba(246,80,123',
      'rgba(254,255,187'];
      // for (var i = 0; this.bgColors.length > 2; i++) {
      //   this.bgColors.splice(Math.floor(Math.random()*5));
      // }
      // console.log(this.bgColors);
      // return this.bgColors;
  // }
  // bringing all the functions together in one function call. Cleans up the homeCtrl file
  this.getRandomChart = () => {
    this.getRandomChartType();
    this.getArrayLength();
    this.getLabels();
    // this.pickBackgroundColor();
    return this.chartInfo = {
      type: this.currentChart,
      data: this.data,
      labels: this.newLabels,
      bgColor1: `${this.bgColors[0]}, 0.4)`,
      bgColor2: `${this.bgColors[1]}, 1)`
    };
  };
});