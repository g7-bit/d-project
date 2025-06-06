mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map", // container ID

  style: "mapbox://styles/mapbox/streets-v12",
  // starting position [lng, lat]. Note that lat must be set between -90 and 90
  center: listing.geometry.coordinates,
  zoom: 11, // starting zoom
});

// console.log(coordinates)

// Create a default Marker and add it to the map.
const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${listing.title}</h4><p>Exact location provided after booking</p>`
    )
  )
  .addTo(map);
