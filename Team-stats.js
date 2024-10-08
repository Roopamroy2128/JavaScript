const team = {
    _players: [
      {firstname: 'Roger', lastname: 'Torry', age: 20},
      {firstname: 'John', lastname: 'Merk', age: 23},
      {firstname: 'Michel', lastname: 'Holmes', age: 22}],
  
    _games: [
      {opponent: 'Jets', teamPoints: 42, opponentPoints: 27},
      {opponent: 'Giants', teamPoints: 32, opponentPoints: 37},
      {opponent: 'Riders', teamPoints: 52, opponentPoints: 57}],
  
    get players () {
      return this._players;
    },
  
    get games () {
      return this._games;
    },
  
    addPlayers(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this.players.push(player);
    },
  
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this.games.push(game);
    }
  };
  
  team.addPlayers('Bugs', 'Bunny', 76);
  console.log(team.players);
  
  team.addGame('Titans', 100, 98);
  console.log(team.games);
