/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/* 
/* ****************************************************** */
moduleApp.controller('indexCtrl', function($scope, $location, $translate, cfpLoadingBar ){   
    $scope.statusmenu = $location.$$path;
    $scope.statusLanguage = 'en';

    $scope.loading = function(btn){ 
        if(btn != undefined){    
            $scope.statusmenu =  btn;
        }
        if($location.$$path == btn){
            return
        } else {
            cfpLoadingBar.start();
            cfpLoadingBar.complete();
        }
    };

	$scope.changeStatus = function(){
        cfpLoadingBar.start();

        if($scope.statusLanguage == 'en'){
            $scope.statusLanguage = 'br'
            $translate.use('br');
        }
        else {$translate.use('en');$scope.statusLanguage = 'en'}

        cfpLoadingBar.complete();
    };

    $scope.loading();  
});  