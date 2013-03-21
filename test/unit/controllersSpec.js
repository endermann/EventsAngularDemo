'use strict';

describe('EventListController', function () {
    var controller;
    var scope;

    beforeEach(function () {
        module('myApp');
        inject(function ($rootScope, $controller, eventData) {
            scope = $rootScope.$new();
            controller = $controller(EventListController, {$scope: scope, eventData: eventData});
        })
    });

    describe('when editing the name', function () {
        it('should edit the name on the event', function () {
            var event = {name: "Code Camp"};

            scope.editName(event);

            expect(event.name).toEqual('foo');
        });
    });
});


