var img_gazon= new Image();
img_gazon.src="./Resources/gazon.png"

var img_gazon_route= new Image();
img_gazon_route.src="./Resources/gazonroute.png"

var img_patate= new Image();
img_patate.src="./Resources/patate.png"


//function for sorting an array of Units, Building etc for drawing,   usage :    A_unites.sort(ysort)
function ysort(a,b) {
  return a.y > b.y ? 1 : (a.y == b.y ? 0 : -1)
}


function drawmap(){
  for(var x =0; x<= tmap.length-1;++x ){
    for(var y=0; y<=tmap[x].length-1;++y){
      if (tmap[x][y]==1){
        ctx.drawImage(img_gazon, x*tmap_tw +tmap_x, y*tmap_th+tmap_y,tmap_tw,tmap_th)
      }else if (tmap[x][y]==2) {
        ctx.drawImage(img_gazon_route, x*tmap_tw +tmap_x, y*tmap_th+tmap_y,tmap_tw,tmap_th)
      }else{
        u=tmap[x][y]
        ctx.drawImage(u.texAtlas,u.x*tmap_tw +tmap_x,y*tmap_th+tmap_y,64,64)
      }
    }
  }
}
function clearcanvas(){
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}


function mouseclick(x,y){
  var xc= math.floor(x/tmap_tw)
  var yc= math.floor(y/tmap_th)
  if(x<=tmap_w&&tmap_x<=x&&y<=tmap_h&&tmap_y<=y){
    newbuilding(xc,yc)
  }else{
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
