var map_main_height=640
var map_main_width=640
var tmap_x=0,tmap_y=0,tmap_w=320,tmap_h=320,tmap_nx=5,tmap_ny=5;
var tmpa_tw=64,tmpa_th=64;
var canvas = document.getElementById("map_main");
canvas.width=640
canvas.height=320
var ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", getPosition, false);

function getPosition(event)
{
  var m_x = event.x;
  var m_y = event.y;
  m_x -= canvas.offsetLeft;
  m_y -= canvas.offsetTop;
console.log(m_x,m_y)
  mouseclick(m_x,m_y)
}
