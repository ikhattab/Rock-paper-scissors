angular
  .module('game')
  .controller('MainController', MainController);

function MainController(gameService, $timeout) {
  var vm = this;
  vm.startGame = function(choice) {
    vm.computerChoice = null;
    vm.userChoice = null;
    vm.result = null;
    vm.animate = true;
    $timeout(function() {
      vm.animate = false;
      vm.userChoice = choice;
      vm.computerChoice = gameService.getRandomChoice();
      vm.result = gameService.getTheWinner(vm.computerChoice, vm.userChoice);
    }, 1500);
  };
}
