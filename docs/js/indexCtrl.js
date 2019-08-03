/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('indexCtrl', function($scope, $http, $timeout, cfpLoadingBar){
    cfpLoadingBar.start();

    // $http.get('data/posts.json').then(successCallback, errorCallback); 

    // function successCallback(response){
    //     $scope.posts = response.data; 
    // }
    // function errorCallback(){
    //     console.log("Não foi possivel completar essa requisição!");
    // };

});  