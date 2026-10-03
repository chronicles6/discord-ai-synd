require("dotenv").config();

const { REST, Routes } = require("discord.js");

const rest = new REST({ version: "10" }).setToken(
  process.env.DISCORD_TOKEN
);

async function deleteGlobalCommands() {
  try {
    console.log("🗑️ Deleting global commands...");

    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: [] }
    );

    console.log("✅ Global commands deleted!");
  } catch (error) {
    console.error(error);
  }
}

deleteGlobalCommands();