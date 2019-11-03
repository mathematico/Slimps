// Add the unit to A_unites, overwriting deleted units if one is found, then adds units to the ysort-ed  real copy of A units
function add_unit(u) {
  for(var i = 0; i<= A_unites.length-1;++i ) {
    if (A_unites[i].deleteme) {
      A_unites[i] = u ;
      A_unites_ysorted = [...A_unites]   // a REAL  copy of A_unites, so modifying its order won t affect A_unites
      A_unites_ysorted.sort(ysort) ;
      return;
    }
  }
  A_unites.push(u) ;
  A_unites_ysorted = [...A_unites]   // a REAL  copy of A_unites, so modifying its order won t affect A_unites
  A_unites_ysorted.sort(ysort) ;
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
