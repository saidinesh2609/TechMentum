// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { OpenAI } = require('openai'); // Correct for SDK v4+
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Console log to confirm env is loaded (optional debug)
console.log("Loaded OpenAI API Key:", process.env.OPENAI_API_KEY ? "✅ Loaded" : "❌ Not Loaded");

// OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// POST /chat route
app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;

  try {
    // Request OpenAI's completion with the user's message
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // You can adjust the model as needed
      messages: [{ role: 'user', content: userMessage }]
    });

    // Extract and send the response from the bot
    const reply = completion.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error('OpenAI API error:', error);
    res.status(500).json({ error: 'Failed to generate response from OpenAI' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

