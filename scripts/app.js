console.log('Loaded');
// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

// ADD LOCATIONS TO INDEX.HTML
axios.get(weekly_quakes_endpoint) 
    .then(res => {
      let earthLoc = document.getElementById('info');
    // This is for the quake info  
      let quakes =res.data.features;
      quakes.forEach( i => {
        let title = document.createElement('p');
        qInfo = i.properties.title;
        earthLoc.appendChild(title)
        title.innerHTML = qInfo
    // This is for the coordinates
        var coords = i.geometry.coordinates;
        var latLng = new google.maps.LatLng(coords[1], coords[0]);
        var custMark = '/images/earthquake.png';
        var marker = new google.maps.Marker({
          position: latLng,
          map: map,
          icon: {
            url: custMark,
            scaledSize: new google.maps.Size(20, 20)
          }
        });
      })
    });

// GET COORDINATES to input to Google Map:
// axios.get(weekly_quakes_endpoint)
//     .then(res=> {
//       let quakes = res.data.features;
//       quakes.forEach( i=> {
//         coord = i.geometry.coordinates;
//       console.log(coord);
//     })




// Creating MAP using coordinates

var map
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 34.013, lng: -118.495},
          zoom: 8
        })
      }
initMap()