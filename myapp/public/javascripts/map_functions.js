// showing markers on map
function setMarker(data) {
    for (i = 0; i < data.coords.length; i++) {
        var thisPosition = data.coords[i];
        var myLatLng = new google.maps.LatLng(thisPosition.lat, thisPosition.lon);
        var date = new Date(thisPosition.timestamp);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: date.toString()
        });
        if (thisPosition.bounce) {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        } else {
            marker.setAnimation(null);
        }
    }
}
