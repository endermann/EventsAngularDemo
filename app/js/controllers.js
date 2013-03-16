'use strict';

function IndexController($scope, eventData) {
    $scope.events = eventData.events;

    $scope.alertName = function(event) {
        alert(event.name);
    }
}
