'use strict';

app.constant("MODULES_LIST", {
    'DASHBORD_DEFAULT'    : { name:'Dashboard'          , caption:'Dashboard'            , url:'./app/view/dashboard.default.view.html'},
    'ATTENDANCE'          : { name:'Atendimento'        , caption:'Atendimento'          , url:'./app/view/attendance.view.html'},
    'CALENDAR'            : { name:'Atendimento'        , caption:'Agenda'               , url:'./app/view/calendar.view.html'},
    'INDICATOR'           : { name:'Indicadores'        , caption:'Indicadores'          , url:'./app/view/indicator.view.html'},
    'PUBLIC_SALE_PROGRESS': { name:'LeilaoEmAndamento'  , caption:'Leilões em andamento' , url:'./app/view/publicSale.view.html'},
    'PUBLIC_SALE_ACTIVE'  : { name:'LeilaoParticipando' , caption:'Participando'         , url:'./app/view/publicSale.view.html'},
    'PUBLIC_SALE_ADM'     : { name:'publicSaleAdmin'    , caption:'ADM'                  , url:'./app/view/publicSale.admin.view.html'},

});
