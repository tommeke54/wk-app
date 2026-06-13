const standingsData = [
  {
    group: "A",
    teams: [
      { team: "Mexico 🇲🇽", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "Zuid-Afrika 🇿🇦", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "Zuid-Korea 🇰🇷", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "Tsjechië 🇨🇿", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 }
    ]
  },

  {
    group: "B",
    teams: [
      { team: "Canada 🇨🇦", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "Bosnië en Herzegovina 🇧🇦", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "Qatar 🇶🇦", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "Zwitserland 🇨🇭", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 }
    ]
  },

  {
    group: "C",
    teams: [
      { team: "Brazilië 🇧🇷", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "Marokko 🇲🇦", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "Haïti 🇭🇹", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "Schotland 🏴", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 }
    ]
  ,

  {
    group: "G",
    teams: [
      { team: "België 🇧🇪", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "Egypte 🇪🇬", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "Iran 🇮🇷", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "Nieuw-Zeeland 🇳🇿", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 }
    ]
  },

  {
    group: "H",
    teams: [
      { team: "Spanje 🇪🇸", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "Kaapverdië 🇨🇻", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "Saudi-Arabië 🇸🇦", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "Uruguay 🇺🇾", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 }
    ]
  },

  {
    group: "I",
    teams: [
      { team: "Frankrijk 🇫🇷", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "Senegal 🇸🇳", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "Irak 🇮🇶", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "Noorwegen 🇳🇴", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 }
    ]
  },

  {
    group: "J",
    teams: [
      { team: "Argentinië 🇦🇷", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "Algerije 🇩🇿", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "Oostenrijk 🇦🇹", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "Jordanië 🇯🇴", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 }
    ]
  },

  {
    group: "K",
    teams: [
      { team: "Portugal 🇵🇹", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "DR Congo 🇨🇩", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "Oezbekistan 🇺🇿", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "Colombia 🇨🇴", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 }
    ]
  },

  {
    group: "L",
    teams: [
      { team: "Engeland 🏴", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "Kroatië 🇭🇷", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "Ghana 🇬🇭", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "Panama 🇵🇦", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 }
    ]
  }
];

  {
    group: "D",
    teams: [
      { team: "Verenigde Staten 🇺🇸", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "Paraguay 🇵🇾", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "Australië 🇦🇺", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "Turkije 🇹🇷", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 }
    ]
  },

  {
    group: "E",
    teams: [
      { team: "Duitsland 🇩🇪", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "Curaçao 🇨🇼", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "Ivoorkust 🇨🇮", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "Ecuador 🇪🇨", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 }
    ]
  },

  {
    group: "F",
    teams: [
      { team: "Nederland 🇳🇱", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "Japan 🇯🇵", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "Zweden 🇸🇪", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 },
      { team: "Tunesië 🇹🇳", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 }
    ]
  }
];
