function doneOrNot (board) {
     board = board.reduce(function(a, b) {
          return a.concat(b);
     }, []);
     
     return board
}