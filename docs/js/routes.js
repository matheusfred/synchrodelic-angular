/* ****************************************************** */
/*
/* Routes aplication config.
/* 
/* Utilizado diretiva uiRouter do AngularJs.     
/* 
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*  Desenvolvido por Ronaldo Machado <ronaldov8318@gmail.com>
/*
/* ****************************************************** */
moduleApp.config(function($stateProvider) {
    $stateProvider
      .state('index', {url:"", templateUrl: "pag/home.html"})
      .state('about', {url:"/about", templateUrl: "pag/about.html"})    
      .state('tickets', {url:"/tickets", templateUrl: "pag/tickets.html"}) 
  });