var stage = {
  width: 100,
  height: 25,
  bgChar: ' '
};

var matrix = [];
for (var y = 0; y < stage.height; y++){
  matrix[y] = [];
  for (var x = 0; x < stage.width; x++){
    matrix[y][x] = stage.bgChar;
  }
}

exports.clearScreen = function(){
  process.stdout.write('\u001B[2J\u001B[0;0f');
};

exports.drawScreen = function(){
  var output = '';
  matrix.forEach(function(row){
    row.forEach(function(pixel){
      output += pixel;
    });
    output += "\n";
  });
  process.stdout.write(output);
};

exports.setPixel = function(coords, character){
  var x = coords[0];
  var y = coords[1];
  matrix[y][x] = character;
};

exports.line = function(start, finish, character){
    var x0 = start[0];
    var y0 = start[1];
    var x1 = finish[0];
    var y1 = finish[1];

    var dx = Math.abs(x1 - x0);
    var sx = (x0 < x1)? 1 : -1;

    var dy = -Math.abs(y1 - y0);
    var sy = (y0 < y1)? 1 : -1;

    var err = dx + dy;

    var e2;
    while (true){
      exports.setPixel([x0,y0], character);
      if (x0 == x1 && y0 == y1) break;

      e2 = 2 * err;

      if (e2 >= dy){
        err += dy;
        x0  += sx;
      }

      if (e2 <= dx){
        err += dx;
        y0  += sy;
      }
    }

};
