console.log('Loaded');
// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

// ADD LOCATIONS TO INDEX.HTML
axios.get(weekly_quakes_endpoint) 
    .then(res => {
      let earthLoc = document.getElementById('info');
      
      let quakes =res.data.features;
      quakes.forEach( i => {
        let title = document.createElement('p');
        qInfo = i.properties.title;
        earthLoc.appendChild(title)
        title.innerHTML = qInfo
      });
    });

//     console.log(res);
//     console.log("Let's get coding!"); 
//   });
  // CODE IN HERE!

// Creating MAP using coordinates

var map;
// document.ready(function() {
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 34.013, lng: -118.495},
          zoom: 8
        });
      }
initMap(); 