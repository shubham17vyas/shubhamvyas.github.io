var app = angular.module("myApp", ['ngRoute']);

app.service("serviceme", ['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/header', {
			templateUrl: 'views/header.html',
			controller: "HeaderController"
		})
		.when('/about', {
			templateUrl: 'views/aboutme.html',
			controller: "AboutMeController"
		})
		.when('/sayings', {
			templateUrl: 'views/sayings.html',
			controller: "SayingsController"
		})
		.when('/skills', {
			templateUrl: 'views/skills.html',
			controller: "SkillsController"
		})
		.when('/projects', {
			templateUrl: 'views/projects.html',
			controller: "ProjectsController"
		})
		.when('/contact', {
			templateUrl: 'views/contactme.html',
			controller: "ContactMeController"
		})
		.otherwise();
}]);