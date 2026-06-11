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

function showHome() {

app.innerHTML = `

<div class="card">
<h2>🏆 Home</h2>
Welkom bij WorldCup Live Pro
</div>

<div class="card">
<h2>⚽ Volgende wedstrijd</h2>
België 🇧🇪 vs Frankrijk 🇫🇷
<br><br>
20 juni 2026 - 21:00
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

function showMatches() {

app.innerHTML = `

<div class="card">
<h2>⚽ Wedstrijden</h2>

🇧🇪 België vs Frankrijk 🇫🇷
<br><br>

🇧🇷 Brazilië vs Japan 🇯🇵
<br><br>

🇩🇪 Duitsland vs Spanje 🇪🇸

</div>

`;

}

function showTeams() {

app.innerHTML = `

<div class="card">
<h2>🇧🇪 België</h2>

Bondscoach: Rudi Garcia

<br><br>

<button onclick="setFavorite('België 🇧🇪')">
Favoriet maken
</button>

</div>

<div class="card">
<h2>🇫🇷 Frankrijk</h2>

Bondscoach: Didier Deschamps

<br><br>

<button onclick="setFavorite('Frankrijk 🇫🇷')">
Favoriet maken
</button>

</div>

<div class="card">
<h2>🇧🇷 Brazilië</h2>

Bondscoach: Carlo Ancelotti

<br><br>

<button onclick="setFavorite('Brazilië 🇧🇷')">
Favoriet maken
</button>

</div>

`;

}

function showStadiums() {

app.innerHTML = `

<div class="card">
<h2>🏟 MetLife Stadium</h2>

📍 New Jersey, USA

<br><br>

Capaciteit:
82.500

</div>

<div class="card">
<h2>🏟 Estadio Azteca</h2>

📍 Mexico-Stad

<br><br>

Capaciteit:
87.500

</div>

`;

}

function showStandings() {

app.innerHTML = `

<div class="card">
<h2>📊 Standen</h2>

1. België<br>
2. Frankrijk<br>
3. Brazilië<br>
4. Duitsland

</div>

`;

}

showHome();
