'use strict';

angular.module('myApp.services', [])
    .factory('eventData', function () {
        return {
            events: [
                {id: 1, name: 'Code Camp', location: 'Sandy, UT', date: new Date(2013, 3, 23, 9), cost: 0,
                    sessions: [
                        {id: 1, name: 'Using AngularJS', duration: 60, abstract: 'Tired of difficult-to-test Javascript code? Love MVC? AngularJS is quickly gaining popularity due to it\'s ability to quickly create legible, maintainable and testable MVC-style Javascript apps. In this session we will build an app from scratch illustrating the powerful features in Angular including: Angular\'s built in dependency injection provider; Models, Views, and Controllers; Repeaters and Filters; an overview of of the services included with Angular; how to create your own injectable services; and how Angular makes it easy to do all of this using test-driven development.', upVoteCount: 0},
                        {id: 2, name: 'Arduino 101', duration: 30, abstract: 'Show an Arduino and the cool things these little devices can do. Show how easy it is to code for these devices right in Visual Studio', upVoteCount: 0},
                        {id: 3, name: 'Clean Code', duration: 60, abstract: 'How do you plan for and write clean code?', upVoteCount: 0}
                    ]
                },
                {id: 2, name: 'OpenWest', location: 'Orem, UT', date: new Date(2013, 5, 2, 8), cost: 12345.6789,
                    sessions: [
                        {id: 1, name: 'Git Fundamentals', duration: 90, abstract: 'Git Fundamentals', upVoteCount: 0},
                        {id: 2, name: 'Angular.js, making web development easy', duration: 60, abstract: 'Angular.js, making web development easy', upVoteCount: 0},
                        {id: 3, name: 'Responsive Web Design', duration: 60, abstract: 'Responsive Web Design', upVoteCount: 0}
                    ]
                },
                {id: 3, name: 'Google I/O', location: 'San Francisco, CA', date: new Date(2013, 5, 14, 9), cost: 900.99,
                    sessions: [
                        {id: 1, name: 'Android Features', duration: 90, abstract: 'Android Features', upVoteCount: 0},
                        {id: 2, name: 'Google Glass Demo', duration: 60, abstract: 'Google Glass Demo', upVoteCount: 0},
                        {id: 3, name: 'AngularJS - The Future of the web', duration: 60, abstract: 'AngularJS - The Future of the web', upVoteCount: 0}
                    ]
                }
            ]
        };
    });