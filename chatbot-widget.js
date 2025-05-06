
const answers = {
    "courses": "We offer:<br>- B.Tech<br>- BBA<br>- BCA<br>- MBA<br>- MCA<br>and many more programs.",
    "student login": "Students can login at:<br>https://institute.edu/student-login",
    "faculty login": "Faculty members can login at:<br>https://institute.edu/faculty-login",
    "departments" : "we have :<br>- Depatment of computer science and Technology <br>- Depatment of Civil Engineering <br>- Depatment of Mechanical Engineer ",
    "streams": "Streams include:<br>- Computer Science<br>- Electronics<br>- Mechanical<br>- Civil<br>- Management."
};

const chatBox = document.getElementById("chatBox");
const questionButtons = document.getElementById("questionButtons");

questions.forEach(q => {
    const btn = document.createElement("button");
    btn.textContent = q;
    btn.onclick = () => respond(q);
    questionButtons.appendChild(btn);       //question show in the button form 
});
(function () {
    const style = document.createElement("style");
    style.textContent = `
      #chaticon {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #007bff;
        color: white;
        font-size: 24px;
        padding: 10px;
        border-radius: 50%;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      }
      .chat-container {
        display: none;
        position: fixed;
        bottom: 80px;
        right: 20px;
        width: 300px;
        background-color: #60c8b3;
        border-radius: 10px;
        padding: 10px;
        z-index: 1000;
        font-family: Arial, sans-serif;
        box-shadow: 0 0 10px rgba(0,0,0,0.3);
      }
      .chat-box {
        background: white;
        border: 1px solid #ccc;
        height: 200px;
        overflow-y: auto;
        margin-bottom: 10px;
        padding: 5px;
      }
      .input-area {
        display: flex;
        gap: 5px;
      }
      .input-area input {
        flex: 1;
        padding: 5px;
      }
      .input-area button {
        padding: 5px 10px;
        background: #007bff;
        color: white;
        border: none;
        cursor: pointer;
      }
    `;
    document.head.appendChild(style);
  
    const html = `
      <div id="chaticon" onclick="toggleChat()">💬</div>
      <div class="chat-container" id="chatContainer">
        <div class="chat-box" id="chatBox">Hello! 👋 How can I help you?</div>
        <div class="input-area">
          <input type="text" id="userInput" placeholder="Ask something..." />
          <button onclick="handleInput()">Send</button>
        </div>
      </div>
    `;
    const container = document.createElement("div");
    container.innerHTML = html;
    document.body.appendChild(container);
  
    window.toggleChat = function () {
      const chat = document.getElementById("chatContainer");
      chat.style.display = chat.style.display === "block" ? "none" : "block";
    };
  
    window.handleInput = function () {
      const input = document.getElementById("userInput");
      const chatBox = document.getElementById("chatBox");
      const message = input.value.trim();
      if (message) {
        chatBox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
        let response = "Sorry, I didn't understand.";
        const msg = message.toLowerCase();
        if (msg.includes("course")) response = "courses";
        else if (msg.includes("student login")) response = "student login";
        else if (msg.includes("faculty login")) response = "faculty login";
        else if (msg.includes("stream")) response = "streams";
        chatBox.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;
        chatBox.scrollTop = chatBox.scrollHeight;
        input.value = "";
      }
    };
  
    document.addEventListener("keydown", function (e) {
      if (e.key === "Enter") handleInput();
    });
  })();
  
