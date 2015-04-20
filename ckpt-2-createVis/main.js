window.onload = function() {
    var vizjson_url = 'https://team.cartodb.com/u/aureliamoser/api/v2/viz/c03a644e-e45a-11e4-9d34-0e0c41326911/viz.json'; // <-- Paste viz.json URL between quotes

    cartodb.createVis(map, vizjson_url) // <-- Change map_id to match your id in html
        .done(function(vis, layers) {
            // do stuff
            console.log("Map successfully created");
        })
        .error(function(err) {
            // report error
            console.log("An error occurred: " + err);
        });
}