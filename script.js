const questions = [
    "What are the courses?",
    "Where should I login for student?",
    "Where should I login for faculty?",
    "What streams are available?"
];
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

function respond(input) {
    chatBox.innerHTML += `<p><strong> USER: </strong> ${input}</p>`;
    const inputLower = input.toLowerCase();                 //all the text in lowercase
    let response = "Sorry, I didn't understand that.";      //default line 
    if (inputLower.includes("course")) response = answers["courses"];
    else if (inputLower.includes("department")) response= answers["departments"];
    else if (inputLower.includes("student login")) response = answers["student login"];
    else if (inputLower.includes("faculty login")) response = answers["faculty login"];
    else if (inputLower.includes("stream")) response = answers["streams"];
    chatBox.innerHTML += `<p><strong> TMSL: </strong> ${response}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}

function handleInput() {
    const userInput = document.getElementById("userInput").value;   // it will detect the key among whatever be the userinput 
    if (userInput.trim() !== "") {
        respond(userInput);
        document.getElementById("userInput").value = ""; 
    }
}
//chatBox.innerHTML += `<p><strong>TMSL: </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;💬 Hello there! How can I help you today?</p>`;
chatBox.innerHTML += `<p><strong>TMSL: </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://img.icons8.com/ios-filled/20/chat.png"
                         style="vertical-align:middle;"> Hello there! 👋👋<br> 😎How can I help you today? </p>`;
chatBox.innerHTML += `<p><strong>TMSL: </strong>chat only for institute purpose 🧑‍🏫👩‍🏫 </p>`

// the enter key will activate
 
document.getElementById("userInput").addEventListener("keydown",function(event) // listening all the key 
{
    if(event.key == "Enter") //but when enter  then call handelInput function , where set that send button is acttivate 
    {
        handleInput();
    }
});
function togglechat() {
    const chat = document.querySelector(".chat-container");
    chat.style.display = (chat.style.display === "none") ? "block" : "none";
  }
  