console.log('Loaded');
// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";


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
      // let quake = res.data.features;
   
  // //     let earthLoc = document.getElementById('info');
  
  //     res.data.data.features.forEach( i => {
  //         let title = document.createElement('p');
  //         title.src = i.properties.title;
  //         imageEl.appendChild(image);
  //     });
  // });

//     console.log(res);
//     console.log("Let's get coding!"); 
//   });
  // CODE IN HERE!
