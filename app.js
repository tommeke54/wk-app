const app = document.getElementById("appContent");

function showHome(){

app.innerHTML = `

<div class="card">
<h2>⚽ Volgende Wedstrijd</h2>
België 🇧🇪 vs Frankrijk 🇫🇷
<br><br>
20 juni 2026 - 21:00
</div>

<div class="card">
<h2>⭐ Favoriet Team</h2>
België 🇧🇪
</div>

<div class="card">
<h2>📰 Laatste Nieuws</h2>
WK voorbereiding volop bezig.
</div>

`;

}

function showMatches(){

app.innerHTML = `

<div class="card">
<h2>⚽ Wedstrijden</h2>

🇧🇪 België vs Frankrijk 🇫🇷<br><br>
🇧🇷 Brazilië vs Japan 🇯🇵<br><br>
🇩🇪 Duitsland vs Spanje 🇪🇸

</div>

`;

}

function showTeams(){

app.innerHTML = `

<div class="card">
<h2>🇧🇪 België</h2>
Kevin De Bruyne<br>
Romelu Lukaku<br>
Jérémy Doku
</div>

<div class="card">
<h2>🇫🇷 Frankrijk</h2>
Kylian Mbappé<br>
Ousmane Dembélé<br>
Eduardo Camavinga
</div>

<div class="card">
<h2>🇧🇷 Brazilië</h2>
Vinícius Júnior<br>
Rodrygo<br>
Marquinhos
</div>

`;

}

function showStadiums(){

app.innerHTML = `

<div class="card">
<h2>🏟 MetLife Stadium</h2>
New Jersey, USA<br>
Capaciteit: 82.500
</div>

<div class="card">
<h2>🏟 Estadio Azteca</h2>
Mexico-Stad<br>
Capaciteit: 87.500
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
4. Duitsland - 1 ptn

</div>

`;

}

showHome();
