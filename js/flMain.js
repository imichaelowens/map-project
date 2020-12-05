//Vars
var mymap = L.map('flMap').setView([27.266, -82.490], 12.60);
var markerMayflower = L.marker([27.263525, -82.504757]).addTo(mymap);
var markerCitationclub = L.marker([27.234442, -82.485282]).addTo(mymap);
var markerPasadena = L.marker([27.293318, -82.492843]).addTo(mymap);
var markerBenevaplace = L.marker([27.266617, -82.501199]).addTo(mymap);
var markerColonialgables = L.marker([27.302351, -82.463601]).addTo(mymap);

//Popup binds
markerBenevaplace.bindPopup("This is the first place I lived in Florida!").openPopup(); //Opens automatically
markerCitationclub.bindPopup("These were some really fancy apartments.");
markerPasadena.bindPopup("This is an older community, very quiet.");
markerColonialgables.bindPopup("Loved winter in this house, I had my own window.");
markerMayflower.bindPopup("My favorite place I lived. Complete with a pool, pond and linai.");


//f(x)
L.tileLayer('https://api.mapbox.com/styles/v1/imichaelowens/ckiaclsmq4zfg19plsucgy8n5/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaW1pY2hhZWxvd2VucyIsImEiOiJja2lhY2M4eWQwOHhoMnJuejVsOWs2M3B3In0.mnMMdNz9wVmI1lCDvwgInw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',

    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaW1pY2hhZWxvd2VucyIsImEiOiJja2lhY2hkbGgwb2Y3MzVtbmhxMXJzcHN3In0.JSOmzeCOqMLdh9QeD7fU-Q'
}).addTo(mymap);
