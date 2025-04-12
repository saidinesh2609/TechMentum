// Function to simulate typing effect for a message
function typeMessage(message, elementId, speed) {
  let index = 0;
  const element = document.getElementById(elementId);
  element.innerHTML = ''; // Clear previous message

  function type() {
    if (index < message.length) {
      element.innerHTML += message.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }

  type();
}

document.addEventListener('DOMContentLoaded', function () {
  const chatbotButton = document.getElementById('chatbot-button');
  const chatbotModal = document.getElementById('chatbot-modal');
  const chatbotClose = document.getElementById('chatbot-close');
  const chatbotForm = document.getElementById('chatbot-form');
  const chatbotInput = document.getElementById('chatbot-input');
  const chatbotMessages = document.getElementById('chatbot-messages');

  // Initial message typing when the chatbot modal is opened
  chatbotButton.addEventListener('click', () => {
    chatbotModal.classList.remove('hidden');
    
    const initialMessage = "Hello! Trayan’s here, your friendly assistant! Let’s chat!";
    typeMessage(initialMessage, 'chatbot-messages', 100); // Speed set to 100ms for typing effect
  });

  chatbotClose.addEventListener('click', () => {
    chatbotModal.classList.add('hidden');
  });

  chatbotForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const message = chatbotInput.value.trim();
    if (!message) return;

    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'text-right text-indigo-600 bg-indigo-50 p-2 rounded-md';
    userMessage.textContent = message;
    chatbotMessages.appendChild(userMessage);

    chatbotInput.value = '';

    // Auto-scroll
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

    // Bot response
    setTimeout(() => {
      const botReply = document.createElement('div');
      botReply.className = 'text-gray-700 bg-gray-100 p-2 rounded-md';
      botReply.textContent = "Thanks for reaching out! We'll get back to you shortly.";
      chatbotMessages.appendChild(botReply);
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }, 600);
  });
});
