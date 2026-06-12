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
  let html = `
    <div class="card">
      <h2>⚽ WK 2026 Wedstrijden Center</h2>
      Wedstrijden worden geladen uit data-matches.js
    </div>
  `;

  matchesData.forEach(match => {
    html += `
      <div class="card match-card">
        <h2>${match.status}</h2>

        ${match.home}
        <div class="vs">${match.score}</div>
        ${match.away}

        <br><br>

        📌 Groep ${match.group}<br>
        📅 ${match.date}<br>
        🕘 Belgische tijd: ${match.timeBE}<br>
        🏟 ${match.stadium}
      </div>
    `;
  });

  app.innerHTML = html;
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

        <button onclick="setFavorite('${team.name} ${team.flag}')">
          ⭐ Favoriet maken
        </button>

        <button onclick="showPlayers('${team.name}')">
          👥 Bekijk spelers
        </button>
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

          🔢 Rugnummer: ${player.number || "-"}<br>
          🎂 Leeftijd: ${player.age || "-"}<br>
          ⚽ Positie: ${player.position || "-"}<br>
          🏟 Club: ${player.club || "-"}<br>
          🦶 Voet: ${player.foot || "-"}<br>
          🎯 Rol: ${player.role || "-"}<br><br>

          ${player.description ? `📝 ${player.description}<br><br>` : ""}

          ${player.star ? "⭐ Sterspeler" : ""}
        </div>
      `;
    });
  }

  app.innerHTML = html;
}

function showStadiums() {
  app.innerHTML = `
    <div class="card">
      <h2>🏟 WK 2026 Stadions Compleet</h2>
      Alle 16 WK-stadions zonder foto's. Foto's komen later in een aparte galerij.
    </div>

    <div class="card">
      <h2>🏟 Dallas Stadium</h2>
      📍 Arlington, Texas<br>
      🌍 Verenigde Staten<br>
      👥 Capaciteit: 94.000<br>
      🕒 Lokale tijd: ${new Date().toLocaleTimeString("nl-BE", { timeZone: "America/Chicago" })}
    </div>

    <div class="card">
      <h2>🏟 Mexico City Stadium</h2>
      📍 Mexico-Stad<br>
      🌍 Mexico<br>
      👥 Capaciteit: 83.000<br>
      🕒 Lokale tijd: ${new Date().toLocaleTimeString("nl-BE", { timeZone: "America/Mexico_City" })}
    </div>

    <div class="card">
      <h2>🏟 New York New Jersey Stadium</h2>
      📍 East Rutherford, New Jersey<br>
      🌍 Verenigde Staten<br>
      👥 Capaciteit: 82.500<br>
      🏆 Finale WK 2026<br>
      🕒 Lokale tijd: ${new Date().toLocaleTimeString("nl-BE", { timeZone: "America/New_York" })}
    </div>

    <div class="card">
      <h2>🏟 Atlanta Stadium</h2>
      📍 Atlanta, Georgia<br>
      🌍 Verenigde Staten<br>
      👥 Capaciteit: 75.000<br>
      🕒 Lokale tijd: ${new Date().toLocaleTimeString("nl-BE", { timeZone: "America/New_York" })}
    </div>

    <div class="card">
      <h2>🏟 Kansas City Stadium</h2>
      📍 Kansas City, Missouri<br>
      🌍 Verenigde Staten<br>
      👥 Capaciteit: 73.000<br>
      🕒 Lokale tijd: ${new Date().toLocaleTimeString("nl-BE", { timeZone: "America/Chicago" })}
    </div>

    <div class="card">
      <h2>🏟 Houston Stadium</h2>
      📍 Houston, Texas<br>
      🌍 Verenigde Staten<br>
      👥 Capaciteit: 72.000<br>
      🕒 Lokale tijd: ${new Date().toLocaleTimeString("nl-BE", { timeZone: "America/Chicago" })}
    </div>

    <div class="card">
      <h2>🏟 San Francisco Bay Area Stadium</h2>
      📍 Santa Clara, California<br>
      🌍 Verenigde Staten<br>
      👥 Capaciteit: 71.000<br>
      🕒 Lokale tijd: ${new Date().toLocaleTimeString("nl-BE", { timeZone: "America/Los_Angeles" })}
    </div>

    <div class="card">
      <h2>🏟 Los Angeles Stadium</h2>
      📍 Inglewood, California<br>
      🌍 Verenigde Staten<br>
      👥 Capaciteit: 70.000<br>
      🕒 Lokale tijd: ${new Date().toLocaleTimeString("nl-BE", { timeZone: "America/Los_Angeles" })}
    </div>

    <div class="card">
      <h2>🏟 Philadelphia Stadium</h2>
      📍 Philadelphia, Pennsylvania<br>
      🌍 Verenigde Staten<br>
      👥 Capaciteit: 69.000<br>
      🕒 Lokale tijd: ${new Date().toLocaleTimeString("nl-BE", { timeZone: "America/New_York" })}
    </div>

    <div class="card">
      <h2>🏟 Seattle Stadium</h2>
      📍 Seattle, Washington<br>
      🌍 Verenigde Staten<br>
      👥 Capaciteit: 69.000<br>
      🕒 Lokale tijd: ${new Date().toLocaleTimeString("nl-BE", { timeZone: "America/Los_Angeles" })}
    </div>

    <div class="card">
      <h2>🏟 Miami Stadium</h2>
      📍 Miami Gardens, Florida<br>
      🌍 Verenigde Staten<br>
      👥 Capaciteit: 65.000<br>
      🕒 Lokale tijd: ${new Date().toLocaleTimeString("nl-BE", { timeZone: "America/New_York" })}
    </div>

    <div class="card">
      <h2>🏟 Boston Stadium</h2>
      📍 Foxborough, Massachusetts<br>
      🌍 Verenigde Staten<br>
      👥 Capaciteit: 65.000<br>
      🕒 Lokale tijd: ${new Date().toLocaleTimeString("nl-BE", { timeZone: "America/New_York" })}
    </div>

    <div class="card">
      <h2>🏟 Guadalajara Stadium</h2>
      📍 Guadalajara<br>
      🌍 Mexico<br>
      👥 Capaciteit: 48.000<br>
      🕒 Lokale tijd: ${new Date().toLocaleTimeString("nl-BE", { timeZone: "America/Mexico_City" })}
    </div>

    <div class="card">
      <h2>🏟 Monterrey Stadium</h2>
      📍 Guadalupe / Monterrey<br>
      🌍 Mexico<br>
      👥 Capaciteit: 53.000<br>
      🕒 Lokale tijd: ${new Date().toLocaleTimeString("nl-BE", { timeZone: "America/Monterrey" })}
    </div>

    <div class="card">
      <h2>🏟 Toronto Stadium</h2>
      📍 Toronto<br>
      🌍 Canada<br>
      👥 Capaciteit: 45.000<br>
      🕒 Lokale tijd: ${new Date().toLocaleTimeString("nl-BE", { timeZone: "America/Toronto" })}
    </div>

    <div class="card">
      <h2>🏟 Vancouver Stadium</h2>
      📍 Vancouver<br>
      🌍 Canada<br>
      👥 Capaciteit: 54.000<br>
      🕒 Lokale tijd: ${new Date().toLocaleTimeString("nl-BE", { timeZone: "America/Vancouver" })}
    </div>
  `;
}
function showKnockout() {
  app.innerHTML = `
    <div class="card">
      <h2>🏆 Knock-out Center Pro</h2>
      De weg naar de wereldbeker
    </div>

    <div class="card match-card">
      <h2>🏆 Achtste Finales</h2>
      🇧🇪 België
      <div class="vs">VS</div>
      🇯🇵 Japan<br><br>
      🇫🇷 Frankrijk
      <div class="vs">VS</div>
      🇺🇸 Verenigde Staten
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
    <div class="card">
      <h2>📰 WK Nieuws Center</h2>
      Laatste updates rond het WK voetbal
    </div>

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
    <div class="card">
      <h2>🇧🇪 België Center</h2>
      Alles over de Rode Duivels op het WK
    </div>

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
    <div class="card">
      <h2>🔔 Meldingen Center</h2>
      Persoonlijke herinneringen voor het WK
    </div>

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
    <div class="card">
      <h2>🔴 Live Scores Center</h2>
      Live wedstrijden, uitslagen en updates
    </div>

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
    <div class="card">
      <h2>☰ Meer</h2>
      Extra onderdelen van WorldCup Live Pro
    </div>

    <div class="card"><button onclick="showTeams()">👥 Teams</button></div>
    <div class="card"><button onclick="showStadiums()">🏟 Stadions</button></div>
    <div class="card"><button onclick="showStandings()">📊 Standen</button></div>
    <div class="card"><button onclick="showKnockout()">🏆 Knock-out</button></div>
    <div class="card"><button onclick="showNews()">📰 Nieuws</button></div>
    <div class="card"><button onclick="showNotifications()">🔔 Meldingen</button></div>
  `;
}
function showStandings() {
  let html = `
    <div class="card">
      <h2>📊 Standen Center Pro</h2>
      Groepsstanden geladen uit data-standings.js
    </div>
  `;

  standingsData.forEach(group => {
    html += `
      <div class="card">
        <h2>📊 Groep ${group.group}</h2>
    `;

    group.teams.forEach(row => {
      html += `
        ${row.team}<br>
        Gespeeld: ${row.played} — Punten: ${row.points}<br><br>
      `;
    });

    html += `
      </div>
    `;
  });

  app.innerHTML = html;
}
showHome();
