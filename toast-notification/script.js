const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
]

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(type = null) {
    const notif = document.createElement('div');
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomTypes())

    notif.innerText = getRandomMessage()
    notif.innerText = getRandomTypes()

    toasts.appendChild(notif)
    setTimeout(() => {
      notif.remove()
    }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomTypes() {
  return types[Math.floor(Math.random() * types.length)]
}