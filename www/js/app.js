// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var stealApp = angular.module('App', ['ionic'])

stealApp.controller("CrimeCtrl", function($scope, $http) {

    $scope.getData = function(){
        $http.get('http://stealapi.apphb.com/api/Crime/GetARandomCrime').
    success(function(data, status, headers, config) {
      $scope.crimes = data;
      console.log(data);
    }).
    error(function(data, status, headers, config) {
      // log error
    });
  }
});


// function AppCtrl ($scope){

//   $scope.doNewTask = function(){
//       alert("yo");
//       $http({
//        method: 'GET',
//         url: 'http://stealapi.apphb.com/api/Crime/GetARandomCrime'
//             }).then(function successCallback(response) {
//               Console.log(response);
//         }, function errorCallback(response) {
//         });
//       };

// }

stealApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


// //navigation
// stealApp.config(function($stateProvider) {
//   $stateProvider
//   .state('index', {
//     url: '/',
//     templateUrl: 'home.html'
//   })
//   .state('music', {
//     url: '/music',
//     templateUrl: 'music.html'
//   });
// });





