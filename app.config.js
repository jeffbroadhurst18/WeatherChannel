'use strict';

angular.
  module('weatherApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
          when('/weather', {
              template: '<weather-detail></weather-detail>'
          }).otherwise('/weather');
    }
  ]);

