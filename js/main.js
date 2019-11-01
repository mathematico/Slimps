var lastFrameTimeMs = 0, // The last time the loop was run
    maxFPS = 30, // The maximum FPS we want to allow
    fps = maxFPS,  //the measured fps at this moment. Initialized to the target FPS. Calculated with an exponentially ponderated sliding average.
    framesThisSecond = 0,
    lastFpsUpdate = 0,  // The last time the current FPS was calculated
    fpsUpdatePeriod = 1000, // How often, in ms, the FPS  is recalculated
    updateperiod = 1000 / maxFPS,  //the set period at which update will be called, if possible
    delta = 0; // The delta time since last frame

var map_main_height=640, map_main_width=640
var tmap_x=0,tmap_y=0,tmap_w=320,tmap_h=320; //tmap_nx=5,tmap_ny=5;
var tmap_tw=64,tmap_th=64;  // Dimensions of a tile
var A_unites=[]
// Assumes we've added <div id="fpsDisplay"></div> to the HTML
var fpsDisplay = document.getElementById('fpsDisplay');
var canvas = document.getElementById("map_main");
canvas.width=640
canvas.height=320
var ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", getPosition, false);


function mainLoop(timestamp) {
  // Throttle the frame rate.
  if (timestamp < lastFrameTimeMs + (1000 / maxFPS)) {
    requestAnimationFrame(mainLoop);
    return;
  }
  // Track the accumulated time that hasn't been simulated yet
  delta += timestamp - lastFrameTimeMs; // note += here, we need to keep the leftover time from the last frame
  lastFrameTimeMs = timestamp;

  // Simulate the total elapsed time in fixed-size chunks
  var numUpdateSteps = 0;
  while (delta >= updateperiod) {
    update(updateperiod);
    delta -= updateperiod;
    // Sanity check
    if (++numUpdateSteps >= 120) {  // if it took more than 4s to catch up, panic()
      panic(); // fix things
      break; // bail out
    }
  }

  //Calculate the FPS every fpsUpdatePeriod miliseconds
  if (timestamp > lastFpsUpdate + fpsUpdatePeriod) { // update every fpsUpdatePeriod miliseconds... WRONG IF fpsUpdatePeriod != 1000  :(
    fps = ( 0.25 * framesThisSecond + (1 - 0.25) * fps ) / (fpsUpdatePeriod/1000) ; // compute the new FPS, 0.25 is how much the new period is weighted
    lastFpsUpdate = timestamp;
    framesThisSecond = 0;
  }
  framesThisSecond++;

  requestAnimationFrame(mainLoop);
  lastFrameTimeMs = timestamp;
  update(delta); // pass delta to update
  draw();
}




//if all goes well, delta == updateperiod
function update(delta) {
  return;
}


function draw() {
  fpsDisplay.textContent = Math.round(fps) + ' FPS'; // display the FPS
  clearcanvas()
  for(var y = 0; y<= A_unites.length-1;++y ){
      if (A_unites[y][0]==1){
          ctx.drawImage(img_patate,A_unites[y][1],A_unites[y][2],A_unites[y][3],A_unites[y][4])
          A_unites[y][1]+=1



    }
  }
}


//take measures  that speed  up the execution of the code, like disabling unimportant tasks
function panic() {
//  delta = 0;  //I guess setting the heap of updates that need to be done back to 0 will help catch up !
}


function getPosition(event)
{
    var m_x = event.x;
    var m_y = event.y;
    m_x -= canvas.offsetLeft;
    m_y -= canvas.offsetTop;
    mouseclick(m_x,m_y)
}


// Start things off
requestAnimationFrame(mainLoop);
