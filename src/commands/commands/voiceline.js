const fs = require("fs/promises");

module.exports = {
    data: {
        name: "voiceline",
        description: "Sends a random Sebastian voiceline",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {
        const voicelinesJsonData = await fs.readFile("data/voicelines.json", {encoding: "utf8"});
        const voicelinesMap = JSON.parse(voicelinesJsonData);
        const voicelines = voicelinesMap["voicelines"];
        const voiceline = voicelines[Math.floor(Math.random() * voicelines.length)];
            
        interaction.reply({ content: `<:SebastianSolace:1395293888583045140> ${voiceline.text}` });
      },
}