'use strict';

function EventListController($scope, eventData) {
    $scope.events = eventData.events;

    $scope.editName = function(event) {
        event.name = "foo";
    }
}