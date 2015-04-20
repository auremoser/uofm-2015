window.onload = function () {
  //
    var vizjson_url = 'https://team.cartodb.com/u/aureliamoser/api/v2/viz/c03a644e-e45a-11e4-9d34-0e0c41326911/viz.json'; // <-- Paste viz.json URL between quotes

   var options = {
       sql: "SELECT * FROM tl_2014_census_tracts",
       // cartocss: ""
   }

   var sublayers = [];

   // instantiate map object from Leaflet
   var mapObj = new L.Map(map, {  // <-- Replace map_id with your #id for rendering
       center: [41.8369, -87.6847], // Chicago, IL
       zoom: 7 // zoom projection to adjust starting point zoom
   });


   // add basemap tiles
   L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
       attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(mapObj);

   // add data tile layers here (if you have multiple layers, you can manipulate them in js here)
   cartodb.createLayer(mapObj,vizjson_url)
       .addTo(mapObj)
       .done(function(layer) {
           console.log("Map successfully created.");
           sublayers[0] = layer.getSubLayer(0);
           sublayers[1] = layer.getSubLayer(1);
           sublayers[1].set(options); // altering the SQL and CartoCSS; see above
           sublayers[1].hide(); // hiding the traffic data
       })
       .error(function(err) {
           console.log("Map not created: " + err);
       });
}
