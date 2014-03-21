# Websockets

## Overview

1. The client requests a connection to the server over HTTP or HTTPS.
2. If the server responds positively, both the client and server switch to the web sockets protocol (known as WS) or WSS (the secure variant of WS), and a persistent bi-directional socket connection is created between the two.
3. The client and server send and receive messages over the open connection. The format of the data in the messages is entirely up to the client and server; the client just needs to construct messages in a format that the server expects, and vice versa.
4. The client or the server explicitly closes the connection, or a timeout value is reached.

## Connecting
Websocket is part of the Window
```javascript
var socket = new WebSocket("ws://localhost:55981/myThing");
```

Websocket readystate may have either of the following values:
* CONNECTING (0), which indicates that a WebSocket object has been created, but a connection is still being made between page and server.
* OPEN (1), which indicates that a connection between page and server has been established.
* CLOSING (2), which indicates that the closing handshake is in progress.
* CLOSED (3), which indicates that the connection between page and server has been closed or could not be established.

If you don't want to use readystate, WebSockets provide an `onopen` callback:
```javascript
socket.onopen = function() {
   // Web Socket Server is connected
   alert("Connection to server now open!");
   //send message etc ...
};
```

Also, you can use the `open` event:
```javascript
function sendMessage() {
   // Create a message and send it to the server
   ...
};
socket.addEventListener("open", sendMessage);
```

## Closing a connection

```javascript
socket.close();
socket.close(1000, "No Error. All communication finished with.");
```

close event has the following properties:
* wasClean, which is a Boolean value indicating whether the connection was closed cleanly (true) or experienced a problem (false).
* code, which is the exit status code (laid out in RFC6455) indicating why the connection was closed.
* reason, which is a text string giving a reason why the connection was closed.

## Sending a Message

```
var message = ...; // Message to be sent
socket.send(message);
//Can send text
//Blobs
//Arrays
```

## Receiving a Message

```javascript
socket.onmessage = function(event) {
   // Message has been received
   if (event.type == "Text") {
      handleTextMessage(event.data);
   } else {
      handleBinaryMessage(socket.binaryType, event.data);
   }
};
```

