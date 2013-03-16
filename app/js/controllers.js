'use strict';

function EventListController($scope, eventData) {
    $scope.events = eventData.events;

    $scope.alertName = function(event) {
        alert(event.name);
    }
}
