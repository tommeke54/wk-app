const playersData = [

  // BELGIË
{
  country: "België",
  
 players: [
  {
    name: "Kevin De Bruyne",
    number: 7,
    age: 34,
    position: "Middenvelder",
    club: "Manchester City",
    foot: "Rechts",
    role: "Spelmaker",
    star: true,
    description: "Creatieve middenvelder en leider van de Rode Duivels."
  },
      {
        name: "Romelu Lukaku",
        number: 10,
        age: 33,
        position: "Aanvaller",
        club: "Napoli",
        star: true
      },
      {
        name: "Jérémy Doku",
        number: 22,
        age: 24,
        position: "Vleugelspeler",
        club: "Manchester City",
        star: true
      },
      {
        name: "Thibaut Courtois",
        number: 1,
        age: 34,
        position: "Doelman",
        club: "Real Madrid",
        star: true
      }
  ,
{
  name: "Youri Tielemans",
  number: 8,
  age: 29,
  position: "Middenvelder",
  club: "Aston Villa",
  foot: "Rechts",
  role: "Controleur",
  star: true,
  description: "Technische middenvelder met een uitstekend schot."
},
{
  name: "Loïs Openda",
  number: 9,
  age: 26,
  position: "Aanvaller",
  club: "RB Leipzig",
  foot: "Rechts",
  role: "Diepgang",
  star: false,
  description: "Snelle spits met veel snelheid achter de verdediging."
},
{
  name: "Leandro Trossard",
  number: 11,
  age: 31,
  position: "Aanvaller",
  club: "Arsenal",
  foot: "Rechts",
  role: "Creatieve aanvaller",
  star: true,
  description: "Veelzijdige aanvaller met techniek en ervaring."
},
{
  name: "Amadou Onana",
  number: 24,
  age: 24,
  position: "Middenvelder",
  club: "Aston Villa",
  foot: "Rechts",
  role: "Balveroveraar",
  star: false,
  description: "Fysiek sterke middenvelder met veel loopvermogen."
},
{
  name: "Wout Faes",
  number: 4,
  age: 28,
  position: "Verdediger",
  club: "Leicester City",
  foot: "Rechts",
  role: "Centrale verdediger",
  star: false,
  description: "Sterke verdediger en vaste waarde achterin."
},
{
  name: "Arthur Theate",
  number: 3,
  age: 25,
  position: "Verdediger",
  club: "Eintracht Frankfurt",
  foot: "Links",
  role: "Linker verdediger",
  star: false,
  description: "Moderne verdediger met aanvallende kwaliteiten."
} 
,
{
  name: "Zeno Debast",
  number: 2,
  age: 22,
  position: "Verdediger",
  club: "Sporting CP",
  foot: "Rechts",
  role: "Opbouwende verdediger",
  star: false,
  description: "Jonge centrale verdediger met een goede passing."
},
{
  name: "Timothy Castagne",
  number: 21,
  age: 30,
  position: "Verdediger",
  club: "Fulham",
  foot: "Rechts",
  role: "Wingback",
  star: false,
  description: "Veelzijdige flankverdediger met veel ervaring."
},
{
  name: "Dodi Lukebakio",
  number: 14,
  age: 28,
  position: "Vleugelspeler",
  club: "Sevilla",
  foot: "Links",
  role: "Dribbelaar",
  star: false,
  description: "Snelle aanvaller met een sterk één-tegen-één spel."
},
{
  name: "Johan Bakayoko",
  number: 19,
  age: 22,
  position: "Vleugelspeler",
  club: "PSV",
  foot: "Links",
  role: "Aanvallende flankspeler",
  star: false,
  description: "Technische vleugelspeler met veel snelheid."
},
{
  name: "Matz Sels",
  number: 13,
  age: 33,
  position: "Doelman",
  club: "Nottingham Forest",
  foot: "Rechts",
  role: "Reservekeeper",
  star: false,
  description: "Ervaren doelman en betrouwbare back-up."
}
,
{
  name: "Koen Casteels",
  number: 12,
  age: 33,
  position: "Doelman",
  club: "Al-Qadsiah",
  foot: "Rechts",
  role: "Doelman",
  star: false,
  description: "Ervaren keeper met sterke reflexen."
},
{
  name: "Thomas Meunier",
  number: 15,
  age: 34,
  position: "Verdediger",
  club: "Lille",
  foot: "Rechts",
  role: "Wingback",
  star: false,
  description: "Ervaren rechtsback met aanvallende impulsen."
},
{
  name: "Yannick Carrasco",
  number: 23,
  age: 32,
  position: "Vleugelspeler",
  club: "Al-Shabab",
  foot: "Links",
  role: "Aanvallende flankspeler",
  star: false,
  description: "Snelle en technische vleugelspeler."
},
{
  name: "Orel Mangala",
  number: 18,
  age: 27,
  position: "Middenvelder",
  club: "Lyon",
  foot: "Rechts",
  role: "Box-to-box",
  star: false,
  description: "Dynamische middenvelder met veel energie."
},
{
  name: "Aster Vranckx",
  number: 16,
  age: 23,
  position: "Middenvelder",
  club: "Wolfsburg",
  foot: "Rechts",
  role: "Controleur",
  star: false,
  description: "Talentvolle middenvelder met veel potentieel."
},
{
  name: "Charles De Ketelaere",
  number: 17,
  age: 25,
  position: "Aanvaller",
  club: "Atalanta",
  foot: "Links",
  role: "Aanvallende middenvelder",
  star: true,
  description: "Creatieve aanvaller met techniek en inzicht."
},
{
  name: "Malick Fofana",
  number: 20,
  age: 20,
  position: "Vleugelspeler",
  club: "Lyon",
  foot: "Rechts",
  role: "Jong talent",
  star: false,
  description: "Veelbelovende aanvaller met snelheid."
},
{
  name: "Arthur Vermeeren",
  number: 6,
  age: 20,
  position: "Middenvelder",
  club: "RB Leipzig",
  foot: "Rechts",
  role: "Spelverdeler",
  star: false,
  description: "Jonge middenvelder met uitstekend overzicht."
}
 ]
  },

  // FRANKRIJK
  {
    country: "Frankrijk",
    players: [
      { name: "Kylian Mbappé", position: "Aanvaller", club: "Real Madrid" },
      { name: "Ousmane Dembélé", position: "Vleugelspeler", club: "PSG" },
      { name: "Eduardo Camavinga", position: "Middenvelder", club: "Real Madrid" },
      { name: "Antoine Griezmann", position: "Aanvaller", club: "Atlético Madrid" }
    ]
  },

  // BRAZILIË
  {
    country: "Brazilië",
    players: [
      { name: "Vinícius Júnior", position: "Vleugelspeler", club: "Real Madrid" },
      { name: "Rodrygo", position: "Aanvaller", club: "Real Madrid" },
      { name: "Bruno Guimarães", position: "Middenvelder", club: "Newcastle United" },
      { name: "Marquinhos", position: "Verdediger", club: "PSG" }
    ]
  },

  // DUITSLAND
  {
    country: "Duitsland",
    players: [
      { name: "Jamal Musiala", position: "Middenvelder", club: "Bayern München" },
      { name: "Florian Wirtz", position: "Middenvelder", club: "Bayer Leverkusen" },
      { name: "Joshua Kimmich", position: "Middenvelder", club: "Bayern München" },
      { name: "Kai Havertz", position: "Aanvaller", club: "Arsenal" }
    ]
  },

  // NEDERLAND
  {
    country: "Nederland",
    players: [
      { name: "Virgil van Dijk", position: "Verdediger", club: "Liverpool" },
      { name: "Frenkie de Jong", position: "Middenvelder", club: "FC Barcelona" },
      { name: "Cody Gakpo", position: "Aanvaller", club: "Liverpool" },
      { name: "Xavi Simons", position: "Middenvelder", club: "RB Leipzig" }
    ]
  },

  // SPANJE
  {
    country: "Spanje",
    players: [
      { name: "Rodri", position: "Middenvelder", club: "Manchester City" },
      { name: "Pedri", position: "Middenvelder", club: "FC Barcelona" },
      { name: "Lamine Yamal", position: "Vleugelspeler", club: "FC Barcelona" },
      { name: "Nico Williams", position: "Vleugelspeler", club: "Athletic Club" }
    ]
  },

  // ARGENTINIË
  {
    country: "Argentinië",
    players: [
      { name: "Lionel Messi", position: "Aanvaller", club: "Inter Miami" },
      { name: "Lautaro Martínez", position: "Aanvaller", club: "Inter Milan" },
      { name: "Julián Álvarez", position: "Aanvaller", club: "Atlético Madrid" },
      { name: "Emiliano Martínez", position: "Doelman", club: "Aston Villa" }
    ]
  }

];
