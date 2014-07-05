'use strict';

angular.module('wannahangApp')
  .controller('NewhangCtrl', function ($scope, $http, $interval) {


  		$scope.friends = [
	  		{
	  			name:'Liam Cardenas'
	  		},
	  		{
	  			name:'Brent Kirkland'
	  		},
	  		{
	  			name:'Nick Brown'
	  		},

  		];

  		// console.log($scope.friends)



  	$scope.createHang = function(emails) {

  		// $scope.users = emails.split(',');
  	}

    $scope.addfriend = function(friendUserName) {
      console.log(friendUserName);
    }


  });
