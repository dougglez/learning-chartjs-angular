angular.module("chartExample", ["ui.router"])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/bar");
    
    // $stateProvider
    // .state("home", {
    //   url: "/",
    //   templateUrl: "./views/home.html",
    //   controller: "homeCtrl"
    // })
    $stateProvider
    .state("bar", {
      url: "/bar",
      templateUrl: "./views/bar.html",
      controller: "barCtrl"
    })
    $stateProvider
    .state("line", {
      url: "/line",
      templateUrl: "./views/line.html",
      controller: "lineCtrl"
    })
    $stateProvider
    .state("radar", {
      url: "/radar",
      templateUrl: "./views/radar.html",
      controller: "radarCtrl"
    })
    $stateProvider
    .state("polar", {
      url: "/polar",
      templateUrl: "./views/polar.html",
      controller: "polarCtrl"
    })
  });


