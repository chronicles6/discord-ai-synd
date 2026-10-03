require("dotenv").config();

const { REST, Routes } = require("discord.js");

const rest = new REST({ version: "10" }).setToken(
  process.env.DISCORD_TOKEN
);

async function checkCommands() {
  try {
    const commands = await rest.get(
      Routes.applicationCommands(process.env.CLIENT_ID)
    );

    console.log("📋 Global commands:");

    for (const command of commands) {
      console.log(`- ${command.name} | ${command.id}`);
    }

    if (commands.length === 0) {
      console.log("✅ No global commands.");
    }
  } catch (error) {
    console.error(error);
  }
}

checkCommands();