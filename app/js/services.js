'use strict';

angular.module('myApp.services', [])
    .factory('eventData', function () {
        return {
            events: [
                {id: 1, name: 'Code Camp', location: 'Sandy, UT', cost: 0,
                    sessions: [
                        {id: 1, name: 'Using AngularJS', duration: 60},
                        {id: 2, name: 'Arduino 101', duration: 30},
                        {id: 3, name: 'Clean Code', duration: 60}
                    ]
                },
                {id: 2, name: 'OpenWest', location: 'Orem, UT', cost: 12345.6789,
                    sessions: [
                        {id: 1, name: 'Git Fundamentals', duration: 90},
                        {id: 2, name: 'JS.Next the new Javascript', duration: 60},
                        {id: 3, name: 'Responsive Web Design', duration: 60}
                    ]
                },
                {id: 3, name: 'Google I/O', location: 'San Francisco, CA', cost: 900.99,
                    sessions: [
                        {id: 1, name: 'Android Features', duration: 90},
                        {id: 2, name: 'Google Glass Demo', duration: 60},
                        {id: 3, name: 'AngularJS - The Future of the web', duration: 60}
                    ]
                }
            ]
        };
    });