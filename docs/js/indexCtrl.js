/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('indexCtrl', function($scope, $location, $http){

  const config = {
    apiKey: "AIzaSyA_Pi0skdiVRJb3pDGqC-ADC7SPCuWtWv0",
    authDomain: "edutatto-1530661509405.firebaseapp.com",
    projectId: "edutatto-1530661509405"
  };

  firebase.initializeApp(config);

});  