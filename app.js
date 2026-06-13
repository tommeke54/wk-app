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
    <div class="card">
      <h2>⚽ WK Wedstrijden</h2>
      Kies een speeldag
    </div>

    <div class="card">
      <button onclick="showMatchDay1()">📅 Speeldag 1</button>
    </div>

    <div class="card">
      <button onclick="showMatchDay2()">📅 Speeldag 2</button>
    </div>

    <div class="card">
      <button onclick="showMatchDay3()">📅 Speeldag 3</button>
    </div>

    <div class="card">
      <button onclick="showKnockout()">🏆 Knock-out</button>
    </div>
  `;
}
function showMatchDay1() {
  showMatchDay("Speeldag 1");
}
function showMatchDay(dayName) {
  const matchDay = matchDaysData.find(day => day.day === dayName);

  let html = `
    <div class="card">
      <h2>📅 ${dayName}</h2>
      Groepsfase wedstrijden
      <br><br>
      <button onclick="showMatches()">⬅ Terug naar speeldagen</button>
    </div>
  `;

  if (!matchDay || matchDay.matches.length === 0) {
    html += `
      <div class="card">
        Nog geen wedstrijden toegevoegd.
      </div>
    `;
  } else {
    matchDay.matches.forEach(match => {
      html += `
        <div class="card match-card">
          <h2>${match.status}</h2>
          ${match.home}
          <div class="vs">${match.score}</div>
          ${match.away}<br><br>

          📌 Groep ${match.group}<br>
          📅 ${match.date}<br>
          🕘 Belgische tijd: ${match.timeBE}<br>
          🏟 ${match.stadium}
        </div>
      `;
    });
  }

  app.innerHTML = html;
}
function showMatchDay2() {
  showMatchDay("Speeldag 2");
}

function showMatchDay3() {
  showMatchDay("Speeldag 3");
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
  let html = `
    <div class="card">
      <h2>🏆 Knock-out Center Pro</h2>
      Knock-outfase geladen uit data-knockout.js
    </div>
  `;

  knockoutData.forEach(round => {
    html += `
      <div class="card">
        <h2>🏆 ${round.round}</h2>
    `;

    if (round.matches.length === 0) {
      html += `
        Nog geen wedstrijden bekend.
      `;
    } else {
      round.matches.forEach(match => {
        html += `
          <div class="match-card">
            <h2>${match.status}</h2>
            ${match.home}
            <div class="vs">${match.score}</div>
            ${match.away}<br><br>
            📅 ${match.date}<br>
            🕘 Belgische tijd: ${match.timeBE}<br>
            🏟 ${match.stadium}
          </div>
          <br>
        `;
      });
    }

    html += `
      </div>
    `;
  });

  app.innerHTML = html;
}
function showNews() {
  let html = `
    <div class="card">
      <h2>📰 Nieuws Center Pro</h2>
      Nieuws geladen uit data-news.js
    </div>
  `;

  newsData.forEach(news => {
    html += `
      <div class="card">
       <h2>${news.category}</h2> 
        <strong>${news.title}</strong><br><br>

        ${news.text}
      </div>
    `;
  });

  app.innerHTML = html;
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
  let html = `
    <div class="card">
      <h2>🔴 Live Scores Center</h2>
      Live scores geladen uit data-livescores.js
    </div>
  `;

  liveScoresData.forEach(match => {
    html += `
      <div class="card match-card">
        <h2>🔴 ${match.status}</h2>

        ${match.home}
        <div class="vs">${match.score}</div>
        ${match.away}

        <br><br>

        ⏱ Minuut ${match.minute}<br>
        ⚽ Laatste goal: ${match.lastGoal}
      </div>
    `;
  });

  app.innerHTML = html;
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
    <div class="card"><button onclick="showNews()">📰 Nieuws</button></div>
    <div class="card"><button onclick="showNotifications()">🔔 Meldingen</button></div>
  `;
}
function calculateLiveStandings() {
  const liveStandings = JSON.parse(JSON.stringify(standingsData));

  liveStandings.forEach(group => {
    group.teams.forEach(team => {
      team.played = 0;
      team.wins = 0;
      team.draws = 0;
      team.losses = 0;
      team.goalsFor = 0;
      team.goalsAgainst = 0;
      team.goalDiff = 0;
      team.points = 0;
    });
  });

  matchDaysData.forEach(day => {
    day.matches.forEach(match => {
      if (match.status !== "AFGELOPEN") return;
      if (!match.score.includes(" - ")) return;

      const [homeGoals, awayGoals] = match.score.split(" - ").map(Number);

      const group = liveStandings.find(g => g.group === match.group);
      if (!group) return;

      const homeTeam = group.teams.find(t => t.team === match.home);
      const awayTeam = group.teams.find(t => t.team === match.away);

      if (!homeTeam || !awayTeam) return;

      homeTeam.played++;
      awayTeam.played++;

      homeTeam.goalsFor += homeGoals;
      homeTeam.goalsAgainst += awayGoals;

      awayTeam.goalsFor += awayGoals;
      awayTeam.goalsAgainst += homeGoals;

      homeTeam.goalDiff = homeTeam.goalsFor - homeTeam.goalsAgainst;
      awayTeam.goalDiff = awayTeam.goalsFor - awayTeam.goalsAgainst;

      if (homeGoals > awayGoals) {
        homeTeam.wins++;
        awayTeam.losses++;
        homeTeam.points += 3;
      } else if (homeGoals < awayGoals) {
        awayTeam.wins++;
        homeTeam.losses++;
        awayTeam.points += 3;
      } else {
        homeTeam.draws++;
        awayTeam.draws++;
        homeTeam.points++;
        awayTeam.points++;
      }
    });
  });

  return liveStandings;
}

