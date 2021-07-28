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
      .state('postdetail', {url:"/post/:postID", templateUrl: "pag/singlepost.html", controller: "postdetailCtrl"})  
      
      // ADMINISTRATION AREA
      .state('admin', {
        url: "/admin",
        templateUrl: 'pag/admin.html',
        controller: 'adminCtrl'
      })  
      .state('dashboard', {
        url: "admin/cms",
        templateUrl: 'pag/dashboard/dashboard.html',
        controller: 'dashboardCtrl',
        params: {
          obj: null
        }
      })
  });