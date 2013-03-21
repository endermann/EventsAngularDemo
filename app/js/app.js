'use strict';

angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/events', {templateUrl: '/partials/eventList.html', controller: EventListController })
        $routeProvider.otherwise({redirectTo: '/events'});
        $routeProvider.when('/event/:eventId', {templateUrl: '/partials/event.html', controller: EventController})
        
        $locationProvider.html5Mode(true);
    });