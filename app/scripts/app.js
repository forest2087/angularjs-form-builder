'use strict';

var angularApp = angular.module('angularjsFormBuilderApp', []);

angularApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/forms', {
            templateUrl: 'views/list.html',
            controller: 'ListCtrl',
            resolve: { forms : ListCtrl.resolve }
        })
        .when('/forms/create', {
            templateUrl: 'views/create.html',
            controller: 'CreateCtrl'
        })
        .when('/forms/:id/view', {
            templateUrl: 'views/view.html',
            controller: 'ViewCtrl',
            resolve: { form : ViewCtrl.resolve }
        })
        .when('/forms/:id/edit', {
            templateUrl: 'views/edit.html',
            controller: 'EditCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    }).run(['$rootScope',  function($rootScope) {


    }]);


