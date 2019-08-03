/* ****************************************************** */
/*
/* Angular app comunication aplication.
/* 
/* Var @var myVariableApp "Recebe angularModule"	
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
var moduleApp = angular.module('moduleApp', ['ngAnimate', 'ui.router', 'angular-loading-bar'])
.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner  = true;
}]);

moduleApp.run(["$state",function($state){$state.go('index');}]);

// var firebaseConfig = {
//     apiKey: "AIzaSyAewRtwoFBVo1dKW2Cjk4ZjcolWjldDLwI",
//     authDomain: "synchrodelic.firebaseapp.com",
//     databaseURL: "https://synchrodelic.firebaseio.com",
//     projectId: "synchrodelic",
//     storageBucket: "synchrodelic.appspot.com",
//     messagingSenderId: "876948348825",
//     appId: "1:876948348825:web:769fae88e4602371"
//   };
  
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
  