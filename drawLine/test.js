var testCollision = setInterval(function() {
  // collision logic here
}, 2);
setTimeout(function() {
  clearInterval(testCollision);
  // post-fire logic here (win,lose, score, etc.)
}, 1200);
