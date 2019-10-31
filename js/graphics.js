var img_gazon= new Image();
img_gazon.src="./Resources/gazon.png"

var img_gazon_route= new Image();
img_gazon_route.src="./Resources/gazonroute.png"
function drawmap(){
  for(var y =0; y<= tmap.length-1;++y ){
    for(var x=0; x<=tmap[y].length-1;++x){
      console.log(x,y)
      if (tmap[x][y]==1){
        ctx.drawImage(img_gazon, y*tmpa_tw +tmap_x, x*tmpa_th+tmap_y,tmpa_tw,tmpa_th)
      }else if (tmap[x][y]==2) {
        ctx.drawImage(img_gazon_route, y*tmpa_tw +tmap_x, x*tmpa_th+tmap_y,tmpa_tw,tmpa_th)
      }
    }
  }
}
drawmap()
