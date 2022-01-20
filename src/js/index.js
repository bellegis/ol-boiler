import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

//initialize the map
const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  target: 'map',
  view: new View({
    center: [-8111697.401311302,2450572.315615977],
    zoom: 5
  })
});

//function to get the current extent and zoom level 
function getBounds() {
    const currentCenter = map.getView().getCenter() 
    const currentZoom = map.getView().getZoom()
    return "Center: " + currentCenter + "\nZoom:" +  currentZoom
  }

//print current zoom level on drag
map.on('moveend', function (e) {
    console.log(getBounds())
});