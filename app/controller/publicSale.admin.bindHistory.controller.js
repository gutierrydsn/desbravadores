'use strict';

app.controller('publicSaleAdminBidHistory',publicSaleAdminBidHistory);

publicSaleAdminBidHistory.$inject = ['$rootScope'];

function publicSaleAdminBidHistory($scope,$rootScope) {

    $scope.bidHistory =
        [
            {cod : 1, dataTime : "05/01/2016 : 10:22:55", name : 'Admin', valor : 22500},
            {cod : 2, dataTime : "06/01/2016 : 22:15:17", name : 'Admin', valor : 23000},
            {cod : 3, dataTime : "06/01/2016 : 17:07:33", name : 'Admin', valor : 27000},
            {cod : 4, dataTime : "15/01/2016 : 19:45:10", name : 'Admin', valor : 32000}
        ]
}