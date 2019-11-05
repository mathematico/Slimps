var img_emptylot = new Image();
img_emptylot.src = "./Resources/building/emptylot.png"
var img_ferme= new Image();
img_ferme.src="./Resources/building/farm.png"
var img_house= new Image();
img_house.src="./Resources/building/house.png"
var img_mine= new Image();
img_mine.src="./Resources/building/metal_mine.png"
var img_cmine= new Image();
img_cmine.src="./Resources/building/crystal_mine.png"

var EMPTY = 0;
var HOUSE = 1;
var FARM = 2;
var MMINE = 3;
var CMINE = 4;

var map_building_type_to_img = new Map();
map_building_type_to_img.set(EMPTY , img_emptylot);
map_building_type_to_img.set(HOUSE , img_house);
map_building_type_to_img.set(FARM , img_ferme);
map_building_type_to_img.set(MMINE , img_mine);
map_building_type_to_img.set(CMINE , img_cmine);

class building {

  constructor(x,y,type) {
    console.log("called building constructor(x =",x,",y=",y,",type=",type,")")
    this.x = x;
    this.y = y;
    this.type = type;
    this.texAtlas = map_building_type_to_img.get(type);
    //~ if(type==HOUSE){
      //~ this.texAtlas = img_house;
    //~ }else if(type==FARM){
      //~ this.texAtlas = img_ferme;
    //~ }else if(type==MMINE){
      //~ this.texAtlas = img_mine;
    //~ }else if(type==CMINE){
      //~ this.texAtlas = img_cmine;
    //~ }

  }
}


function newbuilding(x,y, type){
	var mustreplace =false;
	var replaceindex = 0;
	u=new building(x,y,type)
	if (A_building.length==0){
		A_building.push(u)
	} else {
		for(var z = 0; z<= A_building.length-1;++z ){
			if(A_building[z].x==u.x && A_building[z].y==u.y ){
				mustreplace = true;
				replaceindex = z;
			}else{
			}
		}
	}
	if (! mustreplace){
		A_building.push(u)
	}else{
		A_building[replaceindex] = u;
	}
	 tmap_buildings[u.x][u.y]=u
}
  

    //~ for(var z = 0; z<= A_building.length-1;++z ){   //update ALL OF tmap_buildings. Probably overkill.
      //~ u=A_building[z]
      //~ tmap_buildings[u.x][u.y]=u

    //~ }
//~ }
