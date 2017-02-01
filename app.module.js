'use strict';

var app = angular.module('desbravadoresApp', []);

app.controller('moduleController',moduleController);

moduleController.$inject = ['$rootScope'];

function moduleController($scope) {
    $scope.Logged = false;
    $scope.sidebarCollapsed = true;
}