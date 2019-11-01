var img_gazon= new Image();
img_gazon.src="./Resources/gazon.png"

var img_gazon_route= new Image();
img_gazon_route.src="./Resources/gazonroute.png"

var img_patate= new Image();
img_patate.src="./Resources/patate.png"


function drawmap(){
  for(var y =0; y<= tmap.length-1;++y ){
    for(var x=0; x<=tmap[y].length-1;++x){
      console.log(x,y)
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
var A_t = []

A_t.push(1)
A_t.push(x)
A_t.push(y)
A_t.push(32)
A_t.push(32)
A_unites.push(A_t)
}
