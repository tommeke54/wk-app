
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

    <div class="card">
      <h2>📊 Mini-stand Groep A</h2>
      🇧🇪 België — 7 punten<br>
      🇫🇷 Frankrijk — 6 punten<br>
      🇧🇷 Brazilië — 4 punten<br>
      🇩🇪 Duitsland — 0 punten
    </div>

    <div class="card">
      <h2>📰 WK Nieuws</h2>
      • België bereidt zich voor op topper tegen Frankrijk<br>
      • MetLife Stadium klaar voor wereldpodium<br>
      • Favorieten voor de wereldtitel nemen vorm aan
    </div>
  `;
}

function showMatches() {
  app.innerHTML = `
    <div class="card">
      <h2>⚽ WK 2026 Wedstrijden</h2>
      Professioneel wedstrijdschema
    </div>

    <div class="card match-card">
      <h2>🟢 GEPLAND</h2>
      🇧🇪 België
      <div class="vs">VS</div>
      🇫🇷 Frankrijk<br><br>
      📅 20 juni 2026<br>
      🕘 21:00<br>
      🏟 MetLife Stadium<br>
      🌍 New Jersey, Verenigde Staten
    </div>

    <div class="card match-card">
      <h2>🟢 GEPLAND</h2>
      🇧🇷 Brazilië
      <div class="vs">VS</div>
      🇯🇵 Japan<br><br>
      📅 21 juni 2026<br>
      🕘 18:00<br>
      🏟 Estadio Azteca<br>
      🌍 Mexico-Stad, Mexico
    </div>

    <div class="card match-card">
      <h2>🟡 BINNENKORT</h2>
      🇩🇪 Duitsland
      <div class="vs">VS</div>
      🇪🇸 Spanje<br><br>
      📅 22 juni 2026<br>
      🕘 20:00<br>
      🏟 BC Place<br>
      🌍 Vancouver, Canada
    </div>

    <div class="card match-card">
      <h2>🔴 LIVE DEMO</h2>
      🇳🇱 Nederland
      <div class="vs">1 - 1</div>
      🇦🇷 Argentinië<br><br>
      ⏱ Minuut 67<br>
      🏟 SoFi Stadium<br>
      🌍 Los Angeles, Verenigde Staten
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
      Spelersinformatie
      <br><br>
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

          📸 Spelersfoto volgt later

          <br><br>

          🔢 Rugnummer: ${player.number || "-"}

          <br>

          🎂 Leeftijd: ${player.age || "-"}

          <br>

          ⚽ Positie: ${player.position}

          <br>

          🏟 Club: ${player.club}

          <br><br>

          ${player.star ? "⭐ Sterspeler" : ""}

        </div>
      `;

    });

  }

  app.innerHTML = html;

}
}
function showStadiums() {
  app.innerHTML = `
    <div class="card">
      <h2>🏟 Stadions Pro</h2>
      WK-stadions met lokale tijd.
    </div>

    <div class="card">
      <h2>🏟 MetLife Stadium</h2>
      📍 East Rutherford, New Jersey<br>
      🌍 Verenigde Staten<br>
      👥 Capaciteit: ongeveer 82.500<br>
      🕒 Lokale tijd: ${new Date().toLocaleTimeString("nl-BE", { timeZone: "America/New_York" })}<br><br>
      Stadion voor de WK-finale van 2026.
    </div>

    <div class="card">
      <h2>🏟 Estadio Azteca</h2>
      📍 Mexico-Stad<br>
      🌍 Mexico<br>
      👥 Capaciteit: ongeveer 87.500<br>
      🕒 Lokale tijd: ${new Date().toLocaleTimeString("nl-BE", { timeZone: "America/Mexico_City" })}<br><br>
      Een legendarisch WK-stadion.
    </div>

    <div class="card">
      <h2>🏟 BC Place</h2>
      📍 Vancouver<br>
      🌍 Canada<br>
      👥 Capaciteit: ongeveer 54.000<br>
      🕒 Lokale tijd: ${new Date().toLocaleTimeString("nl-BE", { timeZone: "America/Vancouver" })}<br><br>
      Modern stadion in Canada.
    </div>
  `;
}

function showStandings() {
  app.innerHTML = `
    <div class="card">
      <h2>📊 WK 2026 Standen Pro</h2>
      Groepsfase overzicht
    </div>

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
      🇯🇵 Japan — 3 gespeeld — 0 punten
    </div>

    <div class="card">
      <h2>🏆 Doorgang naar volgende ronde</h2>
      ✅ België<br>
      ✅ Frankrijk<br>
      ✅ Nederland<br>
      ✅ Spanje
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
      🇺🇸 Verenigde Staten<br><br>

      🇧🇷 Brazilië
      <div class="vs">VS</div>
      🇲🇽 Mexico<br><br>

      🇳🇱 Nederland
      <div class="vs">VS</div>
      🇦🇷 Argentinië
    </div>

    <div class="card match-card">
      <h2>🔥 Kwartfinales</h2>

      🇧🇪 België
      <div class="vs">VS</div>
      🇫🇷 Frankrijk<br><br>

      🇧🇷 Brazilië
      <div class="vs">VS</div>
      🇳🇱 Nederland
    </div>

    <div class="card match-card">
      <h2>⚡ Halve Finales</h2>

      🇧🇪 België
      <div class="vs">VS</div>
      🇧🇷 Brazilië<br><br>

      🇫🇷 Frankrijk
      <div class="vs">VS</div>
      🇳🇱 Nederland
    </div>

    <div class="card match-card">
      <h2>🏆 Finale</h2>

      🇧🇪 België
      <div class="vs">VS</div>
      🇧🇷 Brazilië<br><br>

      📅 19 juli 2026<br>
      🏟 MetLife Stadium<br><br>

      👑 Wereldkampioen: Nog te bepalen
    </div>

    <div class="card match-card">
      <h2>👑 Wereldkampioen-pad</h2>

      Achtste finales<br>
      ↓<br>
      Kwartfinales<br>
      ↓<br>
      Halve finales<br>
      ↓<br>
      Finale<br>
      ↓<br>
      🏆 Wereldkampioen
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
      <h2>🇧🇪 België</h2>
      Volgende wedstrijd:
      België vs Frankrijk

      <br><br>

      📅 20 juni 2026
      <br>
      🕘 21:00
    </div>

    <div class="card">
      <h2>⏰ Herinneringen</h2>

      ✅ 1 dag vooraf<br>
      ✅ 1 uur vooraf<br>
      ✅ Bij aftrap<br>
      ✅ Bij knock-out wedstrijden
    </div>

    <div class="card">
      <h2>🏆 Favoriete ploeg</h2>

      ${favoriteTeam}

      <br><br>

      Meldingen zullen gekoppeld worden aan je favoriete ploeg.
    </div>

    <div class="card">
      <h2>📢 Toekomstige functies</h2>

      🔔 Pushmeldingen<br>
      ⚽ Doelpuntmeldingen<br>
      📰 Breaking WK-nieuws<br>
      🇧🇪 Belgische wedstrijdalerts
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
      ⚽ Laatste goal: Argentinië<br>
      🏟 SoFi Stadium
    </div>

    <div class="card match-card">
      <h2>🟢 GEPLAND</h2>
      🇧🇪 België
      <div class="vs">VS</div>
      🇫🇷 Frankrijk<br><br>
      📅 20 juni 2026<br>
      🕘 21:00<br>
      🏟 MetLife Stadium
    </div>

    <div class="card">
      <h2>📊 Laatste uitslagen</h2>
      🇧🇷 Brazilië 2 - 0 Japan 🇯🇵<br>
      🇩🇪 Duitsland 1 - 1 Spanje 🇪🇸<br>
      🇧🇪 België 3 - 1 Canada 🇨🇦
    </div>

    <div class="card">
      <h2>⚽ Doelpuntenoverzicht</h2>
      12’ Nederland 1 - 0 Argentinië<br>
      67’ Argentinië 1 - 1 Nederland<br>
      74’ LIVE: wedstrijd bezig
    </div>

    <div class="card">
      <h2>🚀 Later uitbreidbaar</h2>
      Deze pagina is klaar om later echte live scores via een voetbal-API te tonen.
    </div>
  `;
}
function showMore() {
  app.innerHTML = `
    <div class="card">
      <h2>☰ Meer</h2>
      Extra onderdelen van WorldCup Live Pro
    </div>

    <div class="card">
      <button onclick="showTeams()">👥 Teams</button>
    </div>

    <div class="card">
      <button onclick="showStadiums()">🏟 Stadions</button>
    </div>

    <div class="card">
      <button onclick="showStandings()">📊 Standen</button>
    </div>

    <div class="card">
      <button onclick="showKnockout()">🏆 Knock-out</button>
    </div>

    <div class="card">
      <button onclick="showNews()">📰 Nieuws</button>
    </div>

    <div class="card">
      <button onclick="showNotifications()">🔔 Meldingen</button>
    </div>
  `;
}
showHome();
function showNews() {
  app.innerHTML = `
    <div class="card">
      <h2>📰 WK Nieuws Center</h2>
      Laatste updates rond het WK voetbal
    </div>

    <div class="card">
      <h2>🇧🇪 België Nieuws</h2>
      • België bereidt zich voor op de topwedstrijd tegen Frankrijk<br>
      • De bondscoach werkt verder aan zijn ideale basiself<br>
      • Supporters kijken uit naar een sterk WK
    </div>

    <div class="card">
      <h2>🌍 Wereldnieuws WK</h2>
      • Stadions in de Verenigde Staten, Mexico en Canada worden klaargemaakt<br>
      • Toplanden bereiden zich voor op de groepsfase<br>
      • De verwachtingen rond Brazilië, Frankrijk en Argentinië blijven hoog
    </div>

    <div class="card">
      <h2>🏟 Stadionnieuws</h2>
      • MetLife Stadium wordt klaargemaakt voor grote WK-wedstrijden<br>
      • Estadio Azteca blijft één van de meest iconische WK-stadions<br>
      • BC Place ontvangt internationale wedstrijden in Canada
    </div>

    <div class="card">
      <h2>⚽ Spelers in de kijker</h2>
      • Kevin De Bruyne blijft belangrijk voor België<br>
      • Kylian Mbappé is één van de blikvangers van Frankrijk<br>
      • Vinícius Júnior wordt verwacht als sterspeler bij Brazilië
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
      <h2>👔 Bondscoach</h2>
      Rudi Garcia
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

    <div class="card">
      <h2>📊 België Statistieken</h2>
      Groep: Groep A<br>
      Punten: 7<br>
      Gespeeld: 3<br>
      Gewonnen: 2<br>
      Gelijk: 1<br>
      Verloren: 0
    </div>

    <div class="card">
      <h2>🏆 WK Historiek België</h2>
      Beste resultaat: 3e plaats op WK 2018<br>
      Bekend als: De Rode Duivels<br>
      Supporterskleur: Rood
    </div>

    <div class="card">
      <h2>📰 België Nieuws</h2>
      • België bereidt zich voor op de topper tegen Frankrijk<br>
      • De sterspelers zijn klaar voor de groepsfase<br>
      • Supporters dromen van een sterk WK
    </div>
  `;
}
