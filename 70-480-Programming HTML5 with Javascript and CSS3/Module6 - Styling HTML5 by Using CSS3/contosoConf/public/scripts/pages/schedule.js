var schedule = [];
var list = document.getElementById("schedule");
var track1CheckBox = document.getElementById("show-track-1");
var track2CheckBox = document.getElementById("show-track-2");

function downloadSchedule() {
    var request = $.ajax({
        type: "GET",
        url: "/schedule/list"
    });
    request.done(function (response) {
        schedule = response.schedule;
        displaySchedule();
    });
    request.fail(function () {
        try {
            var response = JSON.parse(request.responseText);
            alert(response.message);
        } catch (e) {
            alert("Schedule list not available.");
        }
    });
}

function createSessionElement(session) {
    var li = document.createElement("li");

    li.sessionId = session.id;

    var star = document.createElement("a");
    star.setAttribute("href", "#");
    star.setAttribute("class", "star");
    li.appendChild(star);

    var title = document.createElement("span");
    title.textContent = session.title;
    li.appendChild(title);

    return li;
};

function clearList() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function displaySchedule() {
    clearList();
    for (var i = 0; i < schedule.length; i++) {
        var tracks = schedule[i].tracks;
        var isCurrentTrack = (track1CheckBox.checked && tracks.indexOf(1) >= 0) ||
                             (track2CheckBox.checked && tracks.indexOf(2) >= 0);
        if (isCurrentTrack) {
            var li = createSessionElement(schedule[i]);
            list.appendChild(li);
        }
    }
}

function saveStar(sessionId, isStarred) {
    var request = $.ajax({
        type: "POST",
        url: "/schedule/star/" + sessionId,
        data: { starred: isStarred }
    });
    if (isStarred) {
        request.done(function (response) {
            if (response.starCount > 50) {
                alert("This session is very popular! Be sure to arrive early to get a seat.");
            }
        });
    }
}

function handleListClick(event) {
    var isStarElement = event.srcElement.classList.contains("star");
    if (isStarElement) {
        event.preventDefault(); // Stop the browser following the clicked <a> element's href.

        var listItem = event.srcElement.parentNode;
        if (listItem.classList.contains("starred")) {
            listItem.classList.remove("starred");
            saveStar(listItem.sessionId, false);
        } else {
            listItem.classList.add("starred");
            saveStar(listItem.sessionId, true);
        }
    }
}

track1CheckBox.addEventListener("click", displaySchedule, false);
track2CheckBox.addEventListener("click", displaySchedule, false);
list.addEventListener("click", handleListClick, false);

downloadSchedule();
