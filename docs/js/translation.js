moduleApp.config(['$translateProvider', function ($translateProvider) {
  
    $translateProvider.translations('en', {
      'MENU_TICKETS': 'Buy Tickets',
      'ABOUT_TITTLE': 'About us',
      
      'ABOUT_SUBTITTLE': 'Synchronizing the culture of psytrance'
    });
   
    $translateProvider.translations('br', {
      'MENU_TICKETS': 'Ingressos',
      'ABOUT_TITTLE': 'Sobre nós',
      
      'ABOUT_SUBTITTLE': 'Sincronizando a cultura psytrance.'    
    });

    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('sceParameters');  
  
  }]);
  