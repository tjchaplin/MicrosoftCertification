/// <reference path="_namespace.js" />

conference.geometry = (function () {

    var radiusOfEarthInMiles = 3963.1676;

    var radians = function (degrees) {
        return degrees * Math.PI / 180;
    };

    var distanceInMiles = function (p1, p2) {
        var lat1 = p1.latitude; // inputs are in decimal degrees
        var lon1 = p1.longitude;
        var lat2 = p2.latitude;
        var lon2 = p2.longitude;

        var dLat = radians(lat2 - lat1);
        var dLon = radians(lon2 - lon1);
        lat1 = radians(lat1);
        lat2 = radians(lat2);

        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return radiusOfEarthInMiles * c;
    };

    return {
        radians: radians,
        distanceInMiles: distanceInMiles
    };
    
} ());
