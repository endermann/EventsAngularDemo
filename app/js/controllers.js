'use strict';

function EventListController($scope, eventData, $location) {
    $scope.events = eventData.events;

    $scope.showEvent = function(event) {
        $location.url('event/' + event.id);
    }

    $scope.editName = function(event) {
        event.name = "foo";
    }
}

function EventController($scope, $routeParams, eventData) {
    $scope.event = _.findWhere(eventData.events, {id: parseInt($routeParams.eventId)});

    $scope.upVoteSession = function(session) {
        session.upVoteCount++;
    }
}


