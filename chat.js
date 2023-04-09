const messages = document.getElementById('messages');
const message = document.getElementById('message');
const send = document.getElementById('send');

send.addEventListener('click', () => {
  const text = message.value;
  const newMessage = document.createElement('div');
  newMessage.textContent = text;
  messages.appendChild(newMessage);
  message.value = '';
});