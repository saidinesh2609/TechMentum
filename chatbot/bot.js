// Select required DOM elements
const chatbotButton = document.getElementById("chatbot-button");
const chatbotModal = document.getElementById("chatbot-modal");
const chatbotCloseButton = document.getElementById("chatbot-close");
const chatbotForm = document.getElementById("chatbot-form");
const chatbotInput = document.getElementById("chatbot-input");
const chatbotMessages = document.getElementById("chatbot-messages");

// Open and close the chatbot modal
chatbotButton.addEventListener("click", () => {
  chatbotModal.classList.toggle("hidden");
  chatbotInput.focus(); // Auto-focus on the input when the modal opens
});

chatbotCloseButton.addEventListener("click", () => {
  chatbotModal.classList.add("hidden");
});

// Handle form submission
chatbotForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const userMessage = chatbotInput.value.trim();

  if (userMessage) {
    // Display user message in the chat
    displayMessage(userMessage, "user");

    // Clear the input field
    chatbotInput.value = "";

    // Simulate bot's response (this can be enhanced with actual logic)
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage);
      displayMessage(botResponse, "bot");
    }, 1000);
  }
});

// Function to display messages in the chat
function displayMessage(message, sender) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("p-2", "rounded-md", "mb-2");

  if (sender === "user") {
    messageElement.classList.add("bg-indigo-100", "text-indigo-900", "self-end");
    messageElement.textContent = message;
  } else {
    messageElement.classList.add("bg-gray-100", "text-gray-900", "self-start");
    messageElement.textContent = message;
  }

  chatbotMessages.appendChild(messageElement);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Scroll to the latest message
}

// Function to generate bot response (can be expanded with AI or specific logic)
function getBotResponse(userMessage) {
  // Basic responses for testing (can be expanded)
  const responses = {
    "hello": "Hi there! 👋 How can I assist you today?",
    "devops": "I can help you with DevOps-related topics like CI/CD, Docker, Kubernetes, and more!",
    "qa": "Need help with QA? I can guide you through manual testing, automation, and tools like Selenium.",
    "courses": "You can explore our DevOps and QA courses above. Let me know if you need more information!",
    "default": "Sorry, I didn't understand that. Can you please ask something else?"
  };

  // Convert user message to lowercase to handle case insensitivity
  const normalizedMessage = userMessage.toLowerCase();

  // Check if the message matches a predefined response
  return responses[normalizedMessage] || responses["default"];
}
