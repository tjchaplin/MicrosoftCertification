var WebSocket = function () {
    this.respondWith({
        questions: [
            {
                text: "What are some good resources for getting started with HTML5?",
                id: 1
            }
        ]
    }, 250);

    this.respondWith({
        questions: [
            {
                text: "Can you explain more about the Web Socket API please?",
                id: 2
            },
            {
                text: "This is an #&!%!* inappropriate message!!",
                id: 3
            }
        ]
    }, 1000);

    this.respondWith({ remove: 3 }, 2000);

    this.respondWith({
        questions: [
            {
                text: "How much of CSS3 can I use right now?",
                id: 4
            }
        ]
    }, 3000);
};

WebSocket.prototype.send = function (message) {
    message = JSON.parse(message);
    if (message.ask) {
        this.respondWith({
            questions: [
                {
                    text: message.ask,
                    id: (new Date().getTime())
                }
            ]
        }, 0);

    } else if (message.report) {
        this.respondWith({
            remove: message.report
        }, 1000);
    }
};

WebSocket.prototype.respondWith = function (message, delay) {
    setTimeout(function() {
        this.onmessage({ data: JSON.stringify(message) });
    }.bind(this), delay);
};
