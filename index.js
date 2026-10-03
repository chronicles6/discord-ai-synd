require("dotenv").config();

const { Client, GatewayIntentBits, Collection } = require("discord.js");

const ping = require("./commands/ping");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
  ],
});

client.commands = new Collection();

client.commands.set(ping.data.name, ping);

client.once("clientReady", () => {
  console.log(`🤖 ${client.user.tag} is online!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);

    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({
        content: "❌ Something went wrong while executing this command.",
        ephemeral: true,
      });
    } else {
      await interaction.reply({
        content: "❌ Something went wrong while executing this command.",
        ephemeral: true,
      });
    }
  }
});

client.login(process.env.DISCORD_TOKEN);