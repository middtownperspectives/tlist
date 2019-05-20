let denverPublicLibrary = [39.737598, -104.988083];
let streetViewDenverPublicLibrary = [39.7371519, -104.98854];

let breakfast = [39.736831, -104.991239];
let coffee =    [39.734232, -104.987659];
let burger =    [39.735021, -104.987632];
let beer =      [39.736992, -104.990850];
let park =      [39.739208, -104.988842];

$('.map')
.gmap3({
  center:denverPublicLibrary,
  zoom:15,
  navigationControl: true,
  scrollwheel: true,
  streetViewControl: true
})
.marker([
    {position: denverPublicLibrary},
    {position: breakfast, icon: "assets/icon-png/pancake.png"},
    {position: beer, icon: "assets/icon-png/beer.png"},
    {position: park, icon: "assets/icon-png/park.png"},
    {position: burger, icon: "assets/icon-png/burger.png"},
    {position: coffee, icon: "assets/icon-png/coffee.png"}
  ]).streetviewpanorama(
    '#panorama',
    {
      position: streetViewDenverPublicLibrary,
      pov: {
        heading: 34,
        pitch: 10,
        zoom: 1
      }
    }
  )
.on('click', function (marker) {
  marker.setIcon('https://maps.google.com/mapfiles/marker_green.png');
});
