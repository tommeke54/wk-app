const app = document.getElementById("appContent");

let favoriteTeam = localStorage.getItem("favoriteTeam") || "België 🇧🇪";

function getCountdown() {
  const targetDate = new Date("2026-06-20T21:00:00");
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) return "Wedstrijd gestart!";

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  return `${days}d ${hours}u ${minutes}m`;
}

function stadiumTime() {
  return new Date().toLocaleTimeString("nl-BE", {
    timeZone: "America/New_York"
  });
}

function setFavorite(team) {
  favoriteTeam = team;
  localStorage.setItem("favoriteTeam", team);
  showHome();
}

function showHome() {
  app.innerHTML = `
    <div class="card">
      <h2>🏆 Mijn WK Dashboard</h2>
      WorldCup Live Pro
    </div>

    <div class="card">
      <h2>⭐ Favoriete ploeg</h2>
      <strong>${favoriteTeam}</strong><br><br>
      <button onclick="showTeams()">Favoriet wijzigen</button>
    </div>

    <div class="card match-card">
      <h2>⚽ Volgende wedstrijd</h2>
      🇧🇪 België
      <div class="vs">VS</div>
      🇫🇷 Frankrijk<br><br>
      📅 20 juni 2026<br>
      🕘 Belgische tijd: 21:00<br>
      🏟 MetLife Stadium
    </div>

    <div class="card">
      <h2>⏳ Countdown</h2>
      ${getCountdown()}
    </div>

    <div class="card">
      <h2>🏟 Stadioninfo</h2>
      MetLife Stadium<br>
      📍 East Rutherford, New Jersey<br>
      🌍 Verenigde Staten<br>
      👥 Capaciteit: ongeveer 82.500<br>
      🕒 Lokale stadiontijd: ${stadiumTime()}
    </div>
  `;
}

function showMatches() {
  app.innerHTML = `
    <div class="card"><h2>⚽ WK 2026 Wedstrijden</h2>Professioneel wedstrijdschema</div>

    <div class="card match-card">
      <h2>🟢 GEPLAND</h2>
      🇧🇪 België
      <div class="vs">VS</div>
      🇫🇷 Frankrijk<br><br>
      📅 20 juni 2026<br>
      🕘 21:00<br>
      🏟 MetLife Stadium
    </div>

    <div class="card match-card">
      <h2>🔴 LIVE DEMO</h2>
      🇳🇱 Nederland
      <div class="vs">1 - 1</div>
      🇦🇷 Argentinië<br><br>
      ⏱ Minuut 67<br>
      🏟 SoFi Stadium
    </div>
  `;
}

function showTeams() {
  let html = `
    <div class="card">
      <h2>🌍 Alle WK-landen & Spelers</h2>
      Klik op een land om de spelers te bekijken.
    </div>
  `;

  teamsData.forEach(team => {
    html += `
      <div class="card">
        <h2>${team.flag} ${team.name}</h2>
        📌 Groep: ${team.group}<br>
        👔 Bondscoach: ${team.coach}<br><br>

        <button onclick="setFavorite('${team.name} ${team.flag}')">⭐ Favoriet maken</button>
        <button onclick="showPlayers('${team.name}')">👥 Bekijk spelers</button>
      </div>
    `;
  });

  app.innerHTML = html;
}

function showPlayers(countryName) {
  const team = teamsData.find(t => t.name === countryName);
  const countryPlayers = playersData.find(p => p.country === countryName);

  let html = `
    <div class="card">
      <h2>${team ? team.flag : ""} ${countryName}</h2>
      Spelersinformatie<br><br>
      <button onclick="showTeams()">⬅ Terug naar landen</button>
    </div>
  `;

  if (!countryPlayers) {
    html += `
      <div class="card">
        Voor dit land zijn nog geen spelers toegevoegd.
      </div>
    `;
  } else {
    countryPlayers.players.forEach(player => {
      html += `
        <div class="card">
          <h2>⚽ ${player.name}</h2>

          ${player.photo ? `
            <img src="${player.photo}" style="width:120px;border-radius:12px;margin-bottom:10px;">
          ` : "📸 Geen foto"}

          <br><br>
          🔢 Rugnummer: ${player.number || "-"}<br>
          🎂 Leeftijd: ${player.age || "-"}<br>
          ⚽ Positie: ${player.position}<br>
          🏟 Club: ${player.club}<br><br>
          ${player.star ? "⭐ Sterspeler" : ""}
        </div>
      `;
    });
  }

  app.innerHTML = html;
}
function showStadiums() {
  app.innerHTML = `
    <div class="card"><h2>🏟 Stadions Pro</h2>WK-stadions met lokale tijd.</div>

    <div class="card">
      <h2>🏟 MetLife Stadium</h2>
      📍 East Rutherford, New Jersey<br>
      🌍 Verenigde Staten<br>
      👥 Capaciteit: ongeveer 82.500<br>
      🕒 Lokale tijd: ${new Date().toLocaleTimeString("nl-BE", { timeZone: "America/New_York" })}
    </div>

    <div class="card">
      <h2>🏟 Estadio Azteca</h2>
      📍 Mexico-Stad<br>
      🌍 Mexico<br>
      👥 Capaciteit: ongeveer 87.500<br>
      🕒 Lokale tijd: ${new Date().toLocaleTimeString("nl-BE", { timeZone: "America/Mexico_City" })}
    </div>

    <div class="card">
      <h2>🏟 BC Place</h2>
      📍 Vancouver<br>
      🌍 Canada<br>
      👥 Capaciteit: ongeveer 54.000<br>
      🕒 Lokale tijd: ${new Date().toLocaleTimeString("nl-BE", { timeZone: "America/Vancouver" })}
    </div>
  `;
}

