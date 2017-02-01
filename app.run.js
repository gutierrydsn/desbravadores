'use strict';

app.run(run);

run.$inject = ['$rootScope','MODULES_LIST'];

function run($scope, MODULES_LIST) {
    $scope.title = 'Desbravadores';
}

