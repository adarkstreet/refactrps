$(document).ready( function() {

  var options = ['Rock', 'Paper', 'Scissors'];
  var computer;
  var user;
  var result;
  var userLabel = document.getElementById('user');
  var computerLabel = document.getElementById('computer');
  var winnerLabel = document.getElementById('winner');

// $(selector).action() selector to find the Html element, and a jquery action to be
// performed on that html element. 
// $(selector).function( {
// })
//   .class and #id and 'h1' go in the selector.
  $(choice).on(click, startGame)

  function startGame(e) {
    user = e.target.id;
    computer = computerChoice();
    compare();
    printResults();
  }

  function compare() {
    userIndex = options.indexOf(user);
    computerIndex = options.indexOf(computer);

    
  }


  // use a switch statement on the user choice return box,
  //  the computer return box, and the comparrison of the two.
  // the winner can just be a return of the winner in the
  // comparison jQuery method.
});