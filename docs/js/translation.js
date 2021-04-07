moduleApp.config(['$translateProvider', function ($translateProvider) {
  
    $translateProvider.translations('en', {
      'MENU_HOME': 'Home',
      'MENU_ABOUT': 'About',
      'RELEASE': 'Release',

      'ABOUT_TITTLE': 'About us',
      'ABOUT_SUBTITTLE': 'Synchronizing the culture of psytrance',
      'ABOUT_INSTAGRAM': 'Follow us on',
      'ABOUT_INSTAGRAM2': 'for news!',
      'ABOUT_DISCORD': 'Being part of ',
      'ABOUT_DISCORD2': 'you got more information and be always updated!',
      'ABOUT_PARTNER': 'More details about our ',
      'ABOUT_PARTNER2': 'and live music on twitch!'
    });
   
    $translateProvider.translations('br', {
      'MENU_HOME': 'Inicio',
      'MENU_ABOUT': 'Sobre',
      'RELEASE': 'Highlights',

      'ABOUT_TITTLE': 'Sobre nós',
      'ABOUT_SUBTITTLE': 'Sincronizando a cultura psytrance.',
      'ABOUT_INSTAGRAM': 'Siga no',
      'ABOUT_INSTAGRAM2': 'para as novidades!',
      'ABOUT_DISCORD': 'Faça parte do nosso',
      'ABOUT_DISCORD2': 'para mais interação!',
      'ABOUT_PARTNER': 'Mais detalhes sobre a ',
      'ABOUT_PARTNER2': ' e artist spotlight em nossa twitch!'      
    });

    $translateProvider.preferredLanguage('br');
    $translateProvider.useSanitizeValueStrategy('sceParameters');  
  
  }]);
  