//Base class for Units, do not use directly. Use classes that inherit from it.

var unitTexture = new Image(32, 32);
unitTexture.src="./Resources/patate.png"

class Unit {
  textureAtlas;
  x = 0;
  y = 0;
  width = 32;
  heigth = 32;
  hp = 1;
  atk = 1;
  spd = 1 ;

  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.hp = 1;
    this.atk = 1;
    this.spd = 1;
    this.width = 32;
    this.heigth = 32;
    this.textureAtlas = unitTexture
  }

  move(xdir, ydir) {
    x += xdir
    y += ydir
  }

}
