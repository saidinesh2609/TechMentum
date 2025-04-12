// Function to simulate typing effect for a message
function typeMessage(message, element, speed) {
  let index = 0;
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

// Function to add user message
function addUserMessage(message, container) {
  const userMessage = document.createElement('div');
  userMessage.className = 'text-right text-indigo-600 bg-indigo-50 p-2 rounded-md';
  userMessage.textContent = message;
  container.appendChild(userMessage);

  // Auto-scroll
  container.scrollTop = container.scrollHeight;
}

// Function to add bot response
function addBotResponse(reply, container) {
  const botReply = document.createElement('div');
  botReply.className = 'text-gray-700 bg-gray-100 p-2 rounded-md';
  botReply.textContent = reply;
  container.appendChild(botReply);

  // Auto-scroll
  container.scrollTop = container.scrollHeight;
}

// Function to dynamically fetch bot replies (can be replaced with an API call)
function getBotReply(userMessage) {
  // Dynamic logic can be added here
  return "Thanks for reaching out! We'll get back to you shortly.";
}

document.addEventListener('DOMContentLoaded', function () {
  const chatbotButton = document.getElementById('chatbot-button');
  const chatbotModal = document.getElementById('chatbot-modal');
  const chatbotClose = document.getElementById('chatbot-close');
  const chatbotForm = document.getElementById('chatbot-form');
  const chatbotInput = document.getElementById('chatbot-input');
  const chatbotMessages = document.getElementById('chatbot-messages');
  const externalMessageText = document.getElementById('external-message-text');
  const externalMessage = document.getElementById('external-message');

  if (!chatbotButton || !chatbotModal || !chatbotClose || !chatbotForm || !chatbotInput || !chatbotMessages || !externalMessageText || !externalMessage) {
    console.error("One or more required elements are missing in the DOM.");
    return;
  }

  // Set the chatbot button image (Groot)
  chatbotButton.style.backgroundImage = 'url("/chatbot/chatbot.png")';
  chatbotButton.style.backgroundSize = 'cover';
  chatbotButton.style.backgroundPosition = 'center';
  chatbotButton.style.border = 'none';
  chatbotButton.style.width = '60px'; // Set a fixed width
  chatbotButton.style.height = '60px'; // Set a fixed height

  // Display and type the external message with animation
  const externalMessageContent = "Trayan at your service"; // External message content
  typeMessage(externalMessageContent, externalMessageText, 100); // Speed set to 100ms for typing effect
  externalMessage.style.display = 'block'; // Make it visible

  // Open chatbot modal
  chatbotButton.addEventListener('click', () => {
    chatbotModal.classList.remove('hidden');
    const initialMessage = "Hello! Trayan’s here, your friendly assistant! Let’s chat!";
    typeMessage(initialMessage, chatbotMessages, 100); // Speed set to 100ms for typing effect

    // Hide external message when chatbot opens
    externalMessage.style.display = 'none';
  });

  // Close chatbot modal
  chatbotClose.addEventListener('click', () => {
    chatbotModal.classList.add('hidden');
    externalMessage.style.display = 'block'; // Show external message again
  });

  // Handle user message submission
  chatbotForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const message = chatbotInput.value.trim();
    if (!message) return;

    // Add user message
    addUserMessage(message, chatbotMessages);

    chatbotInput.value = '';

    // Bot response
    setTimeout(() => {
      const reply = getBotReply(message);
      addBotResponse(reply, chatbotMessages);
    }, 600);
  });
});
