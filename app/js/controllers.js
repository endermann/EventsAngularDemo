'use strict';

function EventListController($scope, $location, eventData) {
    $scope.events = eventData.events;

    $scope.showEvent = function (event) {
        $location.url('/event/' + event.id)
    }
}

function EventController($scope, eventData, $routeParams) {
    $scope.event = _.findWhere(eventData.events, {id: parseInt($routeParams.eventId)});

    $scope.upVoteSession = function(session) {
        session.upVoteCount++;
    }

}
