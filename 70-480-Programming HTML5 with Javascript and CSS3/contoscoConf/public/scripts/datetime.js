/// <reference path="_namespace.js" />
    
(function () {

    conference.parseTimeAsTotalMinutes = function(timeString) {
        var timeParts = timeString.split(":");
        return parseInt(timeParts[0], 10) * 60 + parseInt(timeParts[1], 10);
    };

    conference.formatTime = function (totalSeconds) {
        var hours = Math.floor(totalSeconds / 3600);
        var minutes = Math.floor((totalSeconds - hours * 3600) / 60);
        var seconds = Math.floor(totalSeconds - hours * 3600 - minutes * 60);

        var parts = [];
        var add = function (value) {
            if (value < 10) {
                parts.push("0" + value);
            } else {
                parts.push(value);
            }
        };

        add(hours);
        add(minutes);
        add(seconds);

        return parts.join(":");
    };
    
} ());
