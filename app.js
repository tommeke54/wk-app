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

function parseMatchDate(match) {
  const months = {
    "januari": 0,
    "februari": 1,
    "maart": 2,
    "april": 3,
    "mei": 4,
    "juni": 5,
    "juli": 6,
    "augustus": 7,
    "september": 8,
    "oktober": 9,
    "november": 10,
    "december": 11
  };

  const parts = match.date.split(" ");
  const day = parseInt(parts[0]);
  const month = months[parts[1]];
  const year = parseInt(parts[2]);
  const [hour, minute] = match.timeBE.split(":").map(Number);

  return new Date(year, month, day, hour, minute);
}

function getNextBelgiumMatch() {
  const allMatches = matchDaysData.flatMap(day => day.matches);

  return allMatches
    .filter(match =>
      match.status !== "AFGELOPEN" &&
      (match.home.includes("België") || match.away.includes("België"))
    )
    .sort((a, b) => parseMatchDate(a) - parseMatchDate(b))[0];
}

function getLatestResult() {
  const allMatches = matchDaysData.flatMap(day => day.matches);

  return allMatches
    .filter(match => match.status === "AFGELOPEN")
    .sort((a, b) => parseMatchDate(b) - parseMatchDate(a))[0];
}

function updateBelgiumCountdown(matchDate) {
  const el = document.getElementById("belgiumCountdown");
  if (!el) return;

  const now = new Date();
  const diff = matchDate - now;

  if (diff <= 0) {
    el.innerHTML = "🇧🇪 De wedstrijd is gestart!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  el.innerHTML = `${days}d ${hours}u ${minutes}m ${seconds}s`;
}

function showHome() {
  const belgiumMatch = getNextBelgiumMatch();
  const latestResult = getLatestResult();
  const latestNews = newsData[0];

  if (window.homeCountdownTimer) {
    clearInterval(window.homeCountdownTimer);
  }

  app.innerHTML = `
    <div class="card">
      <h2>🏆 WorldCup Live Pro</h2>
      Jouw persoonlijke WK-dashboard
    </div>

    <div class="card match-card">
      <h2>🇧🇪 Volgende België-wedstrijd</h2>
      ${belgiumMatch ? `
       <strong>${belgiumMatch.home}</strong>
<div class="vs">VS</div>
<strong>${belgiumMatch.away}</strong><br><br> 
        📅 ${belgiumMatch.date}<br>
        🕘 Belgische tijd: ${belgiumMatch.timeBE}<br>
        🏟 ${belgiumMatch.stadium}
      ` : `
        Geen komende België-wedstrijd gevonden.
      `}
    </div>

    <div class="card">
      <h2>⏳ Aftellen naar België</h2>
      <div id="belgiumCountdown" style="font-size:26px;font-weight:bold;color:#FFD700;">
        Laden...
      </div>
    </div>

    <div class="card match-card">
      <h2>📋 Laatste uitslag</h2>
      ${latestResult ? `
        ${latestResult.home}
        <div class="vs">${latestResult.score}</div>
        ${latestResult.away}<br><br>
        📅 ${latestResult.date}<br>
        🏟 ${latestResult.stadium}
      ` : `
        Nog geen uitslagen bekend.
      `}
    </div>

    <div class="card">
      <h2>📰 Laatste nieuws</h2>
      ${latestNews ? `
        <strong>${latestNews.title}</strong><br><br>
        ${latestNews.text}
      ` : `
        Geen nieuws beschikbaar.
      `}
    </div>

    <div class="card">
      <h2>⚡ Snelle toegang</h2>
      <button onclick="showMatches()">⚽ Wedstrijden</button>
      <button onclick="showStandings()">📊 Standen</button>
      <button onclick="showLiveScores()">🔴 Live</button>
      <button onclick="showBelgium()">🇧🇪 België</button>
    </div>
  <div class="card" style="text-align:center;">
  <h2>🏆 WorldCup Live Pro</h2>

  <div style="font-size:18px;line-height:1.8;">
    <strong>Een persoonlijke WK-app</strong><br>
    gemaakt voor supporters, spanning en België 🇧🇪
    <br><br>

    👨‍💻 <strong>Ontwikkeld door</strong><br>
    Tom Vanhees
    <br><br>

    🤖 <strong>Met ondersteuning van</strong><br>
ChatGPT
<br><br>

⚽ Van groepsfase tot wereldtitel,<br>
alles op één plaats voor de echte supporter.
<br><br>

🇧🇪 Trots gebouwd voor de Rode Duivels<br>
en alle WK-supporters wereldwijd.
<br><br>

⚽ Standen · Nieuws · Uitslagen · België · Stadions

    
    <br><br>

    <span style="color:#FFD700;font-weight:bold;">
      Versie v16.2 Credits & Share Pro
    </span>
  </div>

  <hr style="margin:20px 0;">

 <h3>📱 Deel deze app</h3>

<p style="font-size:16px;font-weight:bold;color:#FFD700;">
  Scan en open direct op smartphone
</p> 
  

  <img 
    src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://tommeke54.github.io/wk-app/"
    alt="QR-code WorldCup Live Pro"
    style="
      background:white;
      padding:12px;
      border-radius:16px;
      margin:12px auto;
      display:block;
      max-width:180px;
    "
  >

  <a 
    href="https://tommeke54.github.io/wk-app/"
    target="_blank"
    style="
      display:inline-block;
      margin-top:12px;
      padding:12px 18px;
      border-radius:12px;
      background:#FFD700;
      color:#111;
      text-decoration:none;
      font-weight:bold;
    "
  >
    🌍 Open de app
  </a>

  <p style="font-size:13px;opacity:.75;margin-top:14px;">
    tommeke54.github.io/wk-app
  </p>
</div>
  `;

  if (belgiumMatch) {
    const matchDate = parseMatchDate(belgiumMatch);
    updateBelgiumCountdown(matchDate);

    window.homeCountdownTimer = setInterval(() => {
      updateBelgiumCountdown(matchDate);
    }, 1000);
  }
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
      <h2>🔔 Meldingen Pro</h2>
      Belangrijke komende WK-wedstrijden
    </div>

    <div class="card">
      <h2>🇧🇪 België vs Egypte</h2>
      ⏰ 15 juni 2026<br>
      🏟 Seattle Stadium<br>
      🔔 Herinnering 24 uur vooraf
    </div>

    <div class="card">
      <h2>🇧🇪 België vs Iran</h2>
      ⏰ 21 juni 2026<br>
      🔔 Herinnering 24 uur vooraf
    </div>

    <div class="card">
      <h2>🇧🇪 Nieuw-Zeeland vs België</h2>
      ⏰ 26 juni 2026<br>
      🔔 Herinnering 24 uur vooraf
    </div>

    <div class="card">
      <h2>🏆 Knock-out fase</h2>
      🔔 Meldingen actief zodra België zich plaatst
    </div>
  `;
}
function showLiveScores() {
  let html = `
    <div class="card">
      <h2>🔴 Live Scores Pro</h2>
      Live uitslagen en wedstrijdstatus
    </div>
  `;

  liveScoresData.forEach(match => {

    const statusIcon =
      match.status === "LIVE" ? "🔴" :
      match.status === "AFGELOPEN" ? "✅" :
      "⏳";

    html += `
      <div class="card match-card">

        <h2>${statusIcon} ${match.status}</h2>

        <div style="font-size:22px;font-weight:bold;margin:15px 0;">
          ${match.home}
          <br>
          <span style="color:#FFD700;font-size:28px;">
            ${match.score}
          </span>
          <br>
          ${match.away}
        </div>

        <hr>

        <p>⏱ <strong>Minuut:</strong> ${match.minute}</p>

        <p>⚽ <strong>Laatste doelpunt:</strong> ${match.lastGoal}</p>

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
    <div class="card"><button onclick="showLiveNewsFeed()">🛰 Live Nieuws</button></div>
    <div class="card"><button onclick="showNotifications()">🔔 Meldingen</button></div>
    <div class="card"><button onclick="showDailyResults()">📋 Dagelijkse Uitslagen</button></div>
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
function showLiveNewsFeed() {
  app.innerHTML = `
    <div class="card">
      <h2>📰 Dagelijks Nieuws Pro</h2>
      Overzicht van het belangrijkste WK-nieuws
    </div>

    <div class="card">
      <h2>🇧🇪 België Vandaag</h2>
      • Rode Duivels bereiden zich voor op België - Egypte<br>
      • Laatste training succesvol afgewerkt<br>
      • Focus op een sterke WK-start
    </div>

    <div class="card">
      <h2>🏆 WK Vandaag</h2>
      • Groep B komt in actie<br>
      • Qatar opent zijn WK-campagne<br>
      • Zwitserland mikt op groepswinst
    </div>

    <div class="card">
      <h2>🔥 Trending</h2>
      • Mexico wint openingswedstrijd<br>
      • Zuid-Korea start sterk in Groep A<br>
      • Eerste verrassingen van het toernooi
    </div>

    <div class="card">
      <h2>📅 Morgen op het WK</h2>
      • Brazilië - Marokko<br>
      • Haïti - Schotland<br>
      • Australië - Turkije
    </div>
  `;
}
function showDailyResults() {

  let html = `
    <div class="card">
      <h2>📋 Dagelijkse Uitslagen Pro</h2>
      Automatisch overzicht van gespeelde wedstrijden
    </div>
  `;

  matchDaysData.forEach(day => {

    day.matches.forEach(match => {

      if (match.status === "AFGELOPEN") {

        html += `
          <div class="card">

            <h2>✅ Groep ${match.group}</h2>

            ${match.home}
            <div class="vs">${match.score}</div>
            ${match.away}

            <br><br>

            📅 ${match.date}<br>
            🏟 ${match.stadium}

          </div>
        `;
      }

    });

  });

  app.innerHTML = html;
}
showHome();
