function initMap() {
    // Map options
    var options = {
        zoom: 12,
        center: { lat: 33.5731104, lng: -7.5898434 } // Center of Casablanca
    };

    // New map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Add marker
    var markers = [
        {
            coords: { lat: 33.5731104, lng: -7.5898434 },
            content: '<h2>Casablanca</h2>'
        },
        {
            coords: { lat: 33.594221, lng: -7.642109 }, // Example coordinates for A
            content: '<h2>A - Terminus Tramway Ain Diab</h2>'
        },
        {
            coords: { lat: 33.589886, lng: -7.603869 }, // Example coordinates for B
            content: '<h2>B - Hôpital Universitaire International Cheikh Zaid</h2>'
        }
    ];

    // Loop through markers
    for (var i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }

    // Add Marker Function
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            //icon: props.iconImage
        });

        // Check content
        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener('click', function() {
                infoWindow.open(map, marker);
            });
        }
    }

    // Define the LatLng coordinates for the route.
    const routePathCoords = [
        { lat: 33.594221, lng: -7.642109 }, // Example coordinates for A
        { lat: 33.5731104, lng: -7.5898434 },
        { lat: 33.589886, lng: -7.603869 }  // Example coordinates for B
    ];

    // Create the polyline for the route.
    const routePath = new google.maps.Polyline({
        path: routePathCoords,
        geodesic: true,
        strokeColor: '#000000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });

    routePath.setMap(map);
}

// Load the Google Maps API script
function loadScript() {
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap';
    script.defer = true;
    document.head.appendChild(script);
}

document.addEventListener('DOMContentLoaded', loadScript);