function showStandings() {
  app.innerHTML = `
    <div class="card"><h2>📊 WK 2026 Standen Pro</h2>Groepsfase overzicht</div>

    <div class="card">
      <h2>📊 Groep A</h2>
      🇧🇪 België — 3 gespeeld — 7 punten<br>
      🇫🇷 Frankrijk — 3 gespeeld — 6 punten<br>
      🇧🇷 Brazilië — 3 gespeeld — 4 punten<br>
      🇩🇪 Duitsland — 3 gespeeld — 0 punten
    </div>

    <div class="card">
      <h2>📊 Groep B</h2>
      🇳🇱 Nederland — 3 gespeeld — 7 punten<br>
      🇪🇸 Spanje — 3 gespeeld — 6 punten<br>
      🇦🇷 Argentinië — 3 gespeeld — 4 punten<br>
      🇯🇵 Japan — 0 punten
    </div>
  `;
}

function showKnockout() {
  app.innerHTML = `
    <div class="card"><h2>🏆 Knock-out Center Pro</h2>De weg naar de wereldbeker</div>

    <div class="card match-card">
      <h2>🏆 Achtste Finales</h2>
      🇧🇪 België <div class="vs">VS</div> 🇯🇵 Japan<br><br>
      🇫🇷 Frankrijk <div class="vs">VS</div> 🇺🇸 Verenigde Staten
    </div>

    <div class="card match-card">
      <h2>🏆 Finale</h2>
      🇧🇪 België
      <div class="vs">VS</div>
      🇧🇷 Brazilië<br><br>
      📅 19 juli 2026<br>
      🏟 MetLife Stadium
    </div>
  `;
}

function showNews() {
  app.innerHTML = `
    <div class="card"><h2>📰 WK Nieuws Center</h2>Laatste updates rond het WK voetbal</div>

    <div class="card">
      <h2>🇧🇪 België Nieuws</h2>
      • België bereidt zich voor op de topwedstrijd tegen Frankrijk<br>
      • Supporters kijken uit naar een sterk WK
    </div>

    <div class="card">
      <h2>🌍 Wereldnieuws WK</h2>
      • Stadions in de Verenigde Staten, Mexico en Canada worden klaargemaakt<br>
      • Toplanden bereiden zich voor op de groepsfase
    </div>
  `;
}

function showBelgium() {
  app.innerHTML = `
    <div class="card"><h2>🇧🇪 België Center</h2>Alles over de Rode Duivels op het WK</div>

    <div class="card">
      <h2>⭐ Sterspelers</h2>
      ⚽ Kevin De Bruyne<br>
      ⚽ Romelu Lukaku<br>
      ⚽ Jérémy Doku<br>
      ⚽ Youri Tielemans<br>
      ⚽ Thibaut Courtois
    </div>

    <div class="card match-card">
      <h2>⚽ Volgende wedstrijd België</h2>
      🇧🇪 België
      <div class="vs">VS</div>
      🇫🇷 Frankrijk<br><br>
      📅 20 juni 2026<br>
      🕘 21:00<br>
      🏟 MetLife Stadium
    </div>
  `;
}

function showNotifications() {
  app.innerHTML = `
    <div class="card"><h2>🔔 Meldingen Center</h2>Persoonlijke herinneringen voor het WK</div>

    <div class="card">
      ✅ 1 dag vooraf<br>
      ✅ 1 uur vooraf<br>
      ✅ Bij aftrap<br>
      ✅ Bij knock-out wedstrijden
    </div>
  `;
}

function showLiveScores() {
  app.innerHTML = `
    <div class="card"><h2>🔴 Live Scores Center</h2>Live wedstrijden, uitslagen en updates</div>

    <div class="card match-card">
      <h2>🔴 LIVE</h2>
      🇳🇱 Nederland
      <div class="vs">1 - 1</div>
      🇦🇷 Argentinië<br><br>
      ⏱ Minuut 67<br>
      ⚽ Laatste goal: Argentinië
    </div>
  `;
}

function showMore() {
  app.innerHTML = `
    <div class="card"><h2>☰ Meer</h2>Extra onderdelen van WorldCup Live Pro</div>

    <div class="card"><button onclick="showTeams()">👥 Teams</button></div>
    <div class="card"><button onclick="showStadiums()">🏟 Stadions</button></div>
    <div class="card"><button onclick="showStandings()">📊 Standen</button></div>
    <div class="card"><button onclick="showKnockout()">🏆 Knock-out</button></div>
    <div class="card"><button onclick="showNews()">📰 Nieuws</button></div>
    <div class="card"><button onclick="showNotifications()">🔔 Meldingen</button></div>
  `;
}

showHome();
