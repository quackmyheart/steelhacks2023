  let map;

  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 13,
    });
  }
  
  window.initMap = initMap;

function findMyLocation(marker) {
  const status = document.getElementById("status");

  const success = (position) => {
    console.log(position)
    const lat = position.coords.latitude; 
    const long = position.coords.longitude; 
    console.log(lat, long); 
    
    // setting new location on map 
    var latlng = new google.maps.LatLng(parseFloat(lat), parseFloat(long));
    marker.setPosition(latlng);
    // set the new center 
    map.setCenter(latlng);
    // update where people are 
    var text = document.createTextNode("latitude: " + parseFloat(lat) + " " +"longitude: " + parseFloat(long)
                                      ); 
    peoplesLocations.appendChild(text);
  }

  const error = () => {
    stats.textContent = "Unable to get location"
  }

  navigator.geolocation.getCurrentPosition(success, error); 

} 

window.onload=function(){
  var marker = new google.maps.Marker({
  position:{ lat: -34.397, lng: 150.644 },
  map:map
  }); 
  locationButton = document.getElementById("locButton"); 
  locationButton.addEventListener("click", findMyLocation(marker)); 
}
  
