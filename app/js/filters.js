'use strict';

angular.module('myApp.filters', [])
    .filter('truncate', function () {
        return function (text, length) {
            if (!length)
                length = 50;

            if (text.length <= length) {
                return text;
            }
            else {
                return text.substring(0, length) + "...";
            }
        };
    });
