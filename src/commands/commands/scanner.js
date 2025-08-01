const fs = require("fs/promises");

module.exports = {
    data: {
        name: "scanner",
        description: "Sends a random Sebastian's Scanner voiceline",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {
        const voicelinesJsonData = await fs.readFile("data/voicelines.json", {encoding: "utf8"});
        const voicelinesMap = JSON.parse(voicelinesJsonData);
        const voicelines = voicelinesMap["scanner"];
        const voiceline = voicelines[Math.floor(Math.random() * voicelines.length)];
            
        interaction.reply({ content: `<:SebastiansScanner:1398805366179106817> ${voiceline.text}` });
      },
}