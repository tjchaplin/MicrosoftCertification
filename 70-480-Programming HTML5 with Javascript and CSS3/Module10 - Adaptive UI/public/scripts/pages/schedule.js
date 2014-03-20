/// <reference path="../_namespace.js" />
/// <reference path="../Object.inherit.js" />
/// <reference path="../HtmlTemplate.js" />
/// <reference path="../LocalStarStorage.js" />
/// <reference path="../datetime.js" />

(function () {
    "use strict";
    
    // Import objects/functions from the conference namespace.
    var HtmlTemplate = conference.HtmlTemplate;
    var LocalStarStorage = conference.LocalStarStorage;
    var parseTimeAsTotalMinutes = conference.parseTimeAsTotalMinutes;


    var ScheduleItem = Object.inherit({

        initialize: function (data, localStarStorage) {
            this.id = data.id;
            this.tracks = data.tracks;
            this.localStarStorage = localStarStorage;

            this.element = this.scheduleItemTemplate.createElement(data);

            if (localStarStorage.isStarred(this.id)) {
                this.element.classList.add(this.starredClass);
            }

            this.initializeElementClass();
            this.initializeElementPosition(data.start, data.end);
            this.addStarClickEventHandler();
        },

        scheduleItemTemplate: HtmlTemplate.create("schedule-item"),

        initializeElementClass: function () {
            if (this.isInTrack(1) && this.isInTrack(2)) {
                this.element.classList.add("both-tracks");
            } else if (this.isInTrack(1)) {
                this.element.classList.add("track-1");
            } else if (this.isInTrack(2)) {
                this.element.classList.add("track-2");
            }
        },

        initializeElementPosition: function (start, end) {
            var startTimeInMinutes = parseTimeAsTotalMinutes(start);
            var endTimeInMinutes = parseTimeAsTotalMinutes(end);
            var pixelsPerMinute = 2;
            var conferenceStartTimeInMinutes = 8 * 60 + 30;
            this.element.style.top = pixelsPerMinute * (startTimeInMinutes - conferenceStartTimeInMinutes) + "px";
            this.element.style.height = pixelsPerMinute * (endTimeInMinutes - startTimeInMinutes) + "px";
        },

        addStarClickEventHandler: function () {
            var starElement = this.element.querySelector(".star");
            starElement.addEventListener("click", this.toggleStar.bind(this), false);
        },

        isInTrack: function (track) {
            return this.tracks.indexOf(track) >= 0;
        },

        starredClass: "starred",

        toggleStar: function () {
            if (this.isStarred()) {
                this.unsetStar();
            } else {
                this.setStar();
            }
        },

        isStarred: function () {
            return this.element.classList.contains(this.starredClass);
        },

        unsetStar: function () {
            this.element.classList.remove(this.starredClass);
            this.postStarChange(false);
            this.localStarStorage.removeStar(this.id);
        },

        setStar: function () {
            this.element.classList.add(this.starredClass);
            this.postStarChange(true);
            this.localStarStorage.addStar(this.id);
        },

        postStarChange: function (isStarred) {
            var request = $.ajax({
                type: "POST",
                url: "/schedule/star/" + this.id,
                data: { starred: isStarred },
                context: this
            });
            request.done(function (responseData) {
                this.updateStarCount(responseData.starCount);
            });
        },

        updateStarCount: function (starCount) {
            var starCountElement = this.element.querySelector(".star-count");
            starCountElement.textContent = starCount.toString();
        },

        show: function () {
            this.element.style.display = "block";
        },

        hide: function () {
            this.element.style.display = "none";
        }
    });

    // TODO: Create a ScheduleList factory object using the Object.inherit helper method.
    var ScheduleList = Object.inherit({
        initialize : function(element,localStorage){
            this.element = element;
            
            this.localStarStorage = localStorage;
            console.log(this.localStarStorage );
        },
        startDownload : function() {
            var self = this;
            var request = $.ajax({
                url: "/schedule/list",
                // TODO: When refactoring, add the following property
                context: this
                });
            request.done(self.downloadDone)
                    .fail(self.downloadFailed);
        },
        downloadDone : function(responseData) {
            //console.log(responseData);
            var data = JSON.parse(responseData);
            this.addAll(data);
        },
        downloadFailed : function() {
            alert("Could not retrieve schedule data at this time. Please try again later.");
        },
        addAll : function(itemsArray) {
            itemsArray.forEach(this.add,this); // TODO: When refactoring this, add the `this` argument to `forEach`.
        },
        add : function (itemData) {
            console.log(this)
            var item = ScheduleItem.create(itemData, this.localStarStorage);
            element.appendChild(item.element);
        }
    });

    
    // TODO: Replace the following code by creating a ScheduleList object 
    //       and calling the startDownload method.
    var element = document.getElementById("schedule");
    //var localStarStorage = LocalStarStorage.create();
    var scheduleList = ScheduleList.create(element,LocalStarStorage.create(localStorage));
    scheduleList.startDownload();

} ());