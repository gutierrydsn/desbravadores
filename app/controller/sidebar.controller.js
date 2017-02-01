'use strict';

app.controller('sidebarController',sidebarController);

sidebarController.$inject = ['$rootScope','MODULES_LIST'];

function sidebarController($scope,MODULES_LIST) {
    $scope.setPage = setPage;
    $scope.modulesList = MODULES_LIST;

    function setPage(page){
        $scope.activeModule = page;
    }

}
