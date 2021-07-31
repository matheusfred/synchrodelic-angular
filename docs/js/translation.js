moduleApp.config(['$translateProvider', function ($translateProvider) {
  
    $translateProvider.translations('en', {
      'MENU_TICKETS': 'Buy Tickets',
      'HOME_TITTLE': 'Synchronizing psytrance in Florida',
      'ABOUT_TITTLE': 'About us',
      
      'ABOUT_SUBTITTLE': 'Synchronizing the culture of psytrance',
      'HOME_SUBTITTLE': 'Description about our festival'
    });
   
    $translateProvider.translations('br', {
      'MENU_TICKETS': 'Ingressos',
      'HOME_TITTLE': 'Synchronizando psytrance na Florida',
      'ABOUT_TITTLE': 'Sobre nós',
      
      'ABOUT_SUBTITTLE': 'Sincronizando a cultura psytrance.',
      'HOME_SUBTITTLE': 'Descricao do festival'    
    });

    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('sceParameters');  
  
  }]);
  