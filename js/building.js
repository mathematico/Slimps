var img_ferme= new Image();
img_ferme.src="./Resources/building/147.png"
var img_house= new Image();
img_house.src="./Resources/building/189.png"
var img_mine= new Image();
img_mine.src="./Resources/building/190.png"
var img_cmine= new Image();
img_cmine.src="./Resources/building/180.png"

class building {

  constructor(x,y,id) {
    this.x = x;
    this.y = y;
    this.id = id;
    if(id==1){
      this.texAtlas = img_ferme
    }else if(id==2){
      this.texAtlas = img_house
    }
    else if(id==3){
      this.texAtlas = img_mine
    }else if(id==4){
      this.texAtlas = img_cmine
    }

  }
}
function newbuilding(x,y){
  var t=0
  var T=0
  u=new building(x,y,1)
  if (A_building.length==0){
      A_building.push(u)
  } else {
    for(var z = 0; z<= A_building.length-1;++z ){
      if(A_building[z].x==u.x && A_building[z].y==u.y ){
        t=1
        T=z
      }else{
      }
  }
  if (t==0){
    A_building.push(u)
  }else{
    A_building[T].id+=1
    id=A_building[T].id
    if(id==1){
      A_building[T].texAtlas = img_ferme
    }else if(id==2){
      A_building[T].texAtlas = img_house
    }
    else if(id==3){
      A_building[T].texAtlas = img_mine
    }else if(id==4){
      A_building[T].texAtlas = img_cmine
    }
  }
  }

    for(var z = 0; z<= A_building.length-1;++z ){   //update ALL OF tmap_buildings. Probably overkill.
      u=A_building[z]
      tmap_buildings[u.x][u.y]=u

    }
}
