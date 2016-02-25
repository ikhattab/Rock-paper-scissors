var gameService;
describe('Game service', function() {
  beforeEach(module('game'));
  beforeEach(inject(function(_gameService_) {
    gameService = _gameService_;

  }));

  describe("getRandom", function() {
    it("should return random choice", function() {
      // not easy task to test function that returns random value
      // http://programmers.stackexchange.com/questions/147134/how-should-i-test-randomness
    });
  });

  describe("getTheWinner", function() {
    it("should return who is the winner if user plays paper", function() {
      expect(gameService.getTheWinner('ROCK', 'PAPER')).toBe('USER')
      expect(gameService.getTheWinner('SCISSORS', 'PAPER')).toBe('COMPUTER')
      expect(gameService.getTheWinner('PAPER', 'PAPER')).toBe('TIE')
    });

    it("should return who is the winner if user plays rock", function() {
      expect(gameService.getTheWinner('ROCK', 'ROCK')).toBe('TIE')
      expect(gameService.getTheWinner('SCISSORS', 'ROCK')).toBe('USER')
      expect(gameService.getTheWinner('PAPER', 'ROCK')).toBe('COMPUTER')
    });

    it("should return who is the winner if user plays scissors", function() {
      expect(gameService.getTheWinner('ROCK', 'SCISSORS')).toBe('COMPUTER')
      expect(gameService.getTheWinner('SCISSORS', 'SCISSORS')).toBe('TIE')
      expect(gameService.getTheWinner('PAPER', 'SCISSORS')).toBe('USER')
    });

  });

});
