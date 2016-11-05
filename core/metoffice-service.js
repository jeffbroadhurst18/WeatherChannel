var locationservice = function ($http) {

    var getLocations = function ()
    {
        return $http.get('http://datapoint.metoffice.gov.uk/public/data/val/wxobs/all/json/sitelist?key=fb4c0ad5-6ba6-4068-bbcd-c5a2788e8265')
            .then(function (response) {
                return response.data;
            });
    }

    return {
        getLocations: getLocations
    };

};

angular.
  module('core.metoffice').
  factory('locationservice', locationservice);