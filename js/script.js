const messageInput = document.querySelector('.message__input');

messageInput.addEventListener('keydown', function(e) {
    if(event.key == 'Enter') 
        getMessage();
    
});

function getMessage() {
    document.querySelector('.message__output').innerHTML = messageInput.value;
    messageInput.value = '';
}