var app = angular.module('CherniOsamApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'MainController'
	});
	$routeProvider.when('/home', {
		templateUrl: 'templates/home.html',
		controller: 'MainController'
	});
	$routeProvider.when('/location', {
		templateUrl: 'templates/location.html',
		controller: 'LocationController'
	});
}]);