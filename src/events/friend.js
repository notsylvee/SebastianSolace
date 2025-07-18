const { PermissionFlagsBits } = require("discord.js");
const fs = require("fs/promises");

module.exports = {
  name: "messageCreate",
  async execute(message) {

    if (message.author.bot || !message.guild) return;
    if (message.author.id !== "1318490033464021032") return;
    if (!message.guild.members.me.permissionsIn(message.channel.id).has(PermissionFlagsBits.SendMessages)) return;
        
    const voicelinesJsonData = await fs.readFile("data/voicelines.json", {encoding: "utf8"});
    const voicelinesMap = JSON.parse(voicelinesJsonData);
    const voicelines = voicelinesMap["friend"];
    const voiceline = voicelines[Math.floor(Math.random() * voicelines.length)];

    const chance = Math.random() * 100;
    if (chance < 90) {
      return;
    } else {
      message.channel.send(`<:SebastianSolace:1395293888583045140> ${voiceline}`);
    };
  },
};