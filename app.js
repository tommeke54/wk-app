const app = document.getElementById("appContent");

let favoriteTeam =
localStorage.getItem("favoriteTeam") || "België 🇧🇪";

function getCountdown() {

const targetDate =
new Date("2026-06-20T21:00:00");

const now = new Date();

const diff = targetDate - now;

if(diff <= 0){
return "Wedstrijd gestart!";
}

const days =
Math.floor(diff / (1000 * 60 * 60 * 24));

const hours =
Math.floor((diff / (1000 * 60 * 60)) % 24);

const minutes =
Math.floor((diff / (1000 * 60)) % 60);

return `${days}d ${hours}u ${minutes}m`;

}

function setFavorite(team){

favoriteTeam = team;

localStorage.setItem(
"favoriteTeam",
team
);

showHome();

}

function showHome(){

app.innerHTML = `

<div class="card">
<h2>🏆 Home</h2>
Welkom bij WorldCup Live Pro
</div>

<div class="card">
<h2>⚽ Volgende wedstrijd</h2>

🇧🇪 België vs Frankrijk 🇫🇷

<br><br>

📅 20 juni 2026 <br>
🕘 21:00

</div>

<div class="card">
<h2>⏳ Countdown</h2>

${getCountdown()}

</div>

<div class="card">
<h2>⭐ Favoriete ploeg</h2>

${favoriteTeam}

</div>

`;

}

function showMatches(){

app.innerHTML = `

<div class="card match-card">

<h2>⚽ Wedstrijd 1</h2>

🇧🇪 België

<div class="vs">VS</div>

🇫🇷 Frankrijk

<br><br>

📅 20 juni 2026<br>
🕘 21:00<br>
🏟 MetLife Stadium

</div>

<div class="card match-card">

<h2>⚽ Wedstrijd 2</h2>

🇧🇷 Brazilië

<div class="vs">VS</div>

🇯🇵 Japan

<br><br>

📅 21 juni 2026<br>
🕘 18:00<br>
🏟 Estadio Azteca

</div>

`;

}

function showTeams(){

app.innerHTML = `

<div class="card">
<h2>🇧🇪 België</h2>

🏆 FIFA Ranking: Top 10<br>
📌 Groep: Groep A<br>
👔 Bondscoach: Rudi Garcia<br>
📊 Gemiddelde leeftijd: ±27 jaar

<br><br>

⭐ Sterspelers<br><br>

⚽ Kevin De Bruyne<br>
⚽ Romelu Lukaku<br>
⚽ Jérémy Doku<br>
⚽ Youri Tielemans

<br><br>

<button onclick="setFavorite('België 🇧🇪')">
⭐ Favoriet maken
</button>
</div>

<div class="card">
<h2>🇫🇷 Frankrijk</h2>

🏆 FIFA Ranking: Top 5<br>
📌 Groep: Groep A<br>
👔 Bondscoach: Didier Deschamps<br>
📊 Gemiddelde leeftijd: ±26 jaar

<br><br>

⭐ Sterspelers<br><br>

⚽ Kylian Mbappé<br>
⚽ Antoine Griezmann<br>
⚽ Eduardo Camavinga<br>
⚽ Ousmane Dembélé

<br><br>

<button onclick="setFavorite('Frankrijk 🇫🇷')">
⭐ Favoriet maken
</button>
</div>

<div class="card">
<h2>🇧🇷 Brazilië</h2>

🏆 FIFA Ranking: Top 5<br>
📌 Groep: Groep B<br>
👔 Bondscoach: Carlo Ancelotti<br>
📊 Gemiddelde leeftijd: ±26 jaar

<br><br>

⭐ Sterspelers<br><br>

⚽ Vinícius Júnior<br>
⚽ Rodrygo<br>
⚽ Bruno Guimarães<br>
⚽ Marquinhos

<br><br>

<button onclick="setFavorite('Brazilië 🇧🇷')">
⭐ Favoriet maken
</button>
</div>

<div class="card">
<h2>🇩🇪 Duitsland</h2>

🏆 FIFA Ranking: Top 10<br>
📌 Groep: Groep B<br>
👔 Bondscoach: Julian Nagelsmann<br>
📊 Gemiddelde leeftijd: ±27 jaar

<br><br>

⭐ Sterspelers<br><br>

⚽ Jamal Musiala<br>
⚽ Florian Wirtz<br>
⚽ Kai Havertz<br>
⚽ Joshua Kimmich

<br><br>

<button onclick="setFavorite('Duitsland 🇩🇪')">
⭐ Favoriet maken
</button>
</div>

<div class="card">
<h2>🇳🇱 Nederland</h2>

🏆 FIFA Ranking: Top 10<br>
📌 Groep: Groep C<br>
👔 Bondscoach: Ronald Koeman<br>
📊 Gemiddelde leeftijd: ±26 jaar

<br><br>

⭐ Sterspelers<br><br>

⚽ Virgil van Dijk<br>
⚽ Xavi Simons<br>
⚽ Cody Gakpo<br>
⚽ Frenkie de Jong

<br><br>

<button onclick="setFavorite('Nederland 🇳🇱')">
⭐ Favoriet maken
</button>
</div>

`;

}


function showStandings(){

app.innerHTML = `

<div class="card">

<h2>📊 Groep A</h2>

1. België - 6 ptn<br>
2. Frankrijk - 4 ptn<br>
3. Brazilië - 3 ptn<br>
4. Duitslanfunction showStadiums(){

app.innerHTML = `

<div class="card">
<h2>🏟 MetLife Stadium</h2>

📍 East Rutherford, New Jersey<br>
🌍 Verenigde Staten<br>
👥 Capaciteit: ongeveer 82.500<br>
🕒 Lokale tijd: ${new Date().toLocaleTimeString("nl-BE", { timeZone: "America/New_York" })}

<br><br>

Het MetLife Stadium is gepland als stadion voor de WK-finale van 2026.

</div>

<div class="card">
<h2>🏟 Estadio Azteca</h2>

📍 Mexico-Stad<br>
🌍 Mexico<br>
👥 Capaciteit: ongeveer 87.500<br>
🕒 Lokale tijd: ${new Date().toLocaleTimeString("nl-BE", { timeZone: "America/Mexico_City" })}

<br><br>

Een legendarisch stadion waar al meerdere historische WK-wedstrijden gespeeld zijn.

</div>

<div class="card">
<h2>🏟 BC Place</h2>

📍 Vancouver<br>
🌍 Canada<br>
👥 Capaciteit: ongeveer 54.000<br>
🕒 Lokale tijd: ${new Date().toLocaleTimeString("nl-BE", { timeZone: "America/Vancouver" })}

<br><br>

Een modern stadion in Canada, gebruikt voor grote internationale sportevenementen.

</div>

`;

}d - 1 ptn

</div>

`;

}

showHome();
