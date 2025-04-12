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
      element.scrollIntoView({ behavior: 'smooth', block: 'end' });
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

  // Show external message with typing effect
  const externalMessageText = document.getElementById('external-message-text');
  const externalMessage = document.getElementById('external-message');
  const externalMessageContent = "Trayan at your service";

  typeMessage(externalMessageContent, 'external-message-text', 100);
  externalMessage.style.display = 'block';

  // Open chatbot modal
  chatbotButton.addEventListener('click', () => {
    chatbotModal.classList.remove('hidden');

    // Remove old typing message if exists
    const oldTyping = document.getElementById('typing-message');
    if (oldTyping) oldTyping.remove();

    // Add new typing message
    const typingDiv = document.createElement('div');
    typingDiv.className = 'text-gray-700 bg-gray-100 p-2 rounded-md';
    typingDiv.id = 'typing-message';
    chatbotMessages.appendChild(typingDiv);

    const initialMessage = "Hello! Trayan’s here, your friendly assistant! Let’s chat!";
    typeMessage(initialMessage, 'typing-message', 50);

    externalMessage.style.display = 'none';
  });

  // Close chatbot modal
  chatbotClose.addEventListener('click', () => {
    chatbotModal.classList.add('hidden');
    externalMessage.style.display = 'block';
  });

  // Handle user message submission
  chatbotForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const message = chatbotInput.value.trim();
    if (!message) return;

    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'text-right text-indigo-600 bg-indigo-50 p-2 rounded-md my-1';
    userMessage.textContent = message;
    chatbotMessages.appendChild(userMessage);

    chatbotInput.value = '';
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

    // Bot response with typing effect
    setTimeout(() => {
      const botReply = document.createElement('div');
      botReply.className = 'text-gray-700 bg-gray-100 p-2 rounded-md my-1';
      botReply.id = 'typing-message';
      chatbotMessages.appendChild(botReply);
      typeMessage("Thanks for reaching out! We'll get back to you shortly.", 'typing-message', 50);
    }, 600);
  });
});
