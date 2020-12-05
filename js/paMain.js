//Vars
var mymap = L.map('paMap').setView([39.960, -75.181], 13.3);


//f(x)

L.tileLayer('https://api.mapbox.com/styles/v1/imichaelowens/ckib099za09z519l1touu59u9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaW1pY2hhZWxvd2VucyIsImEiOiJja2lhY2M4eWQwOHhoMnJuejVsOWs2M3B3In0.mnMMdNz9wVmI1lCDvwgInw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',

    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaW1pY2hhZWxvd2VucyIsImEiOiJja2lhY2hkbGgwb2Y3MzVtbmhxMXJzcHN3In0.JSOmzeCOqMLdh9QeD7fU-Q'
}).addTo(mymap);

for ( let i = 0; i < places.length; i++) {
  L.marker([places[i].latitude, places[i].longitude])
  .bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].desc + '</p>')
  .addTo(mymap);
}
