'use strict';

app.controller('publicSale',publicSale);

publicSale.$inject = ['$rootScope', 'MODULES_LIST'];

function publicSale($scope, MODULES_LIST) {

    $scope.isPublicSaleProgress = isPublicSaleProgress;
    $scope.selectItem = selectItem;
    $scope.exitItemPublicSale = exitItemPublicSale;
    $scope.addValueInBid = addValueInBid;
    $scope.minusValueInBid = minusValueInBid;
    $scope.setSelectedImage = setSelectedImage;
    $scope.valueInMinimumBind = valueInMinimumBind;
    $scope.showBidHistory = showBidHistory;
    $scope.hideBidHistory = hideBidHistory;
    $scope.bid = bid;

    $scope.selectedBidHistory = null;
    $scope.selectedImage = null;
    $scope.selectedItem = null;

    var CONST_ADD_BID = 500;

    function valueInMinimumBind(){
        return $scope.newBid <= $scope.selectedItem.currentValue + CONST_ADD_BID;
    }

    function bid(){
        $scope.selectedItem.active = true;
        $scope.selectedItem.currentValue = $scope.newBid;
        $scope.selectedItem.myBid = $scope.newBid;
        $scope.selectedItem.byCurrentValue = 'Meu Usuário';

        toastr.info("lance efetuado com sucesso!");

        exitItemPublicSale();
    }

    function showBidHistory(){
        $scope.selectedBidHistory = '--'
    }

    function hideBidHistory(){
        $scope.selectedBidHistory = null;
    }

    function exitItemPublicSale(){
        $scope.selectedItem = null;
    }

    function setSelectedImage(img){
        $scope.selectedImage = img;
    }

    function isPublicSaleProgress(){
        return $scope.activeModule == MODULES_LIST.PUBLIC_SALE_PROGRESS;
    }

    function selectItem(item){
        $scope.selectedItem = item;
        $scope.newBid = item.currentValue;
        setSelectedImage(item.images[0]);

        addValueInBid();
    }

    function addValueInBid(){
        $scope.newBid += CONST_ADD_BID;
    }

    function minusValueInBid(){
        $scope.newBid -= CONST_ADD_BID;
    }

    $scope.carsList =
        [
            {
                id:1,
                images: ['./images/shopping/civic_2017_1.jpg','./images/shopping/1.1.jpg','./images/shopping/1.2.jpg'],
                brand:'Honda',
                model:'Civic',
                year:2017,
                color: 'Branco',
                km: 200,
                initialValue:30000.00,
                currentValue:62280.00,
                currentValueBy : 'Jose Carlos',
                marketValue:120000.00,
                endsIn : '01/02/2017',
                active : false,
                profit : 10,
                countVisits : 17,
                countBid : 5,
                fuel : 'Gasolina/Álcool',
                plate : '1084',
                addInformation : 'Leves arranhões'
            },
            {
                id:2,
                images: ['./images/shopping/2.jpg'],
                brand:'Honda',
                model:'Civic',
                year:2008,
                color : 'Prata',
                km : 48000,
                initialValue:15000.00,
                currentValue:22000.00,
                currentValueBy : 'Cesar',
                marketValue:38000.00,
                endsIn : '22/02/2017',
                active : true,
                myBid : 35500.00,
                profit : 12,
                countVisits : 1,
                countBid : 1,
                fuel : 'Álcool',
                plate : '2030',
                addInformation : 'Roda 19'
            },
            {
                id:3,
                images: ['./images/shopping/3.jpg','./images/shopping/3.1.jpg','./images/shopping/3.2.jpg','./images/shopping/3.3.jpg'],
                brand:'Honda',
                model:'Civic',
                year:2008,
                color:'Preto',
                km: 75000,
                initialValue:12000.00,
                currentValue:17500.00,
                currentValueBy : 'Aqnaldo',
                marketValue:37500.00,
                endsIn : '22/02/2017',
                active : false,
                profit : 17.8,
                countVisits : 18,
                countBid : 15,
                fuel : 'Gasolina/Álcool',
                plate : '1849'
            },
            {
                id:4,
                images: ['./images/shopping/4.jpg'],
                brand:'Honda',
                model:'HR-V',
                year:2015,
                color:'Prata',
                km:12000,
                initialValue:27000.00,
                currentValue:48000.00,
                currentValueBy : 'Marcos Silva',
                marketValue:72000.00,
                endsIn : '25/02/2017',
                active : true,
                myBid : 48000.00,
                profit : 9.7,
                countVisits : 17,
                countBid : 12,
                fuel : 'Gasolina',
                plate : '1212'
            },
            {
                id:5,
                images: ['./images/shopping/5.jpg'],
                brand:'Honda',
                model:'Ridgeline',
                year:2015,
                color:'Preto',
                km:1200,
                initialValue:78000.00,
                currentValue:95000.00,
                currentValueBy : 'Anderson',
                marketValue:125000.00,
                endsIn : '01/03/2017',
                active : false,
                profit : 2.3,
                countVisits : 25,
                countBid : 23,
                fuel : 'Gasolina',
                plate : '0985'
            }
        ];
    $scope.bidHistory =
        [
            {cod : 1, data : "05/01/2016", valor : 22500},
            {cod : 2, data : "06/01/2016", valor : 23000},
            {cod : 3, data : "06/01/2016", valor : 27000},
            {cod : 4, data : "15/01/2016", valor : 32000}
        ]
}
