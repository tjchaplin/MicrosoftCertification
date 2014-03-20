var schedule = [];
var list = document.getElementById("schedule");
var track1CheckBox = document.getElementById("show-track-1");
var track2CheckBox = document.getElementById("show-track-2");

// TODO: Create a function called downloadSchedule
//       Use an XMLHttpRequest to GET "/schedule/list"
//       The response will be a JSON object of the form "{ schedule: [ ... ] }"
//       Save the array into the schedule variable
//       Then call displaySchedule()
function downloadSchedule(){
    var scheduleListRequest = '/schedule/list';
    var request = new XMLHttpRequest();
    request.open('GET',scheduleListRequest);
    request.onreadystatechange = function(){
        if (request.readyState === 4) {
            try {
                var response = JSON.parse(request.responseText);
                if (request.status === 200) {
                    schedule = response;
                    displaySchedule();
                } else {
                    alert(response.message);
                }
            } catch (exception) {
                alert("Schedule list not available.");
            }
        }
    };
    request.send();
};
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
    // TODO: Create an XMLHttpRequest that POSTs to "/schedule/star/{sessionId}"
    //       The request body must have the content type "application/x-www-form-urlencoded"
    //       e.g. "starred=true" or "starred=false"
    //       The response contains a JSON object "{ starCount: <number> }"
    //       If the star count is more than 50, warn the user about this being a busy session.
    var request = new XMLHttpRequest();
    request.open('POST','/schedule/star/'+sessionId,false);
    request.setRequestHeader('Content-Type',"application/x-www-form-urlencoded");
    request.onreadystatechange = function(){
        if(request.readyState === 4){
            try{
                if(request.status === 200){
                    var response = JSON.parse(request.responseText);
                    console.log(response.starCount);
                    if(response.starCount > 5)
                        alert("The session is very popular! Be sure to arrive early to get a seat");
                }
            }catch(e){
                alert("Error adding star");
            }
        }        
    }
    var body;
    if(isStarred)
        body='starred='+isStarred
    request.send(body);

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