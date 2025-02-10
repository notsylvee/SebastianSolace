const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("invite")
    .setDescription(" ")
    .addSubcommand((command) =>
    command.setName("ImaginaryFriend").setDescription("Get an invite for the Imaginary Friend bot")),

    async execute(interaction) {
      interaction.reply({ content: "https://discord.com/oauth2/authorize?client_id=1318490033464021032", ephemeral: true });
    },
};