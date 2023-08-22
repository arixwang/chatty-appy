document.addEventListener("DOMContentLoaded", function () {
    var websocket = new WebSocket("wss://" + window.location.host + "/websocket");
    var room = document.getElementById("chat-text");
    websocket.addEventListener("message", function (e) {
        var data = JSON.parse(e.data);
        var chatContent = "<p><strong>".concat(data.username, "</strong>: ").concat(data.text, "</p>");
        room.insertAdjacentHTML("beforeend", chatContent);
        room.scrollTop = room.scrollHeight; // Auto scroll to the bottom
    });
    var inputForm = document.getElementById("input-form");
    inputForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var username = document.getElementById("input-username").value;
        var text = document.getElementById("input-text").value;
        websocket.send(JSON.stringify({
            username: username,
            text: text,
        }));
        document.getElementById("input-text").value = "";
    });
});