function showStandings() {
  const liveStandings = calculateLiveStandings();

  let html = `
    <div class="card">
      <h2>📊 Live Standen Pro</h2>
      Standen automatisch berekend uit gespeelde wedstrijden
    </div>
  `;

  liveStandings.forEach(group => {
    const sortedTeams = [...group.teams].sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.goalDiff !== a.goalDiff) return b.goalDiff - a.goalDiff;
      if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor;
      return a.team.localeCompare(b.team);
    });

    html += `
      <div class="standings-card">
        <h2>🏆 Groep ${group.group}</h2>

        <table class="standings-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Team</th>
              <th>GS</th>
              <th>W</th>
              <th>G</th>
              <th>V</th>
              <th>DV</th>
              <th>DT</th>
              <th>+/-</th>
              <th>PT</th>
            </tr>
          </thead>
          <tbody>
    `;

    sortedTeams.forEach((team, index) => {
      const belgiumClass =
        team.team.includes("België") ? "belgium-row" : "";

      const rankClass = `rank-${index + 1}`;

      html += `
        <tr class="${rankClass} ${belgiumClass}">
          <td>${index + 1}</td>
          <td>${team.team}</td>
          <td>${team.played}</td>
          <td>${team.wins}</td>
          <td>${team.draws}</td>
          <td>${team.losses}</td>
          <td>${team.goalsFor}</td>
          <td>${team.goalsAgainst}</td>
          <td>${team.goalDiff > 0 ? "+" + team.goalDiff : team.goalDiff}</td>
          <td><strong>${team.points}</strong></td>
        </tr>
      `;
    });

    html += `
          </tbody>
        </table>
      </div>
    `;
  });

  app.innerHTML = html;
}
function showTeams() {
  let html = `
    <div class="card">
      <h2>👥 Teams</h2>
      Kies een land om spelers te bekijken
    </div>
  `;

  teamsData.forEach(team => {
    html += `
      <div class="card">
        <h2>${team.flag || ""} ${team.name}</h2>
        <button onclick="showPlayers('${team.name}')">Spelers bekijken</button>
        <button onclick="setFavorite('${team.name} ${team.flag || ""}')">⭐ Favoriet maken</button>
      </div>
    `;
  });

  app.innerHTML = html;
}
showHome();
