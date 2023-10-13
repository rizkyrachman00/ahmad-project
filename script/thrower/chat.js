const chatBox = document.getElementById("chat-box");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-chat-btn");

sendBtn.addEventListener("click", () => {
  if (chatInput.value === "") return;
  setTimeout(() => {
    addChat();
  }, 1300);
  addChat(chatInput.value, false);
  chatInput.value = "";
  console.log("success");
});

function addChat(
  message = "Pesanmu akan segera dibalas. Tunggu yaa..",
  bot = true
) {
  const chatContainer = document.createElement("div");
  const chat = document.createElement("div");
  const chatContent = document.createElement("p");
  chatContainer.className = `flex ${
    bot ? "justify-start" : "justify-end"
  } my-2 mr-2`;
  chat.className = `${
    bot ? "bg-[#333] text-white" : "bg-white text-black"
  } p-2 text-sm rounded-md max-w-[250px] overflow-hidden`;
  chatContent.innerText = message;
  chatContainer.appendChild(chat);
  chat.appendChild(chatContent);
  chatBox.appendChild(chatContainer);
}
