var map_main_height=640, map_main_width=640
var tmap_x=32,tmap_y=32,tmap_w=320,tmap_h=240; //tmap_nx=5,tmap_ny=5;
var tmap_tw=64,tmap_th=48;  // Dimensions of a village tile
var tmap_bw = 48, tmap_bh = 32; //space between roads taken by buildings

var img_villageground= new Image();
img_villageground.src="./Resources/villlage_ground.png"

var img_emptylot= new Image();
img_emptylot.src="./Resources/emptylot.png"

var img_patate= new Image();
img_patate.src="./Resources/patate.png"


//function for sorting an array of Units, Building etc for drawing,   usage :    A_unites.sort(ysort)
function ysort(a,b) {
  return a.y > b.y ? 1 : (a.y == b.y ? 0 : -1)
}


function drawmap(){  //draw the village ground and tilemap
  ctx.drawImage(img_villageground,tmap_x - 0 ,tmap_y - 0,19*16,16*16)
  for(var x =0; x<= tmap_buildings.length-1;++x ){
    for(var y=0; y<=tmap_buildings[x].length-1;++y){
      b = tmap_buildings[x][y] ;
      if (b) {  //elements of tmap[x] are initialized to "    false      "  boolean
         ctx.drawImage(b.texAtlas,x*tmap_tw +tmap_x,y*tmap_th+tmap_y,tmap_bw,tmap_th)
      }else{
         ctx.drawImage(img_emptylot,x*tmap_tw +tmap_x,y*tmap_th+tmap_y,tmap_bw,tmap_th)
      }
      //~ if (tmap[x][y]==1){
        //~ ctx.drawImage(img_gazon, x*tmap_tw +tmap_x, y*tmap_th+tmap_y,tmap_tw,tmap_th)
      //~ }else if (tmap[x][y]==2) {
        //~ ctx.drawImage(img_gazon_route, x*tmap_tw +tmap_x, y*tmap_th+tmap_y,tmap_tw,tmap_th)
      //~ }else{
        //~ u=tmap[x][y]
        //~ ctx.drawImage(u.texAtlas,u.x*tmap_tw +tmap_x,y*tmap_th+tmap_y,tmap_bw,tmap_th)
      //~ }
    }
  }
}
function clearcanvas(){
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}


function mouseclick(x,y){
    if ( (x<=tmap_x+tmap_w&&tmap_x<=x&&y<=tmap_y+tmap_h&&tmap_y<=y) //clicked on the village
        && ( (x-tmap_x)%tmap_tw < tmap_bw && (y-tmap_y)%tmap_th > tmap_th-tmap_bh ) ) { // didn't click on a road
        var xc= math.floor((x-tmap_x)/tmap_tw)
        var yc= math.floor((y-tmap_y)/tmap_th)
        newbuilding(xc,yc)
        console.log("new building at", xc, ",",yc)
    }
    if ( x>tmap_x+tmap_w ) {
        console.log("Adding Unit ! ");
        add_unit( new Unit(x,y) ) ;
        A_unites.push( new Unit(x,y) );
    }
}

function draw() {
  //console.log(A_unites.length);
  fpsDisplay.textContent = Math.round(fps) + ' FPS'; // display the FPS
  clearcanvas()
  drawmap()
  for(var y = 0; y<= A_unites_ysorted.length-1;++y ){

      if ( ! A_unites_ysorted[y].deleteme) {  //if unit is valid...
          var u = A_unites_ysorted[y]
          ctx.drawImage(u.texAtlas, u.x, u.y, u.width, u.heigth)
      }




  }
}