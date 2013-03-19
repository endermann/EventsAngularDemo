'use strict';

angular.module('myApp.directives', [])
    .directive('upvote', function () {
        return {
            restrict:"E",
            templateUrl:"/partials/upvote.html",
            scope: {
                count: '@count',
                upVoteFunction: '&func'
            }
        }
    });
