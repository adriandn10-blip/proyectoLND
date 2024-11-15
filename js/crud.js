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