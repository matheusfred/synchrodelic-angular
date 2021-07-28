/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/* $translate,
/* ****************************************************** */
moduleApp.controller('indexCtrl', function($scope, $location,  cfpLoadingBar ){   
    $scope.loading = function(btn){
        var btn = btn;
        if($location.$$path == btn){return}
        else{cfpLoadingBar.start();cfpLoadingBar.complete();}
    };

    $scope.loading();

    // $scope.statusmenu = 'br';
	// $scope.changeStatus = function(newValue){
    //     cfpLoadingBar.start();
    //     $scope.statusmenu =  newValue;
    //     $translate.use(newValue);
    //     cfpLoadingBar.complete();
    // };
    
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

    // $http.get('data/posts.json').then(successCallback, errorCallback); 

    // function successCallback(response){
    //     $scope.posts = response.data; 
    // }
    // function errorCallback(){
    //     console.log("Não foi possivel completar essa requisição!");
    // };

});  