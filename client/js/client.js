
const socket = io('http://localhost:4500'); 


//fucntions 
var sendMessage = (message)=>{

    socket.emit('sendMessage',message);
}
var receiveMessage = (message)=>{

    var receivedMessage = document.createElement("div");
                    receivedMessage.textContent = message;
                    receivedMessage.classList.add("message-right");
                    chatBox.appendChild(receivedMessage);
                    chatBox.scrollTop = chatBox.scrollHeight;

}


//DOM manipulation functions
document.getElementById("sendButton").addEventListener("click", function () {
    var messageInput = document.getElementById("messageInput").value;
    if (messageInput.trim() !== "") {
        var chatBox = document.getElementById("chatBox");
        var chatMessage = document.createElement("div");
        chatMessage.textContent = messageInput;
        chatMessage.classList.add("message-left");
        chatMessage.classList.add("left"); // By default, messages are from sender (left)
        chatBox.appendChild(chatMessage);
        document.getElementById("messageInput").value = "";
        sendMessage(messageInput);
      
    }
});

//socket functions



socket.emit('new-user-joined',"Abhishek");
socket.on('user-joined', (name)=>{

    alert(name+" joined the chat room")    

});
socket.on('recieved',(message)=>{

    receiveMessage(message);


});



