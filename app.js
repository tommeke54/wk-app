const app = document.getElementById("appContent");

function showHome() {
app.innerHTML = ` <div class="card"> <h2>🏆 Home</h2>
Welkom bij WorldCup Live Pro </div>

```
<div class="card">
  <h2>⚽ Volgende wedstrijd</h2>
  België 🇧🇪 vs Frankrijk 🇫🇷
</div>
```

`;
}

function showMatches() {
app.innerHTML = `     <div class="card">       <h2>⚽ Wedstrijden</h2>
      België 🇧🇪 vs Frankrijk 🇫🇷<br><br>
      Brazilië 🇧🇷 vs Japan 🇯🇵<br><br>
      Duitsland 🇩🇪 vs Spanje 🇪🇸     </div>
  `;
}

function showTeams() {
app.innerHTML = `     <div class="card">       <h2>👥 Teams</h2>
      België 🇧🇪<br>
      Frankrijk 🇫🇷<br>
      Brazilië 🇧🇷<br>
      Duitsland 🇩🇪     </div>
  `;
}

function showStadiums() {
app.innerHTML = `     <div class="card">       <h2>🏟 Stadions</h2>
      MetLife Stadium<br>
      Estadio Azteca<br>
      BC Place Stadium     </div>
  `;
}

function showStandings() {
app.innerHTML = `     <div class="card">       <h2>📊 Standen</h2>       1. België<br>       2. Frankrijk<br>       3. Brazilië<br>       4. Duitsland     </div>
  `;
}

showHome();
