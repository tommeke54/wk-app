alert("APP.JS WERKT");

const app = document.getElementById("appContent");

function showHome(){
app.innerHTML = "<div class='card'><h2>Home werkt</h2></div>";
}

function showMatches(){
app.innerHTML = "<div class='card'><h2>Wedstrijden werkt</h2></div>";
}

function showTeams(){
app.innerHTML = "<div class='card'><h2>Teams werkt</h2></div>";
}

function showStadiums(){
app.innerHTML = "<div class='card'><h2>Stadions werkt</h2></div>";
}

function showStandings(){
app.innerHTML = "<div class='card'><h2>Standen werkt</h2></div>";
}

showHome();
