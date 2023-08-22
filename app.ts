document.addEventListener("DOMContentLoaded", () => {
  const websocket = new WebSocket("wss://" + window.location.host + "/websocket");
  const room = document.getElementById("chat-text") as HTMLDivElement;

  websocket.addEventListener("message", (e) => {
    const data = JSON.parse(e.data);
    const chatContent = `<p><strong>${data.username}</strong>: ${data.text}</p>`;
    room.insertAdjacentHTML("beforeend", chatContent);
    room.scrollTop = room.scrollHeight; // Auto scroll to the bottom
  });

  const inputForm = document.getElementById("input-form") as HTMLFormElement;
  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = (document.getElementById("input-username") as HTMLInputElement).value;
    const text = (document.getElementById("input-text") as HTMLInputElement).value;

    websocket.send(
      JSON.stringify({
        username: username,
        text: text,
      })
    );

    (document.getElementById("input-text") as HTMLInputElement).value = "";
  });
});
