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
      
      'HOME_SUBTITTLE': 'Syncrodelic Festival e um evento não lucrativo com fins de expandir a cultura psicodélica na Florida, nosso  evento e feito em uma ilha adotada pela nossa crew denominada Spoil Island. Acreditamos que a natureza e música andam lado a lado  e por isso que cuidamos e pedimos para as pessoas que comparecerem nesse evento curtam com responsabilidade mantendo a ilha sempre limpa e respeitando ao máximo o ambiente, as pessoas e a cultura local.',
      'ABOUT_SUBTITTLE': 'Arte, Cultura, Ecologia e Música é tudo que acreditmos! Somos uma crew de origem brasileira e criamos eventos multiculturais com atividades artísticas, artesanais, músicais, e levamos nosso público a explorar os conceitos de uma comunidade alternativa, que busca paz, amor, união, respeito e psycodelia através da música.'    
    });

    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('sceParameters');  
  
  }]);
  