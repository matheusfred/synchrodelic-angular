moduleApp.config(['$translateProvider', function ($translateProvider) {
  
    $translateProvider.translations('en', {
      'MENU_HOME': 'Home',
      'MENU_ABOUT': 'About',

      'ABOUT_TITTLE': 'About us',
      'ABOUT_SUBTITTLE': 'Synchronizing the culture of Psytrance by interwebs,join to our community do not forget to respect all',
      'ABOUT_BLOG': 'Official Blog: Please go throug in case to comment what ever you want!',
      'ABOUT_INSTAGRAM': 'Follow us on',
      'ABOUT_INSTAGRAM2': 'for news about our community!',
      'ABOUT_DISCORD': 'Being part of ',
      'ABOUT_DISCORD2': 'you got more interaction, tutorials and friendships!',
      'ABOUT_PARTNER': 'More details about our ',
      'ABOUT_PARTNER2': 'and live music at radioSynchro online 24/7!'
    });
   
    $translateProvider.translations('br', {
      'MENU_HOME': 'Inicio',
      'MENU_ABOUT': 'Sobre',

      'ABOUT_TITTLE': 'Sobre nós',
      'ABOUT_SUBTITTLE': 'Sincronizando a cultura e movimento Psytrance pela interwebs, participe de nossa comunidade, seja quem quiser e respeite o próximo.',
      'ABOUT_BLOG': 'Blog oficial: Sinta-se livre para comentar o que quiser!',
      'ABOUT_INSTAGRAM': 'Siga nos no',
      'ABOUT_INSTAGRAM2': 'para todas as novidades de nossa comunidade!',
      'ABOUT_DISCORD': 'Faça parte do nosso',
      'ABOUT_DISCORD2': 'para mais interação, tutoriais e companhia!',
      'ABOUT_PARTNER': 'Mais detalhes sobre a ',
      'ABOUT_PARTNER2': ' e live music em nossa radioSynchro online 24/7!'      
    });
  
  }]);
  