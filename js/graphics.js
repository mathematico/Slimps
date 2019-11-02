var img_gazon= new Image();
img_gazon.src="./Resources/gazon.png"

var img_gazon_route= new Image();
img_gazon_route.src="./Resources/gazonroute.png"

var img_patate= new Image();
img_patate.src="./Resources/patate.png"


function drawmap(){
  for(var y =0; y<= tmap.length-1;++y ){
    for(var x=0; x<=tmap[y].length-1;++x){
      if (tmap[y][x]==1){
        ctx.drawImage(img_gazon, x*tmap_tw +tmap_x, y*tmap_th+tmap_y,tmap_tw,tmap_th)
      }else if (tmap[y][x]==2) {
        ctx.drawImage(img_gazon_route, x*tmap_tw +tmap_x, y*tmap_th+tmap_y,tmap_tw,tmap_th)
      }
    }
  }
}
function clearcanvas(){
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function mouseclick(x,y){
  //A_unites.push( new Unit(x,y) );
  console.log("Adding Unit ! ");
  add_unit( new Unit(x,y) ) ;
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
