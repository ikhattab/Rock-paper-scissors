angular.module('game')
  .factory('gameService', gameService);

function gameService() {
  var _computerWins = {
    ROCK: 'SCISSORS',
    PAPER: 'ROCK',
    SCISSORS: 'PAPER'
  };

  var _choices = ['ROCK', 'PAPER', 'SCISSORS'];

  function getRandomChoice() {
    return _choices[Math.floor(Math.random() * _choices.length)];
  }

  function getTheWinner(computerChoice, userChoice) {
    if (computerChoice === userChoice) {
      return 'TIE';
    }

    if (_computerWins[computerChoice] === userChoice) {
      return 'COMPUTER';
    }

    return 'USER';
  }

  return {
    getRandomChoice,
    getTheWinner
  };
}
