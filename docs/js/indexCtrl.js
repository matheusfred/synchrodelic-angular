/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('indexCtrl', function($scope, $location, $translate, cfpLoadingBar){
    
    $scope.loading = function(btn){
        var btn = btn;
        if($location.$$path == btn){return}
        else{cfpLoadingBar.start();cfpLoadingBar.complete();}
    };

    $scope.loading();

    $scope.statusmenu = 'br';
	$scope.changeStatus = function(newValue){
        cfpLoadingBar.start();
        $scope.statusmenu =  newValue;
        $translate.use(newValue);
        cfpLoadingBar.complete();
    };
    
    $scope.socials =     
        [{
            src: 'img/blog.png',     
            url: 'https://blog.synchrodelic.com',  
            name: 'Blog',
            alt: 'synchrodelic blog'             
        },
        {
            src: 'img/instagram.png',     
            url: 'https://www.instagram.com/synchrodelic/',  
            name: 'Instagram',
            alt: 'synchrodelic instagram' 
        },
        {
            src: 'img/discord.png',     
            url: 'https://discord.gg/NZaMtKj',  
            name: 'Discord',
            alt: 'synchrodelic discord' 
        }];     

    // $http.get('data/posts.json').then(successCallback, errorCallback); 

    // function successCallback(response){
    //     $scope.posts = response.data; 
    // }
    // function errorCallback(){
    //     console.log("Não foi possivel completar essa requisição!");
    // };

});  