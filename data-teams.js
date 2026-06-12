const teamsData = [
  { group:"A", name:"Mexico", flag:"🇲🇽", code:"mx", coach:"Nog aan te vullen", stars:[] },
  { group:"A", name:"Zuid-Afrika", flag:"🇿🇦", code:"za", coach:"Nog aan te vullen", stars:[] },
  { group:"A", name:"Zuid-Korea", flag:"🇰🇷", code:"kr", coach:"Nog aan te vullen", stars:[] },
  { group:"A", name:"Tsjechië", flag:"🇨🇿", code:"cz", coach:"Nog aan te vullen", stars:[] },

  { group:"B", name:"Canada", flag:"🇨🇦", code:"ca", coach:"Nog aan te vullen", stars:[] },
  { group:"B", name:"Zwitserland", flag:"🇨🇭", code:"ch", coach:"Nog aan te vullen", stars:[] },
  { group:"B", name:"Qatar", flag:"🇶🇦", code:"qa", coach:"Nog aan te vullen", stars:[] },
  { group:"B", name:"Bosnië en Herzegovina", flag:"🇧🇦", code:"ba", coach:"Nog aan te vullen", stars:[] },

  { group:"C", name:"Brazilië", flag:"🇧🇷", code:"br", coach:"Nog aan te vullen", stars:["Vinícius Júnior","Rodrygo"] },
  { group:"C", name:"Marokko", flag:"🇲🇦", code:"ma", coach:"Nog aan te vullen", stars:[] },
  { group:"C", name:"Haïti", flag:"🇭🇹", code:"ht", coach:"Nog aan te vullen", stars:[] },
  { group:"C", name:"Schotland", flag:"🏴", code:"gb-sct", coach:"Nog aan te vullen", stars:[] },

  { group:"D", name:"Verenigde Staten", flag:"🇺🇸", code:"us", coach:"Nog aan te vullen", stars:[] },
  { group:"D", name:"Paraguay", flag:"🇵🇾", code:"py", coach:"Nog aan te vullen", stars:[] },
  { group:"D", name:"Australië", flag:"🇦🇺", code:"au", coach:"Nog aan te vullen", stars:[] },
  { group:"D", name:"Turkije", flag:"🇹🇷", code:"tr", coach:"Nog aan te vullen", stars:[] },

  { group:"E", name:"Duitsland", flag:"🇩🇪", code:"de", coach:"Nog aan te vullen", stars:["Jamal Musiala","Florian Wirtz"] },
  { group:"E", name:"Curaçao", flag:"🇨🇼", code:"cw", coach:"Nog aan te vullen", stars:[] },
  { group:"E", name:"Ivoorkust", flag:"🇨🇮", code:"ci", coach:"Nog aan te vullen", stars:[] },
  { group:"E", name:"Ecuador", flag:"🇪🇨", code:"ec", coach:"Nog aan te vullen", stars:[] },

  { group:"F", name:"Nederland", flag:"🇳🇱", code:"nl", coach:"Nog aan te vullen", stars:["Virgil van Dijk","Frenkie de Jong"] },
  { group:"F", name:"Japan", flag:"🇯🇵", code:"jp", coach:"Nog aan te vullen", stars:[] },
  { group:"F", name:"Zweden", flag:"🇸🇪", code:"se", coach:"Nog aan te vullen", stars:[] },
  { group:"F", name:"Tunesië", flag:"🇹🇳", code:"tn", coach:"Nog aan te vullen", stars:[] },

  { group:"G", name:"België", flag:"🇧🇪", code:"be", coach:"Nog aan te vullen", stars:["Kevin De Bruyne","Romelu Lukaku","Jérémy Doku"] },
  { group:"G", name:"Egypte", flag:"🇪🇬", code:"eg", coach:"Nog aan te vullen", stars:[] },
  { group:"G", name:"Iran", flag:"🇮🇷", code:"ir", coach:"Nog aan te vullen", stars:[] },
  { group:"G", name:"Nieuw-Zeeland", flag:"🇳🇿", code:"nz", coach:"Nog aan te vullen", stars:[] },

  { group:"H", name:"Spanje", flag:"🇪🇸", code:"es", coach:"Nog aan te vullen", stars:["Rodri","Pedri","Lamine Yamal"] },
  { group:"H", name:"Kaapverdië", flag:"🇨🇻", code:"cv", coach:"Nog aan te vullen", stars:[] },
  { group:"H", name:"Saudi-Arabië", flag:"🇸🇦", code:"sa", coach:"Nog aan te vullen", stars:[] },
  { group:"H", name:"Uruguay", flag:"🇺🇾", code:"uy", coach:"Nog aan te vullen", stars:[] },

  { group:"I", name:"Frankrijk", flag:"🇫🇷", code:"fr", coach:"Nog aan te vullen", stars:["Kylian Mbappé","Antoine Griezmann"] },
  { group:"I", name:"Senegal", flag:"🇸🇳", code:"sn", coach:"Nog aan te vullen", stars:[] },
  { group:"I", name:"Irak", flag:"🇮🇶", code:"iq", coach:"Nog aan te vullen", stars:[] },
  { group:"I", name:"Noorwegen", flag:"🇳🇴", code:"no", coach:"Nog aan te vullen", stars:["Erling Haaland","Martin Ødegaard"] },

  { group:"J", name:"Argentinië", flag:"🇦🇷", code:"ar", coach:"Nog aan te vullen", stars:["Lionel Messi","Lautaro Martínez"] },
  { group:"J", name:"Algerije", flag:"🇩🇿", code:"dz", coach:"Nog aan te vullen", stars:[] },
  { group:"J", name:"Oostenrijk", flag:"🇦🇹", code:"at", coach:"Nog aan te vullen", stars:[] },
  { group:"J", name:"Jordanië", flag:"🇯🇴", code:"jo", coach:"Nog aan te vullen", stars:[] },

  { group:"K", name:"Portugal", flag:"🇵🇹", code:"pt", coach:"Nog aan te vullen", stars:["Cristiano Ronaldo","Bruno Fernandes"] },
  { group:"K", name:"Colombia", flag:"🇨🇴", code:"co", coach:"Nog aan te vullen", stars:[] },
  { group:"K", name:"DR Congo", flag:"🇨🇩", code:"cd", coach:"Nog aan te vullen", stars:[] },
  { group:"K", name:"Oezbekistan", flag:"🇺🇿", code:"uz", coach:"Nog aan te vullen", stars:[] },

  { group:"L", name:"Engeland", flag:"🏴", code:"gb-eng", coach:"Nog aan te vullen", stars:["Harry Kane","Jude Bellingham"] },
  { group:"L", name:"Kroatië", flag:"🇭🇷", code:"hr", coach:"Nog aan te vullen", stars:[] },
  { group:"L", name:"Ghana", flag:"🇬🇭", code:"gh", coach:"Nog aan te vullen", stars:[] },
  { group:"L", name:"Panama", flag:"🇵🇦", code:"pa", coach:"Nog aan te vullen", stars:[] }
];
