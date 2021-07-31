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

    $scope.openTranslation = function(){

    }

    $scope.loading();
    
    $scope.socials =     
        [{
            src: 'img/twitch.png',     
            url: 'https://www.twitch.tv/synchrodelic',  
            name: 'Twitch',
            alt: 'Synchrodelic Hi-synchedelic'             
        },
        {
            src: 'img/instagram.png',     
            url: 'https://www.instagram.com/synchrodelic/',  
            name: 'Instagram',
            alt: 'synchrodelic instagram' 
        },
        {
            src: 'img/youtube.png',     
            url: 'https://www.youtube.com/channel/UC0RYnTEbL3alGdpFLjihwRg',  
            name: 'Youtube',
            alt: 'synchrodelic chanel' 
        }];     
});  