const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Check if Syndicate AI is online"),

  async execute(interaction) {
    await interaction.reply("🏓 Pong!\nSyndicate AI is online.");
  },
};