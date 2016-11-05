'use strict';

angular.
  module('weatherDetail').
  component('weatherDetail', {
      templateUrl: 'weather-detail/weather-detail.template.html',
      controller: ['$routeParams', 'locationservice', WeatherDetailController]
  });

function WeatherDetailController($routeParams, locationservice) {
    var self = this;

    var getResults = function () {
        locationservice.getLocations().then(onResultsComplete);
    };

    var onResultsComplete = function (response) {
        self.results = response;
    }

    getResults();
}