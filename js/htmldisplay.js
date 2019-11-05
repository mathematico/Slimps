//takes care of HTML elements other than the canvas

var buildinginfo_element = document.getElementById("buildinginfomenu");
var selectbuilding_element = document.getElementById("selectbuildingmenu");
var is_constructing = false;

function openlefttab(which) {
	if (which == 0) {
		buildinginfo_element.style.display = "block";
		selectbuilding_element.style.display = "none";
		is_constructing = false;
	}
	if (which == 1) {
		selectbuilding_element.style.display = "block";
		buildinginfo_element.style.display = "none";
		is_constructing = true;
	}
}


function on_selected_building_type(i) {
	selected_building_type = i;  //in main.js
	//~ console.log("on_selected_building_type ",selected_building_type);
	selected_building_preview_element.src = map_building_type_to_img.get(selected_building_type).src;
}


function display_info_on_building_at(x,y) {
	let building = tmap_buildings[x][y];  // without "let" this would overwrite the building constructor !!!!!
	buildinginfo_element.innerHTML = "Building is of type "+building.type;
}


function display_ressources_element() {
	var temprestext = "";
	for (var i = 0; i <= ressources_stock.length-1;++i ) {
		temprestext = temprestext + "<br>" + ressources[i]+ " : "+  ressources_stock[i] ;
	}
	ressources_list_element.innerHTML =temprestext;
}