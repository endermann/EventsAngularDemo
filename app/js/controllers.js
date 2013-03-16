'use strict';

function IndexController($scope) {
    $scope.events = [
        {name: 'Code Camp', date: new Date(2013, 3,23, 9), location: 'Sandy, UT', cost: 0},
        {name: 'OpenWest', date: new Date(2013, 5,4, 8), location: 'Orem, UT', cost: 12345.6789},
        {name: 'Google I/O', date: new Date(2013, 5,14, 9), location: 'San Francisco, CA', cost: 900.99}
    ];

    $scope.alertName = function(event) {
        alert(event.name);
    }
}