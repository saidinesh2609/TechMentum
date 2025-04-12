// Select required DOM elements
const chatbotButton = document.getElementById("chatbot-button");
const chatbotModal = document.getElementById("chatbot-modal");
const chatbotCloseButton = document.getElementById("chatbot-close");
const chatbotInput = document.getElementById("chatbot-input");
const chatbotMessages = document.getElementById("chatbot-messages"); // ✅ corrected ID from 'chatbot-body' to 'chatbot-messages'
const chatbotForm = document.getElementById("chatbot-form");

// Open and close the chatbot modal
chatbotButton.addEventListener("click", () => {
  chatbotModal.classList.toggle("hidden");
  chatbotInput.focus(); // Auto-focus on the input when the modal opens
  chatbotMessages.innerHTML = ""; // Clear previous messages on opening
  displayMessage("Hi! How can I assist you today?", "bot");
});

chatbotCloseButton.addEventListener("click", () => {
  chatbotModal.classList.add("hidden");
});

// ✅ Handle form submission (prevent page reload)
chatbotForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop form from reloading the page

  const userMessage = chatbotInput.value.trim();

  if (userMessage) {
    // Display user message
    displayMessage(userMessage, "user");

    // Clear input
    chatbotInput.value = "";

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage);
      displayMessage(botResponse, "bot");
    }, 600);
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
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Simple keyword-based bot responses
function getBotResponse(userMessage) {
  const responses = {
    "hello": "Hi there! 👋 How can I assist you today?",
    "devops": "I can help you with DevOps-related topics like CI/CD, Docker, Kubernetes, and more!",
    "qa": "Need help with QA? I can guide you through manual testing, automation, and tools like Selenium.",
    "courses": "You can explore our DevOps and QA courses above. Let me know if you need more information!",
    "default": "Sorry, I didn't understand that. Can you please ask something else?"
  };

  const normalizedMessage = userMessage.toLowerCase();
  return responses[normalizedMessage] || responses["default"];
}
