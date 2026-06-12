const teamsData = [
  // GROEP A
  { group: "A", name: "Mexico", flag: "🇲🇽", code: "mx", coach: "Nog aan te vullen", stars: ["Nog aan te vullen"] },
  { group: "A", name: "Zuid-Korea", flag: "🇰🇷", code: "kr", coach: "Nog aan te vullen", stars: ["Nog aan te vullen"] },
  { group: "A", name: "Tsjechië", flag: "🇨🇿", code: "cz", coach: "Nog aan te vullen", stars: ["Nog aan te vullen"] },
  { group: "A", name: "Zuid-Afrika", flag: "🇿🇦", code: "za", coach: "Nog aan te vullen", stars: ["Nog aan te vullen"] },

  // GROEP B
  { group: "B", name: "Canada", flag: "🇨🇦", code: "ca", coach: "Nog aan te vullen", stars: ["Nog aan te vullen"] },
  { group: "B", name: "Bosnië en Herzegovina", flag: "🇧🇦", code: "ba", coach: "Nog aan te vullen", stars: ["Nog aan te vullen"] },
  { group: "B", name: "Qatar", flag: "🇶🇦", code: "qa", coach: "Nog aan te vullen", stars: ["Nog aan te vullen"] },
  { group: "B", name: "Zwitserland", flag: "🇨🇭", code: "ch", coach: "Nog aan te vullen", stars: ["Nog aan te vullen"] },

  // GROEP C
  { group: "C", name: "Brazilië", flag: "🇧🇷", code: "br", coach: "Carlo Ancelotti", stars: ["Vinícius Júnior", "Rodrygo", "Bruno Guimarães"] },
  { group: "C", name: "Marokko", flag: "🇲🇦", code: "ma", coach: "Nog aan te vullen", stars: ["Achraf Hakimi", "Hakim Ziyech"] },
  { group: "C", name: "Haïti", flag: "🇭🇹", code: "ht", coach: "Nog aan te vullen", stars: ["Nog aan te vullen"] },
  { group: "C", name: "Schotland", flag: "🏴", code: "gb-sct", coach: "Nog aan te vullen", stars: ["Scott McTominay", "Andy Robertson"] },

  // GROEP D
  { group: "D", name: "Verenigde Staten", flag: "🇺🇸", code: "us", coach: "Nog aan te vullen", stars: ["Christian Pulisic"] },
  { group: "D", name: "Paraguay", flag: "🇵🇾", code: "py", coach: "Nog aan te vullen", stars: ["Nog aan te vullen"] },
  { group: "D", name: "Australië", flag: "🇦🇺", code: "au", coach: "Nog aan te vullen", stars: ["Nog aan te vullen"] },
  { group: "D", name: "Turkije", flag: "🇹🇷", code: "tr", coach: "Nog aan te vullen", stars: ["Hakan Çalhanoğlu", "Arda Güler"] },

  // GROEP E
  { group: "E", name: "Duitsland", flag: "🇩🇪", code: "de", coach: "Julian Nagelsmann", stars: ["Jamal Musiala", "Florian Wirtz", "Joshua Kimmich"] },
  { group: "E", name: "Curaçao", flag: "🇨🇼", code: "cw", coach: "Nog aan te vullen", stars: ["Nog aan te vullen"] },
  { group: "E", name: "Ivoorkust", flag: "🇨🇮", code: "ci", coach: "Nog aan te vullen", stars: ["Sébastien Haller"] },
  { group: "E", name: "Ecuador", flag: "🇪🇨", code: "ec", coach: "Nog aan te vullen", stars: ["Moisés Caicedo"] },

  // GROEP F
  { group: "F", name: "Nederland", flag: "🇳🇱", code: "nl", coach: "Ronald Koeman", stars: ["Virgil van Dijk", "Frenkie de Jong", "Cody Gakpo"] },
  { group: "F", name: "Japan", flag: "🇯🇵", code: "jp", coach: "Nog aan te vullen", stars: ["Takefusa Kubo", "Kaoru Mitoma"] },
  { group: "F", name: "Zweden", flag: "🇸🇪", code: "se", coach: "Nog aan te vullen", stars: ["Viktor Gyökeres", "Alexander Isak"] },
  { group: "F", name: "Tunesië", flag: "🇹🇳", code: "tn", coach: "Nog aan te vullen", stars: ["Nog aan te vullen"] },

  // GROEP G
  { group: "G", name: "België", flag: "🇧🇪", code: "be", coach: "Rudi Garcia", stars: ["Kevin De Bruyne", "Romelu Lukaku", "Jérémy Doku", "Thibaut Courtois"] },
  { group: "G", name: "Egypte", flag: "🇪🇬", code: "eg", coach: "Nog aan te vullen", stars: ["Mohamed Salah"] },
  { group: "G", name: "Iran", flag: "🇮🇷", code: "ir", coach: "Nog aan te vullen", stars: ["Mehdi Taremi"] },
  { group: "G", name: "Nieuw-Zeeland", flag: "🇳🇿", code: "nz", coach: "Nog aan te vullen", stars: ["Chris Wood"] },

  // GROEP H
  { group: "H", name: "Spanje", flag: "🇪🇸", code: "es", coach: "Luis de la Fuente", stars: ["Rodri", "Pedri", "Lamine Yamal", "Nico Williams"] },
  { group: "H", name: "Kaapverdië", flag: "🇨🇻", code: "cv", coach: "Nog aan te vullen", stars: ["Nog aan te vullen"] },
  { group: "H", name: "Saudi-Arabië", flag: "🇸🇦", code: "sa", coach: "Nog aan te vullen", stars: ["Nog aan te vullen"] },
  { group: "H", name: "Uruguay", flag: "🇺🇾", code: "uy", coach: "Nog aan te vullen", stars: ["Federico Valverde", "Darwin Núñez"] },

  // GROEP I
  { group: "I", name: "Frankrijk", flag: "🇫🇷", code: "fr", coach: "Didier Deschamps", stars: ["Kylian Mbappé", "Antoine Griezmann", "Eduardo Camavinga"] },
  { group: "I", name: "Senegal", flag: "🇸🇳", code: "sn", coach: "Nog aan te vullen", stars: ["Sadio Mané"] },
  { group: "I", name: "Irak", flag: "🇮🇶", code: "iq", coach: "Nog aan te vullen", stars: ["Nog aan te vullen"] },
  { group: "I", name: "Noorwegen", flag: "🇳🇴", code: "no", coach: "Nog aan te vullen", stars: ["Erling Haaland", "Martin Ødegaard"] },

  // GROEP J
  { group: "J", name: "Argentinië", flag: "🇦🇷", code: "ar", coach: "Lionel Scaloni", stars: ["Lionel Messi", "Lautaro Martínez", "Julián Álvarez"] },
  { group: "J", name: "Algerije", flag: "🇩🇿", code: "dz", coach: "Nog aan te vullen", stars: ["Riyad Mahrez"] },
  { group: "J", name: "Oostenrijk", flag: "🇦🇹", code: "at", coach: "Nog aan te vullen", stars: ["David Alaba", "Marcel Sabitzer"] },
  { group: "J", name: "Jordanië", flag: "🇯🇴", code: "jo", coach: "Nog aan te vullen", stars: ["Nog aan te vullen"] },

  // GROEP K
  { group: "K", name: "Portugal", flag: "🇵🇹", code: "pt", coach: "Nog aan te vullen", stars: ["Cristiano Ronaldo", "Bruno Fernandes", "Bernardo Silva"] },
  { group: "K", name: "DR Congo", flag: "🇨🇩", code: "cd", coach: "Nog aan te vullen", stars: ["Nog aan te vullen"] },
  { group: "K", name: "Oezbekistan", flag: "🇺🇿", code: "uz", coach: "Nog aan te vullen", stars: ["Nog aan te vullen"] },
  { group: "K", name: "Colombia", flag: "🇨🇴", code: "co", coach: "Nog aan te vullen", stars: ["Luis Díaz", "James Rodríguez"] },

  // GROEP L
  { group: "L", name: "Engeland", flag: "🏴", code: "gb-eng", coach: "Thomas Tuchel", stars: ["Harry Kane", "Jude Bellingham", "Bukayo Saka"] },
  { group: "L", name: "Kroatië", flag: "🇭🇷", code: "hr", coach: "Nog aan te vullen", stars: ["Luka Modrić", "Joško Gvardiol"] },
  { group: "L", name: "Ghana", flag: "🇬🇭", code: "gh", coach: "Nog aan te vullen", stars: ["Mohammed Kudus"] },
  { group: "L", name: "Panama", flag: "🇵🇦", code: "pa", coach: "Nog aan te vullen", stars: ["Nog aan te vullen"] }
];
