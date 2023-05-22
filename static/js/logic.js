// step 0, get the data
d3.json("static/data/neigh_mn.geojson").then(function(data) {
    console.log(data);
    makeMap(data.features);
});

function makeMap(features) {
    // STEP 1: Initialize the Base Layers
    // Define streetmap and darkmap layers
    var street = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        maxZoom: 18,
        id: "mapbox/streets-v11",
        accessToken: API_KEY
    });

    var light = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "light-v10",
        accessToken: API_KEY
    });

    var dark = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "dark-v10",
        accessToken: API_KEY
    });


    // Step 2: Make the Overlay Layers

    // make geojson layer here
    var geojsonLayer = L.geoJSON(features, {
        style: function(feature) {
            return {
                color: "purple",
                fillOpacity: 0.3,
                weight: 5
            }
        },
        onEachFeature: function(feature, layer) {
            layer.bindPopup(`<h1>${feature.properties.neighborhood}</h1>`);

            // event listeners
            layer.on({
                mouseover: function(event) {
                    let layer_target = event.target;
                    layer_target.setStyle({ fillOpacity: .75 });
                },
                mouseout: function(event) {
                    let layer_target = event.target;
                    layer_target.setStyle({ fillOpacity: 0.5 });
                }
            });
        }
    });

    // Step 3 - CREATE LAYER DICTIONARIES

    // Define a baseMaps object to hold our base layers
    var baseMaps = {
        "Street Map": street,
        "Dark Map": dark,
        "Light Map": light
    };

    // STEP 4 = INIT THE MAP
    // Create a new map
    var myMap = L.map("map", {
        center: [44.9678, -93.2250],
        zoom: 12,
        layers: [dark, geojsonLayer]
    });

    // MARKERS
    // STEP 5: Add markers for Indigenous events
    var event0 = L.marker([44.92828, -93.12650])
    .bindPopup(`<h2>${"Wild Women, Wild Food, Wathogda Mashkiki!"}</h2>
                <hr>
                <h2>June 17 12:00pm - 5:00pm</h2>
                <hr>
                <h3>Indigenous</h3>
                <hr>
                <a href="https://www.eventbrite.com/e/wild-women-wild-food-wathogda-mashkiki-tickets-639679989067" target="_blank">Link</a>`);
                
    var event1 = L.marker([44.962075, -93.25672])
    .bindPopup(`<h2>${"NACC Ogichidaa-Nagamon"}</h2>
                <hr>
                <h2>June 1 5:00 - 7:00pm <br />
                June 8 5:00 - 7:00pm <br />
                June 15 5:00 - 7:00pm <br />
                June 22 5:00 - 7:00pm <br />
                June 29 5:00 - 7:00pm</h2>
                <hr>
                <h3>Indigenous</h3>
                <hr>
                <a href="https://aifcmn.org/event/nacc-ogichidaa-nagamon/2023-06-01/" target="_blank">Link</a>`);

    var event2 = L.marker([44.967674, -93.075694])
    .bindPopup(`<h2>${"AIFC Dakota Language Series"}</h2>
                <hr>
                <h2>June 1 6:00 - 7:30pm <br />
                June 8 6:00 - 7:30pm <br />
                June 15 6:00 - 7:30pm <br />
                June 22 6:00 - 7:30pm <br />
                June29 6:00 - 7:30pm</h2>
                <hr>
                <h3>Indigenous</h3>
                <hr>
                <a href="https://aifcmn.org/event/dakota-language-night/2023-06-01/" target="_blank">Link</a>`);

    var event3 = L.marker([44.962075, -93.256400])
    .bindPopup(`<h2>${"NACC The Way to Recovery Womens Talking Circle"}</h2>
                <hr>
                <h2>June 2 2:00 - 4:00pm <br />
                June 9 2:00 - 4:00pm <br />
                June 16 2:00 - 4:00pm <br />
                June 23 2:00 - 4:00pm <br />
                June 30 2:00 - 4:00pm</h2>
                <hr>
                <h3>Indigenous</h3>
                <hr>
                <a href="https://aifcmn.org/event/nacc-the-way-to-recovery-womens-talking-circle/2023-06-02/" target="_blank">Link</a>`);

    var event4 = L.marker([44.948179, -93.259237])
    .bindPopup(`<h2>${"Two-Spirit Powwow Regalia Making"}</h2>
                <hr>
                <h2>June 4 12:00 - 5:00pm <br />
                June 14 3:00 - 8:00pm <br />
                June 18 12:00 - 5:00pm</h2>
                <hr>
                <h3>Indigenous</h3>
                <hr>
                <a href="https://aifcmn.org/event/two-spirit-powwow-regalia-making/2023-06-04/" target="_blank">Link</a>`);

    var event5 = L.marker([44.967774, -93.075694])
    .bindPopup(`<h2>${"AIFC: Ombi’ayaa Anishinaabe-Ininiiwug (Rise Up Original Men) Men’s Smudge and Support Group"}</h2>
                <hr>
                <h2>June 5 6:00 - 8:00pm <br />
                June 12 6:00 - 8:00pm <br />
                June 19 6:00 - 8:00pm <br />
                June 26 6:00 - 8:00pm</h2>
                <hr>
                <h3>Indigenous</h3>
                <hr>
                <a href="https://aifcmn.org/event/ombiayaa-anishinaabe-ininiiwug-rise-up-original-men/2023-06-05/" target="_blank">Link</a>`);

    var event6 = L.marker([44.9600342, -93.2534264])
    .bindPopup(`<h2>${"Culture Language Arts Network (CLAN) Drum & Dance"}</h2>
                <hr>
                <h2>June 6 6:30-8pm <br />
                June 13 6:30 - 8:00pm <br />
                June 20 6:30 - 8:00pm <br />
                June 27 6:30 - 8:00pm</h2>
                <hr>
                <h3>Indigenous</h3>
                <hr>
                <a href="https://aifcmn.org/event/culture-language-arts-network-clan-drum-dance/2023-06-06/" target="_blank">Link</a>`);

    var event7 = L.marker([44.967874, -93.075694])
    .bindPopup(`<h2>${"AIFC Women & Mother’s Support Group"}</h2>
                <hr>
                <h2>June 7 12-1:30pm <br />
                June 14 12:00 - 1:30pm</h2>
                <hr>
                <h3>Indigenous</h3>
                <hr>
                <a href="https://aifcmn.org/event/aifc-women-mothers-support-group/2023-06-07/" target="_blank">Link</a>`);

    var event8 = L.marker([44.967874, -93.075694])
    .bindPopup(`<h2>${"AIFC Women & Mother’s Support Group"}</h2>
                <hr>
                <h2>June 7 12-1:30pm</h2>
                <hr>
                <h3>Indigenous</h3>
                <hr>
                <a href="https://aifcmn.org/event/aifc-women-mothers-support-group/2023-06-07/" target="_blank">Link</a>`);

    var event9 = L.marker([44.943899, -93.2440493])
    .bindPopup(`<h2>${"New Native Theatre Two Spirit Powwow"}</h2>
                <hr>
                <h2>June 24 Time TBD</h2>
                <hr>
                <h3>Indigenous</h3>
                <hr>
                <a href="https://aifcmn.org/event/new-native-theatre-two-spirit-powwow/" target="_blank">Link</a>`);

    var indigienous = L.layerGroup([event0, event1, event2, event3, event4, event5, event6, event7, event8, event9]);

    // Overlays that may be toggled on or off
    var overlayMaps = {
        "Target Neighborhoods": geojsonLayer,
        "Indigenous": indigienous
    };

    // STEP 5: Layer Control
    // Create a layer control, containing our baseMaps and overlayMaps, and add them to the map
    L.control.layers(baseMaps, overlayMaps).addTo(myMap);
}
