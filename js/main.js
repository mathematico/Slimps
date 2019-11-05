var lastFrameTimeMs = 0, // The last time the loop was run
    maxFPS = 30, // The maximum FPS we want to allow
    fps = maxFPS,  //the measured fps at this moment. Initialized to the target FPS. Calculated with an exponentially ponderated sliding average.
    framesThisSecond = 0,
    lastFpsUpdate = 0,  // The last time the current FPS was calculated
    fpsUpdatePeriod = 1000, // How often, in ms, the FPS  is recalculated
    updateperiod = 1000 / maxFPS,  //the set period at which update will be called, if possible
    delta = 0; // The delta time since last frame

var selected_building_type = 0;

var A_unites=[]
var A_building=[]
var A_unites_ysorted = []

// Assumes we've added <div id="fpsDisplay"></div> to the HTML
var fpsDisplay = document.getElementById('fpsDisplay');
var canvas = document.getElementById("map_main");

var selected_building_preview_element = document.getElementById("selected_building_preview_img");

canvas.width=640
canvas.height=320
var ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", getPosition, false);


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
  for(var y = 0; y<= A_unites.length-1;++y ){
  if ( ! A_unites[y].deleteme) {  //if unit is valid...
       var u = A_unites[y];
       u.move(u.spd, 0);
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

function on_selected_building_type(i) {
	selected_building_type = i;
	console.log("on_selected_building_type ",selected_building_type);
	selected_building_preview_element.src = map_building_type_to_img.get(selected_building_type).src;
}



// Start things off
requestAnimationFrame(mainLoop);
