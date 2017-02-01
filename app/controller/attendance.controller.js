'use strict';

app.controller('attendance',attendance);

attendance.$inject = ['$rootScope'];

function attendance($scope) {
	$scope.changeForRegisterWizard = changeForRegisterWizard;

    function changeForRegisterWizard(){
        $scope.registerWizard = !$scope.registerWizard;
	}

	$scope.attendanceList = [
		{
			id : 1,
			name : "",
			description : "Seu Cliente XXX, está de aniversário, de os parabés a ele.",
			detail : "Vendedor - CARLOS",
			status : "urgent",
			iconClass : "mdi-communication-call"
			
		},
		{
			id : 2,
			name : "",
			description : "Seu Cliente XXX, gosta de BIKE, envie para ele nossos RACKS.",
			detail : "Vendedor - DENNER",
			status : "urgent",
			iconClass : "mdi-communication-email"
			
		},
		{
			id : 3,
			name : "",
			description : "Veja nosso novo comercial",
			detail : null,
			status : null,
            iconClass : "mdi-hardware-tv"
			
		}
	
	];
	
	$scope.taskList = [
		{
			id : 1,
			hour : "15:30",
			task : "Ligar para Jose",
			description : "Cliente XXX, interesse em CITY",
			status : null,
            iconClass : "mdi-social-person",
			icons : ['mdi-communication-forum','mdi-maps-directions-car','mdi-action-event']
			
		},
		{
			id : 2,
			hour : "15:45",
			task : "Ligar para Marcos",
			description : "Cliente YYY, interesse em FIT",
			status : null,
            iconClass : "mdi-social-person",
            icons : ['mdi-maps-directions-car','mdi-action-event']
			
		},		
		{
			id : 3,
			hour : "16:00",
			task : "Demostração para o Robert",
			description : "Cliente ZZZ, interesse em CIVIC",
			status : null,
            iconClass : "mdi-communication-textsms",
            icons : ['fa fa-wheelchair','mdi-action-event']
			
		}
	];

	$scope.displayInfoList = [
		{caption : "Atendimentos", value : 12},
		{caption : "Chamados", value : 9},
		{caption : "Em fila", value : 4},
		{caption : "Encaminhados", value : 7},
		{caption : "Ligações", value : 22},	
		{caption : "Test Driver", value : 5},	
	]
}
