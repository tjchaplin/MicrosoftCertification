var schedule =  [{
                    id : "session-1",
                    title : "Registration",
                    subTitle : "Get your name badge and goody bag",
                    speakerName : null,
                    start : "08:30",
                    end : "08:55",
                    tracks : [1,2],
                    room : "A",
                    starCount : 1
                },
                {
                    id : "session-2",
                    title : "Moving the Web forward with HTML5",
                    subTitle : "",
                    speakerName : "Melissa Kerr",
                    start : "09:00",
                    end : "09:55",
                    tracks : [1,2],
                    room : "A",
                    starCount : 1
                },
                {
                    id : "session-3",
                    title : "Diving in at the deep end with Canvas",
                    subTitle : "",
                    speakerName : "David Alexander",
                    start : "10:00",
                    end : "10:55",
                    tracks : [1],
                    room : "A",
                    starCount : 1
                },
                {
                    id : "session-4",
                    title : "New Technologies in Enterprise",
                    subTitle : "",
                    speakerName : "April Meyer",
                    start : "10:00",
                    end : "11:55",
                    tracks : [2],
                    room : "B",
                    starCount : 1
                },
                {
                    id : "session-5",
                    title : "WebSockets and You",
                    subTitle : "",
                    speakerName : "Mark Hanson",
                    start : "11:00",
                    end : "11:55",
                    tracks : [1],
                    room : "A",
                    starCount : 1
                },
                {
                    id : "session-6",
                    title : "Coffee and Cake Break",
                    subTitle : "Get all the caffeine and sugar you can - you're going to need it!",
                    speakerName : null,
                    start : "12:00",
                    end : "12:25",
                    tracks : [1,2],
                    room : "A",
                    starCount : 1
                },
                {
                    id : "session-7",
                    title : "Building Responsive UIs",
                    subTitle : "",
                    speakerName : "Dylan Miller",
                    start : "12:30",
                    end : "12:55",
                    tracks : [1],
                    room : "A",
                    starCount : 1
                },
                {
                    id : "session-8",
                    title : "Fun with Forms (no, really!)",
                    subTitle : "",
                    speakerName : "Anne Wallace",
                    start : "12:30",
                    end : "12:55",
                    tracks : [2],
                    room : "B",
                    starCount : 1
                },
                {
                    id : "session-9",
                    title : "A Fresh Look at Layouts",
                    subTitle : "",
                    speakerName : "William Flash",
                    start : "13:00",
                    end : "13:55",
                    tracks : [1],
                    room : "A",
                    starCount : 1
                },
                {
                    id : "session-10",
                    title : "Real-world Applications of HTML5 APIs",
                    subTitle : "",
                    speakerName : "Ken Ewert",
                    start : "13:00",
                    end : "13:55",
                    tracks : [2],
                    room : "B",
                    starCount : 1
                },
                {
                    id : "session-11",
                    title : "Lunch",
                    subTitle : "Sponsored by Medior Inc",
                    speakerName : null,
                    start : "14:00",
                    end : "15:25",
                    tracks : [1,2],
                    room : "A",
                    starCount : 1
                },
                {
                    id : "session-12",
                    title : "Getting to Grips with JavaScript",
                    subTitle : "",
                    speakerName : "Dominik Paiha",
                    start : "15:30",
                    end : "16:25",
                    tracks : [1],
                    room : "A",
                    starCount : 1
                },
                {
                    id : "session-13",
                    title : "Transforms and Animations",
                    subTitle : "",
                    speakerName : "John Clarkson",
                    start : "15:30",
                    end : "16:25",
                    tracks : [2],
                    room : "B",
                    starCount : 1
                },
                {
                    id : "session-14",
                    title : "Web Design Adventures with CSS3",
                    subTitle : "",
                    speakerName : "Christine Koch",
                    start : "16:30",
                    end : "17:25",
                    tracks : [1],
                    room : "A",
                    starCount : 1
                },
                {
                    id : "session-15",
                    title : "Introducing Data Access and Caching",
                    subTitle : "",
                    speakerName : "Nelson Siu",
                    start : "16:30",
                    end : "17:25",
                    tracks : [2],
                    room : "B",
                    starCount : 1
                },
                {
                    id : "session-16",
                    title : "Closing Thanks and Prizes",
                    subTitle : "",
                    speakerName : null,
                    start : "17:30",
                    end : "17:55",
                    tracks : [1,2],
                    room : "A",
                    starCount : 1
                }];

var firstById = function(array,id){
	for (var i = 0; i < schedule.length; i++) {
			if(schedule[i].id === id)
				return schedule[i];
	}
	return;
};

exports.list = function(req,res){
	res.send(JSON.stringify(schedule));
};

exports.star = function(req,res){
	var incrementValue = 1;
	if(req.query.starred)
		incrementValue = -1;

	var item = firstById(schedule,req.params.id);
	if(!item)
		return res.send();

	item.starCount += incrementValue;

	return res.send(JSON.stringify({starCount:item.starCount}));
};