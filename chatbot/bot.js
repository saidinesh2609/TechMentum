// bot.js

// Select required DOM elements
const chatbotButton = document.getElementById("chatbot-button");
const chatbotModal = document.getElementById("chatbot-modal");
const chatbotCloseButton = document.getElementById("chatbot-close");
const chatbotInput = document.getElementById("chatbot-input");
const chatbotMessages = document.getElementById("chatbot-messages");
const chatbotForm = document.getElementById("chatbot-form");

// Set base URL for API depending on environment
const API_BASE = window.location.hostname === 'localhost'
  ? 'http://localhost:8888' // or change to 3000 if needed
  : 'https://techmentum.netlify.app';

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

// Handle form submission (prevent page reload)
chatbotForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Stop form from reloading the page

  const userMessage = chatbotInput.value.trim();

  if (userMessage) {
    // Display user message
    displayMessage(userMessage, "user");

    // Clear input
    chatbotInput.value = "";

    // Get bot response from the backend (ChatGPT API)
    try {
      const botResponse = await getBotResponseFromAPI(userMessage);
      displayMessage(botResponse, "bot");
    } catch (error) {
      displayMessage("Sorry, something went wrong. Please try again.", "bot");
    }
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

// Function to call the backend API and get the ChatGPT response
async function getBotResponseFromAPI(userMessage) {
  const response = await fetch(`${API_BASE}/.netlify/functions/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: userMessage }),
  });

  if (!response.ok) {
    throw new Error('Error communicating with backend');
  }

  const data = await response.json();
  return data.reply;
}

