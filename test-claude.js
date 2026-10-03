require("dotenv").config();

const Anthropic = require("@anthropic-ai/sdk");

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

async function testClaude() {
  try {
    console.log("🧠 Testing Claude API...");

    const message = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 100,
      messages: [
        {
          role: "user",
          content: "Say hello to Syndicate AI in one short sentence.",
        },
      ],
    });

    console.log("Claude:", message.content[0].text);
  } catch (error) {
    console.error("❌ Claude API Error:");
    console.error(error.message);
  }
}

testClaude();