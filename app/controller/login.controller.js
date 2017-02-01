'use strict';

app.controller('loginController',loginController);

loginController.$inject = ['$rootScope','MODULES_LIST'];

function loginController($scope,MODULES_LIST) {
    var user = {userName : '', password : ''};

    $scope.user = user;
    $scope.validLogin = validLogin;


    function validLogin(){
        $scope.Logged = (user.userName == 'admin' && user.password == '@g8t13rr7@') ;

        if (!$scope.Logged) {
            toastr.error("O usuário ou senha infomado não corresponde a um usuário valido!", "Erro ao efetuar login..");
            return;
        }
    }

}
