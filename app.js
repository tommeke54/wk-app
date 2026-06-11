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

function setFavorite(team) {
  favoriteTeam = team;
  localStorage.setItem("favoriteTeam", team);
  showHome();
}

function showHome() {
  app.innerHTML = `
    <div class="card">
      <h2>🏆 Mijn WK Dashboard</h2>
      Welkom bij WorldCup Live Pro
    </div>

    <div class="card">
      <h2>⭐ Mijn favoriete ploeg</h2>
      ${favoriteTeam}<br><br>
      <button onclick="showTeams()">Favoriet wijzigen</button>
    </div>

    <div class="card">
      <h2>⚽ Volgende wedstrijd</h2>
      🇧🇪 België vs Frankrijk 🇫🇷<br><br>
      📅 20 juni 2026<br>
      🕘 21:00<br>
      🏟 MetLife Stadium
    </div>

    <div class="card">
      <h2>⏳ Countdown</h2>
      ${getCountdown()}
    </div>

    <div class="card">
      <h2>📰 WK Nieuws</h2>
      • WK voorbereiding volop bezig<br>
      • Stadions worden klaargemaakt<br>
      • Favoriete teams bekend
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
  app.innerHTML = `
    <div class="card">
      <h2>👥 Teams Pro</h2>
      Kies je favoriete ploeg.
    </div>

    <div class="card">
      <h2>🇧🇪 België</h2>
      🏆 FIFA Ranking: Top 10<br>
      📌 Groep: Groep A<br>
      👔 Bondscoach: Rudi Garcia<br><br>
      ⭐ Sterspelers<br><br>
      ⚽ Kevin De Bruyne<br>
      ⚽ Romelu Lukaku<br>
      ⚽ Jérémy Doku<br>
      ⚽ Youri Tielemans<br><br>
      <button onclick="setFavorite('België 🇧🇪')">⭐ Favoriet maken</button>
    </div>

    <div class="card">
      <h2>🇫🇷 Frankrijk</h2>
      🏆 FIFA Ranking: Top 5<br>
      📌 Groep: Groep A<br>
      👔 Bondscoach: Didier Deschamps<br><br>
      ⭐ Sterspelers<br><br>
      ⚽ Kylian Mbappé<br>
      ⚽ Antoine Griezmann<br>
      ⚽ Eduardo Camavinga<br>
      ⚽ Ousmane Dembélé<br><br>
      <button onclick="setFavorite('Frankrijk 🇫🇷')">⭐ Favoriet maken</button>
    </div>

    <div class="card">
      <h2>🇧🇷 Brazilië</h2>
      🏆 FIFA Ranking: Top 5<br>
      📌 Groep: Groep B<br>
      👔 Bondscoach: Carlo Ancelotti<br><br>
      ⭐ Sterspelers<br><br>
      ⚽ Vinícius Júnior<br>
      ⚽ Rodrygo<br>
      ⚽ Bruno Guimarães<br>
      ⚽ Marquinhos<br><br>
      <button onclick="setFavorite('Brazilië 🇧🇷')">⭐ Favoriet maken</button>
    </div>

    <div class="card">
      <h2>🇩🇪 Duitsland</h2>
      🏆 FIFA Ranking: Top 10<br>
      📌 Groep: Groep B<br>
      👔 Bondscoach: Julian Nagelsmann<br><br>
      ⭐ Sterspelers<br><br>
      ⚽ Jamal Musiala<br>
      ⚽ Florian Wirtz<br>
      ⚽ Kai Havertz<br>
      ⚽ Joshua Kimmich<br><br>
      <button onclick="setFavorite('Duitsland 🇩🇪')">⭐ Favoriet maken</button>
    </div>

    <div class="card">
      <h2>🇳🇱 Nederland</h2>
      🏆 FIFA Ranking: Top 10<br>
      📌 Groep: Groep C<br>
      👔 Bondscoach: Ronald Koeman<br><br>
      ⭐ Sterspelers<br><br>
      ⚽ Virgil van Dijk<br>
      ⚽ Xavi Simons<br>
      ⚽ Cody Gakpo<br>
      ⚽ Frenkie de Jong<br><br>
      <button onclick="setFavorite('Nederland 🇳🇱')">⭐ Favoriet maken</button>
    </div>
  `;
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
showHome();
