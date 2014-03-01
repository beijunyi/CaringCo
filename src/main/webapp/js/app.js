//Authored by http://www.beijunyi.com on 1st March 2014

var app = angular.module('CaringCo', ['ngRoute', 'ngSanitize']);

app.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/home', {
          templateUrl: 'html/home.html',
          controller: 'HomeController'
        }).
        when('/about', {
          templateUrl: 'html/about.html',
          controller: 'AboutController'
        }).
        when('/contact', {
          templateUrl: 'html/contact.html',
          controller: 'ContactController'
        }).
        otherwise({
          redirectTo: '/home'
        })
    }
  ]
);