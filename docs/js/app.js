/* ****************************************************** */
/*
/* Angular app comunication aplication.
/* 
/* Var @var myVariableApp "Recebe angularModule"	
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
// var moduleApp = angular.module('moduleApp', ['ngAnimate','pascalprecht.translate', 'ui.router', 'angular-loading-bar'])

// /* LOADING BAR */
// .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
//     cfpLoadingBarProvider.includeSpinner  = true;
//     cfpLoadingBarProvider.latencyThreshold = 500;
// }]);

// /* TRANSLATE PROVIDE */
// moduleApp.config(['$translateProvider', function ($translateProvider) {
//     $translateProvider.preferredLanguage('br');
//     $translateProvider.useSanitizeValueStrategy('sceParameters');
// }]);

// /* STATE FIXMENT */
// moduleApp.run(["$state",function($state){$state.go('index');}]);

// /* DATABASE */
// const config = {
//   apiKey: "AIzaSyCxM-5uDLdaVeu1DEaH3PwsmPAvfU2jbNo",
//   authDomain: "synchrodelic-bceb6.firebaseapp.com",
//   projectId: "synchrodelic-bceb6",
//   storageBucket: "synchrodelic-bceb6.appspot.com",
//   messagingSenderId: "467161613",
//   appId: "1:467161613:web:6ded2d1d3342a789267b44",
//   measurementId: "G-C6X7XH57R9"

// };

// firebase.initializeApp(config);
// firebase.analytics();

var moduleApp = angular.module('moduleApp', ['ngAnimate', 'pascalprecht.translate', 'ui.router', 'angular-loading-bar'])
.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner  = false;
    cfpLoadingBarProvider.latencyThreshold = 500;
}]);

moduleApp.run(["$state",function($state){$state.go('index');}]);