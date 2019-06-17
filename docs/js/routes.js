/* ****************************************************** */
/*
/* Routes aplication config.
/* 
/* Utilizado diretiva uiRouter do AngularJs.     
/* 
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*  Desenvolvido por Ronaldo Machado <>
/*
/* ****************************************************** */
moduleApp.config(function($stateProvider) {
  $stateProvider
    .state('index', {
      url: "",
      templateUrl: "/home.html"
    })   
    .state('about', {
      url: "/about",
      templateUrl: "/about.html"
    })   
    .state('touchdown', {
      url: "/touchdown",
      templateUrl: "/touchdown.html"
    })   
    .state('discography', {
      url: "/discography",
      templateUrl: "/discography.html"
    })   
});