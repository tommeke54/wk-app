const matchDaysData = [
  {
    day: "Speeldag 1",
    matches: [
      { group:"A", status:"AFGELOPEN", date:"11 juni 2026", timeBE:"21:00", home:"Mexico 🇲🇽", away:"Zuid-Afrika 🇿🇦", score:"2 - 0", stadium:"Mexico City Stadium" },
      { group:"A", status:"AFGELOPEN", date:"12 juni 2026", timeBE:"04:00", home:"Zuid-Korea 🇰🇷", away:"Tsjechië 🇨🇿", score:"2 - 1", stadium:"Guadalajara Stadium" },

      { group:"B", status:"AFGELOPEN", date:"12 juni 2026", timeBE:"21:00", home:"Canada 🇨🇦", away:"Bosnië en Herzegovina 🇧🇦", score:"1 - 1", stadium:"Toronto Stadium" },
      { group:"D", status:"LIVE", date:"13 juni 2026", timeBE:"03:00", home:"Verenigde Staten 🇺🇸", away:"Paraguay 🇵🇾", score:"1 - 0", stadium:"Los Angeles Stadium" },

      { group:"B", status:"GEPLAND", date:"13 juni 2026", timeBE:"21:00", home:"Qatar 🇶🇦", away:"Zwitserland 🇨🇭", score:"VS", stadium:"Nog aan te vullen" },
      { group:"C", status:"GEPLAND", date:"14 juni 2026", timeBE:"00:00", home:"Brazilië 🇧🇷", away:"Marokko 🇲🇦", score:"VS", stadium:"Nog aan te vullen" },
      { group:"C", status:"GEPLAND", date:"14 juni 2026", timeBE:"03:00", home:"Haïti 🇭🇹", away:"Schotland 🏴", score:"VS", stadium:"Boston Stadium" },
      { group:"D", status:"GEPLAND", date:"14 juni 2026", timeBE:"06:00", home:"Australië 🇦🇺", away:"Turkije 🇹🇷", score:"VS", stadium:"Nog aan te vullen" },

      { group:"E", status:"GEPLAND", date:"14 juni 2026", timeBE:"19:00", home:"Duitsland 🇩🇪", away:"Curaçao 🇨🇼", score:"VS", stadium:"Nog aan te vullen" },
      { group:"F", status:"GEPLAND", date:"14 juni 2026", timeBE:"22:00", home:"Nederland 🇳🇱", away:"Japan 🇯🇵", score:"VS", stadium:"Nog aan te vullen" },
      { group:"E", status:"GEPLAND", date:"15 juni 2026", timeBE:"01:00", home:"Ivoorkust 🇨🇮", away:"Ecuador 🇪🇨", score:"VS", stadium:"Nog aan te vullen" },
      { group:"F", status:"GEPLAND", date:"15 juni 2026", timeBE:"04:00", home:"Zweden 🇸🇪", away:"Tunesië 🇹🇳", score:"VS", stadium:"Monterrey Stadium" },

      { group:"H", status:"GEPLAND", date:"15 juni 2026", timeBE:"18:00", home:"Spanje 🇪🇸", away:"Kaapverdië 🇨🇻", score:"VS", stadium:"Atlanta Stadium" },
      { group:"G", status:"GEPLAND", date:"15 juni 2026", timeBE:"21:00", home:"België 🇧🇪", away:"Egypte 🇪🇬", score:"VS", stadium:"Seattle Stadium" },
      { group:"H", status:"GEPLAND", date:"16 juni 2026", timeBE:"00:00", home:"Saudi-Arabië 🇸🇦", away:"Uruguay 🇺🇾", score:"VS", stadium:"Miami Stadium" },
      { group:"G", status:"GEPLAND", date:"16 juni 2026", timeBE:"03:00", home:"Iran 🇮🇷", away:"Nieuw-Zeeland 🇳🇿", score:"VS", stadium:"Los Angeles Stadium" },

      { group:"I", status:"GEPLAND", date:"16 juni 2026", timeBE:"21:00", home:"Frankrijk 🇫🇷", away:"Senegal 🇸🇳", score:"VS", stadium:"New York New Jersey Stadium" },
      { group:"I", status:"GEPLAND", date:"17 juni 2026", timeBE:"00:00", home:"Irak 🇮🇶", away:"Noorwegen 🇳🇴", score:"VS", stadium:"Boston Stadium" },
      { group:"J", status:"GEPLAND", date:"17 juni 2026", timeBE:"03:00", home:"Argentinië 🇦🇷", away:"Algerije 🇩🇿", score:"VS", stadium:"Kansas City Stadium" },
      { group:"J", status:"GEPLAND", date:"17 juni 2026", timeBE:"06:00", home:"Oostenrijk 🇦🇹", away:"Jordanië 🇯🇴", score:"VS", stadium:"San Francisco Bay Area Stadium" },

      { group:"K", status:"GEPLAND", date:"17 juni 2026", timeBE:"19:00", home:"Portugal 🇵🇹", away:"DR Congo 🇨🇩", score:"VS", stadium:"Houston Stadium" },
      { group:"L", status:"GEPLAND", date:"17 juni 2026", timeBE:"22:00", home:"Engeland 🏴", away:"Kroatië 🇭🇷", score:"VS", stadium:"Dallas Stadium" },
      { group:"L", status:"GEPLAND", date:"18 juni 2026", timeBE:"01:00", home:"Ghana 🇬🇭", away:"Panama 🇵🇦", score:"VS", stadium:"Toronto Stadium" },
      { group:"K", status:"GEPLAND", date:"18 juni 2026", timeBE:"04:00", home:"Oezbekistan 🇺🇿", away:"Colombia 🇨🇴", score:"VS", stadium:"Mexico City Stadium" }
    ]
  },

 {
  day: "Speeldag 2",
  matches: [
    { group:"A", status:"GEPLAND", date:"18 juni 2026", timeBE:"18:00", home:"Tsjechië 🇨🇿", away:"Zuid-Afrika 🇿🇦", score:"VS", stadium:"Nog aan te vullen" },
    { group:"B", status:"GEPLAND", date:"18 juni 2026", timeBE:"21:00", home:"Zwitserland 🇨🇭", away:"Bosnië en Herzegovina 🇧🇦", score:"VS", stadium:"Nog aan te vullen" },
    { group:"B", status:"GEPLAND", date:"19 juni 2026", timeBE:"00:00", home:"Canada 🇨🇦", away:"Qatar 🇶🇦", score:"VS", stadium:"Nog aan te vullen" },
    { group:"A", status:"GEPLAND", date:"19 juni 2026", timeBE:"03:00", home:"Mexico 🇲🇽", away:"Zuid-Korea 🇰🇷", score:"VS", stadium:"Nog aan te vullen" },

    { group:"D", status:"GEPLAND", date:"19 juni 2026", timeBE:"21:00", home:"Verenigde Staten 🇺🇸", away:"Australië 🇦🇺", score:"VS", stadium:"Nog aan te vullen" },
    { group:"C", status:"GEPLAND", date:"20 juni 2026", timeBE:"00:00", home:"Schotland 🏴", away:"Marokko 🇲🇦", score:"VS", stadium:"Nog aan te vullen" },
    { group:"C", status:"GEPLAND", date:"20 juni 2026", timeBE:"02:30", home:"Brazilië 🇧🇷", away:"Haïti 🇭🇹", score:"VS", stadium:"Nog aan te vullen" },
    { group:"D", status:"GEPLAND", date:"20 juni 2026", timeBE:"05:00", home:"Turkije 🇹🇷", away:"Paraguay 🇵🇾", score:"VS", stadium:"Nog aan te vullen" },

    { group:"F", status:"GEPLAND", date:"20 juni 2026", timeBE:"19:00", home:"Nederland 🇳🇱", away:"Zweden 🇸🇪", score:"VS", stadium:"Nog aan te vullen" },
    { group:"E", status:"GEPLAND", date:"20 juni 2026", timeBE:"22:00", home:"Duitsland 🇩🇪", away:"Ivoorkust 🇨🇮", score:"VS", stadium:"Nog aan te vullen" },
    { group:"E", status:"GEPLAND", date:"21 juni 2026", timeBE:"02:00", home:"Ecuador 🇪🇨", away:"Curaçao 🇨🇼", score:"VS", stadium:"Nog aan te vullen" },
    { group:"F", status:"GEPLAND", date:"21 juni 2026", timeBE:"06:00", home:"Tunesië 🇹🇳", away:"Japan 🇯🇵", score:"VS", stadium:"Nog aan te vullen" },

    { group:"H", status:"GEPLAND", date:"21 juni 2026", timeBE:"18:00", home:"Spanje 🇪🇸", away:"Saudi-Arabië 🇸🇦", score:"VS", stadium:"Nog aan te vullen" },
    { group:"G", status:"GEPLAND", date:"21 juni 2026", timeBE:"21:00", home:"België 🇧🇪", away:"Iran 🇮🇷", score:"VS", stadium:"New York New Jersey Stadium" },
    { group:"H", status:"GEPLAND", date:"22 juni 2026", timeBE:"00:00", home:"Uruguay 🇺🇾", away:"Kaapverdië 🇨🇻", score:"VS", stadium:"Nog aan te vullen" },
    { group:"G", status:"GEPLAND", date:"22 juni 2026", timeBE:"03:00", home:"Nieuw-Zeeland 🇳🇿", away:"Egypte 🇪🇬", score:"VS", stadium:"Nog aan te vullen" },

    { group:"J", status:"GEPLAND", date:"22 juni 2026", timeBE:"19:00", home:"Argentinië 🇦🇷", away:"Oostenrijk 🇦🇹", score:"VS", stadium:"Nog aan te vullen" },
    { group:"I", status:"GEPLAND", date:"22 juni 2026", timeBE:"23:00", home:"Frankrijk 🇫🇷", away:"Irak 🇮🇶", score:"VS", stadium:"Nog aan te vullen" },
    { group:"I", status:"GEPLAND", date:"23 juni 2026", timeBE:"02:00", home:"Noorwegen 🇳🇴", away:"Senegal 🇸🇳", score:"VS", stadium:"Nog aan te vullen" },
    { group:"J", status:"GEPLAND", date:"23 juni 2026", timeBE:"05:00", home:"Jordanië 🇯🇴", away:"Algerije 🇩🇿", score:"VS", stadium:"Nog aan te vullen" },

    { group:"K", status:"GEPLAND", date:"23 juni 2026", timeBE:"19:00", home:"Portugal 🇵🇹", away:"Oezbekistan 🇺🇿", score:"VS", stadium:"Nog aan te vullen" },
    { group:"L", status:"GEPLAND", date:"23 juni 2026", timeBE:"22:00", home:"Engeland 🏴", away:"Ghana 🇬🇭", score:"VS", stadium:"Nog aan te vullen" },
    { group:"L", status:"GEPLAND", date:"24 juni 2026", timeBE:"01:00", home:"Panama 🇵🇦", away:"Kroatië 🇭🇷", score:"VS", stadium:"Nog aan te vullen" },
    { group:"K", status:"GEPLAND", date:"24 juni 2026", timeBE:"04:00", home:"Colombia 🇨🇴", away:"DR Congo 🇨🇩", score:"VS", stadium:"Nog aan te vullen" }
  ]
},
{
  day: "Speeldag 3",
  matches: [
    { group:"B", status:"GEPLAND", date:"24 juni 2026", timeBE:"21:00", home:"Zwitserland 🇨🇭", away:"Canada 🇨🇦", score:"VS", stadium:"Nog aan te vullen" },
    { group:"B", status:"GEPLAND", date:"24 juni 2026", timeBE:"21:00", home:"Bosnië en Herzegovina 🇧🇦", away:"Qatar 🇶🇦", score:"VS", stadium:"Nog aan te vullen" },

    { group:"C", status:"GEPLAND", date:"25 juni 2026", timeBE:"00:00", home:"Schotland 🏴", away:"Brazilië 🇧🇷", score:"VS", stadium:"Nog aan te vullen" },
    { group:"C", status:"GEPLAND", date:"25 juni 2026", timeBE:"00:00", home:"Marokko 🇲🇦", away:"Haïti 🇭🇹", score:"VS", stadium:"Nog aan te vullen" },

    { group:"A", status:"GEPLAND", date:"25 juni 2026", timeBE:"03:00", home:"Tsjechië 🇨🇿", away:"Mexico 🇲🇽", score:"VS", stadium:"Nog aan te vullen" },
    { group:"A", status:"GEPLAND", date:"25 juni 2026", timeBE:"03:00", home:"Zuid-Afrika 🇿🇦", away:"Zuid-Korea 🇰🇷", score:"VS", stadium:"Nog aan te vullen" },

    { group:"E", status:"GEPLAND", date:"25 juni 2026", timeBE:"22:00", home:"Ecuador 🇪🇨", away:"Duitsland 🇩🇪", score:"VS", stadium:"Nog aan te vullen" },
    { group:"E", status:"GEPLAND", date:"25 juni 2026", timeBE:"22:00", home:"Curaçao 🇨🇼", away:"Ivoorkust 🇨🇮", score:"VS", stadium:"Nog aan te vullen" },

    { group:"F", status:"GEPLAND", date:"26 juni 2026", timeBE:"01:00", home:"Tunesië 🇹🇳", away:"Nederland 🇳🇱", score:"VS", stadium:"Nog aan te vullen" },
    { group:"F", status:"GEPLAND", date:"26 juni 2026", timeBE:"01:00", home:"Japan 🇯🇵", away:"Zweden 🇸🇪", score:"VS", stadium:"Nog aan te vullen" },

    { group:"D", status:"GEPLAND", date:"26 juni 2026", timeBE:"04:00", home:"Turkije 🇹🇷", away:"Verenigde Staten 🇺🇸", score:"VS", stadium:"Nog aan te vullen" },
    { group:"D", status:"GEPLAND", date:"26 juni 2026", timeBE:"04:00", home:"Paraguay 🇵🇾", away:"Australië 🇦🇺", score:"VS", stadium:"Nog aan te vullen" },

    { group:"I", status:"GEPLAND", date:"26 juni 2026", timeBE:"21:00", home:"Noorwegen 🇳🇴", away:"Frankrijk 🇫🇷", score:"VS", stadium:"Nog aan te vullen" },
    { group:"I", status:"GEPLAND", date:"26 juni 2026", timeBE:"21:00", home:"Senegal 🇸🇳", away:"Irak 🇮🇶", score:"VS", stadium:"Nog aan te vullen" },

    { group:"H", status:"GEPLAND", date:"27 juni 2026", timeBE:"02:00", home:"Uruguay 🇺🇾", away:"Spanje 🇪🇸", score:"VS", stadium:"Nog aan te vullen" },
    { group:"H", status:"GEPLAND", date:"27 juni 2026", timeBE:"02:00", home:"Kaapverdië 🇨🇻", away:"Saudi-Arabië 🇸🇦", score:"VS", stadium:"Nog aan te vullen" },

    { group:"G", status:"GEPLAND", date:"27 juni 2026", timeBE:"05:00", home:"Nieuw-Zeeland 🇳🇿", away:"België 🇧🇪", score:"VS", stadium:"Philadelphia Stadium" },
    { group:"G", status:"GEPLAND", date:"27 juni 2026", timeBE:"05:00", home:"Egypte 🇪🇬", away:"Iran 🇮🇷", score:"VS", stadium:"Nog aan te vullen" },

    { group:"L", status:"GEPLAND", date:"27 juni 2026", timeBE:"23:00", home:"Panama 🇵🇦", away:"Engeland 🏴", score:"VS", stadium:"Nog aan te vullen" },
    { group:"L", status:"GEPLAND", date:"27 juni 2026", timeBE:"23:00", home:"Kroatië 🇭🇷", away:"Ghana 🇬🇭", score:"VS", stadium:"Nog aan te vullen" },

    { group:"K", status:"GEPLAND", date:"28 juni 2026", timeBE:"01:30", home:"Colombia 🇨🇴", away:"Portugal 🇵🇹", score:"VS", stadium:"Nog aan te vullen" },
    { group:"K", status:"GEPLAND", date:"28 juni 2026", timeBE:"01:30", home:"DR Congo 🇨🇩", away:"Oezbekistan 🇺🇿", score:"VS", stadium:"Nog aan te vullen" },

    { group:"J", status:"GEPLAND", date:"28 juni 2026", timeBE:"04:00", home:"Jordanië 🇯🇴", away:"Argentinië 🇦🇷", score:"VS", stadium:"Nog aan te vullen" },
    { group:"J", status:"GEPLAND", date:"28 juni 2026", timeBE:"04:00", home:"Algerije 🇩🇿", away:"Oostenrijk 🇦🇹", score:"VS", stadium:"Nog aan te vullen" }
  ]
}
];
