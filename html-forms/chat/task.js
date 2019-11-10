let widget = document.querySelector('.chat-widget__side');
let messages = document.getElementById('chat-widget__messages');
let messageBox = document.getElementById('chat-widget__input');
let robotAnswers = [
  'Где ваша совесть?',
  'К сожалению, все операторы сейчас заняты. Не пишите нам больше.',
  'Кто тут?',
  'Добрый день! До свидания!',
  'Мы ничего не будем вам продавать?'
];

widget.addEventListener('click', () => document.querySelector('.chat-widget').classList.add('chat-widget_active'));

messageBox.addEventListener('keydown', (e) => {
  //Это же можно и через событие submit сделать?
  if(e.key == 'Enter') {
    if(messageBox.value != '') {
      messages.innerHTML += `
        <div class="message message_client">
          <div class="message__time">${nowTime()}</div>
          <div class="message__text">
            ${messageBox.value}
          </div>
        </div>
      `;
      messageBox.value = '';
      writeAnswer();
    }
  }
});

function writeAnswer() {
  messages.innerHTML += `
    <div class="message">
      <div class="message__time">${nowTime()}</div>
      <div class="message__text">
        ${robotAnswers[getRandomIndex(robotAnswers.length)]}
      </div>
    </div>
  `;
}

function getRandomIndex(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function nowTime() {
  let messageTime = new Date();
  let hours = messageTime.getHours() < 10 ? `0${messageTime.getHours()}` : messageTime.getHours();
  let minutes = messageTime.getMinutes() < 10 ? `0${messageTime.getMinutes()}` : messageTime.getMinutes();
  return `${hours}:${minutes}`;
}
