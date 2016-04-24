// main setting
var ngApp = angular.module('ngApp', [
    'ngSanitize',
    'ngRoute',
    ]);
var flag=true;
ngApp.controller('mainCtrl', function($rootScope, $scope, $location, $interval, $http) {
	$scope.hour = 0;
	$scope.minutes = 0;
	$scope.seconds = 0;
	$scope.milliSeconds = 0;
	$scope.interval = null;
	$scope.Start_Rap_Btn = "<b>START</b>";
	$scope.Stop_ReSet_Btn = "<b>STOP</b>";

	$scope.countStart = function() {

		if($scope.interval === null) {
			$scope.interval = $interval(countUpMs, 10);

			$scope.Start_Rap_Btn = "<b>Rap</b>";
			$scope.Stop_ReSet_Btn = "<b>STOP</b>";

		}
		else {
			var rap = $scope.hour + ":" + $scope.minutes + "'" + $scope.seconds + "''" + $scope.milliSeconds;
			$scope.RapText = rap;
		}
	}

	$scope.countStop = function() {
		if ($scope.interval==null) {
			$scope.hour = 0;
			$scope.minutes = 0;
			$scope.seconds = 0;
			$scope.milliSeconds = 0;
			$scope.Start_Rap_Btn = "<b>START</b>";
			$scope.Stop_ReSet_Btn = "<b>STOP</b>";
		}else{
		$interval.cancel($scope.interval);
		$scope.interval = null;
		$scope.Start_Rap_Btn = "<b>START</b>";
		$scope.Stop_ReSet_Btn = "<b>ReSet</b>";
		}


	}

	var countUpHour = function() {
		$scope.hour++;
	}
	var countUpMin = function() {
		$scope.minutes++;
		if ($scope.minutes > 59) {
			$scope.minutes = 0;
			countUpHour();
		}
	}
	var countUpSec = function() {
		$scope.seconds++;
		if ($scope.seconds > 59) {
			$scope.seconds = 0;
			countUpMin();
		}
	}
	var countUpMs = function() {
		$scope.milliSeconds++;
		if ($scope.milliSeconds > 99) {
			$scope.milliSeconds = 0;
			countUpSec();
		}
	}
});