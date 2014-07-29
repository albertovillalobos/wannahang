'use strict';

angular.module('wannahangApp')
  .controller('MainCtrl', function ($scope, $http, $interval) {

  	$scope.tagwords = [
      "hang",
      "chill",
      "meet",
      "study",
      "hack",
      "party",
      "have a few beers",
      "game",
      "kick it"
      ];
  	$scope.tagword = "hang";

  	var count = 0;

  	$interval(function() {
  		$scope.tagword = $scope.tagwords[count];
  		count++;

  		if (count >= $scope.tagwords.length) {
  			count = 0;
  		};

  	}, 1500);
  });
