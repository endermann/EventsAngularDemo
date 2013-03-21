'use strict';

function IndexController($scope, eventData) {
    $scope.events = eventData.events;

    $scope.editName = function(event) {
        event.name = "foo";
    }
}