
function sendMessage() {
  const input = document.getElementById("message-input");
  const message = input.value.trim();
  if (!message) return;
  const chatWindow = document.getElementById("chat-window");
  const msgElem = document.createElement("div");
  msgElem.textContent = message;
  chatWindow.appendChild(msgElem);
  localStorage.setItem(`msg-${Date.now()}`, message);
  input.value = "";
}

window.onload = () => {
  const chatWindow = document.getElementById("chat-window");
  for (let key in localStorage) {
    if (key.startsWith("msg-")) {
      const msgElem = document.createElement("div");
      msgElem.textContent = localStorage[key];
      chatWindow.appendChild(msgElem);
    }
  }
};
