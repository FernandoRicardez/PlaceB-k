
var mapStyle = [
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#8000ff"
      },
      {
        "weight": 0.5
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "weight": 4
      }
    ]
  }
];

var iconSelected = "food";

function initMap() {
    var laSalleBajio = {lat: 21.150908, lng: -101.71110470000002};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: laSalleBajio,
      styles : mapStyle
    });
    var marker = new google.maps.Marker({
      position: laSalleBajio,
      map: map,
      icon: icons['food'].icon
    });


       google.maps.event.addListener(map, 'click', function(event) {
      var lat = event.latLng.lat(); 
      var lng = event.latLng.lng(); 
      
      var markerSpot = {lat: lat, lng: lng};
      var marker = new google.maps.Marker({
        position: markerSpot,
        map: map,
        icon: icons[iconSelected].icon
      });
    }); 
    
  }

  
  

  var iconBase = 'images/smallIcons/';
        var icons = {
          food: {
            icon: iconBase + 'restaurant.png'
          },
          sport: {
            icon: iconBase + 'sport.png'
          },
          info: {
            icon: iconBase + 'info-i_maps.png'
          }
        };
 
$(".iconPlaces-bar").on("click", function() {
  iconSelected = $(this).attr("alt");

  $(".iconPlaces-bar").css("background", "white");
  $(this).css("background", "blue");

})