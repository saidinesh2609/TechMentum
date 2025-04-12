const { OpenAI } = require('openai');
require("dotenv").config();  // To use environment variables during local development

// Ensure API key is available
if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing OPENAI_API_KEY in environment variables");
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,  // Your OpenAI API key stored in environment variables
});

exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*', // Allow requests from all origins (you can limit this to a specific domain)
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    let body;
    try {
      body = JSON.parse(event.body);
    } catch (parseError) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: JSON.stringify({ error: 'Invalid JSON in request body' }),
      };
    }

    const userMessage = body.message;

    // Request to OpenAI API to generate a response
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",  // Choose the correct GPT model
      messages: [{ role: "user", content: userMessage }],
    });

    const reply = completion.choices[0]?.message?.content;  // Get response from OpenAI
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',  // Allow requests from all origins
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ reply }),
    };
  } catch (error) {
    console.error("Error from OpenAI:", error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ error: "Failed to get response from OpenAI", details: error.message }),
    };
  }
};
