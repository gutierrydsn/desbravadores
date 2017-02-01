'use strict';

app.controller('headerController',headerController);

headerController.$inject = ['$rootScope'];

function headerController($scope,$rootScope) {

    $scope.setSidebarCollapsed = setSidebarCollapsed;
    $scope.logout = logout;


    function setSidebarCollapsed(){
        $scope.sidebarCollapsed = !$scope.sidebarCollapsed;
    }

    function logout(){
        $scope.Logged = false;
    }

}

