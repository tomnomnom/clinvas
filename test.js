var clinvas = require('./clinvas.js');

clinvas.setPixel([10,10], '*');

clinvas.line([1,1], [40,22], '*');

setInterval(function(){
  clinvas.clearScreen();
  clinvas.drawScreen();
}, 50);
