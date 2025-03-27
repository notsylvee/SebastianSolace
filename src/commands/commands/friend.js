const { SlashCommandBuilder, MessageFlags } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("imaginary")
    .setDescription("Get an invite for the Imaginary Friend bot")
    .addSubcommand((command) =>
    command.setName("friend").setDescription("Get an invite for the Imaginary Friend bot")),

    async execute(interaction) {
      interaction.reply({ content: "https://discord.com/oauth2/authorize?client_id=1318490033464021032", flags: MessageFlags.Ephemeral });
    },
};