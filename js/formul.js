
const formChampionship = document.getElementById('championship-register-form');
const resultContainer = document.getElementById('result');

formChampionship.addEventListener('submit', function(event) {
    event.preventDefault();  
    
    const name = document.getElementById('name');
    const location = document.getElementById('location');
    const teams = parseInt(document.getElementById('teams').value, 10);
    
    let valid = true; 
    
   
    clearErrors();

   
    if (name.value.trim() === '') {
        showError(name, 'Por favor, ingresa el nombre del torneo.');
        valid = false;
    }

    
    if (location.value.trim() === '') {
        showError(location, 'Por favor, ingresa la ubicación del torneo.');
        valid = false;
    }

    
    if (isNaN(teams) || teams < 2) {
        showError(document.getElementById('teams'), 'El número de equipos debe ser mayor o igual a 2.');
        valid = false;
    }


    if (valid) {
        resultContainer.innerHTML = `
            <h3>Campeonato Registrado:</h3>
            <p><strong>Nombre:</strong> ${name.value}</p>
            <p><strong>Localidad:</strong> ${location.value}</p>
            <p><strong>Número de Equipos:</strong> ${teams}</p>
        `;
    } else {
        resultContainer.innerHTML = '<p style="color: red;">Por favor, complete todos los campos correctamente.</p>';
    }
});


let basketballPlayers = [
    {
      name: "Michael Jordan",
      team: "Chicago Bulls"
    },
    {
      name: "LeBron James",
      team: "Los Angeles Lakers"
    },
  ];
  
  function showBasketballPlayersList() {
    const PLAYERS_LIST = document.getElementById("players-list");
    let playersToShow = "";
    for (let i = 0; i < basketballPlayers.length; i++) {
      playersToShow += `
        <div>
          <h3>${basketballPlayers[i].name}</h3>
          <p>Equipo: ${basketballPlayers[i].team}</p>
        </div>
      `;
    }
    PLAYERS_LIST.innerHTML = playersToShow;
  }
  
  function listenForSubmit() {
    const PLAYER_REGISTER = document.getElementById("player-register");
    PLAYER_REGISTER.addEventListener("submit", introduceNewPlayerAndShow);
  }
  
  function introduceNewPlayer(e) {
    e.preventDefault();
    const NAME = e.target.name.value;
    const TEAM = e.target.team.value;
    basketballPlayers.push({
      name: NAME,
      team: TEAM
    });
  }
  
  function introduceNewPlayerAndShow(e) {
    introduceNewPlayer(e);
    showBasketballPlayersList();
  }
  
  
  showBasketballPlayersList();
  listenForSubmit();
  