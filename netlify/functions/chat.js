// netlify/functions/chat.js
const { OpenAI } = require('openai');
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.handler = async function(event) {
  // Handle CORS preflight request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': 'https://techmentum.in',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: 'Preflight OK',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': 'https://techmentum.in',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const body = JSON.parse(event.body);
    const userMessage = body.message;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userMessage }],
    });

    const reply = completion.choices[0].message.content;
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': 'https://techmentum.in',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ reply }),
    };
  } catch (error) {
    console.error("Error from OpenAI:", error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': 'https://techmentum.in',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ error: "Failed to get response from OpenAI" }),
    };
  }
};

