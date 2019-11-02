//functions for sorting an array of Units,   usage :    A_unites.sort(ysort)
function ysort(a,b) {
  return a.y > b.y ? 1 : (a.y == b.y ? 0 : -1)
  }


//Base class for Units, do not use directly. Use classes that inherit from it.

var unitTexture = new Image(32, 32);
unitTexture.src = "./Resources/patate.png" ;

class Unit {
  //~ texAtlas;
  //~ x = 0;
  //~ y = 0;
  //~ width = 32;
  //~ heigth = 32;
  //~ hp = 1;
  //~ atk = 1;
  //~ spd = 1 ;

  constructor(x,y) {
    this.deleteme = false // if true, Unit won't be drawn and may be replaced in A_Unites
    this.x = x;
    this.y = y;
    this.hp = 1;
    this.atk = 1;
    this.spd = 1;
    this.width = 32;
    this.heigth = 32;
    this.texAtlas = unitTexture
  }

  move(xdir, ydir) {
    this.x += xdir
    this.y += ydir
      if (this.x>map_main_width) {
        this.deleteme = true ;
        //console.log(A_unites.length)
    }
  }

}
