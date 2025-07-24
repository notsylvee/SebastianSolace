const { EmbedBuilder } = require("discord.js");
const fs = require("fs/promises");

module.exports = {
    data: {
        name: "document",
        description: "Get a random document from Pressure",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {
        const documentsJsonData = await fs.readFile("data/documents.json", {encoding: "utf8"});
        const documentsMap = JSON.parse(documentsJsonData);
        const documents = documentsMap["documents"];
        const document = documents[Math.floor(Math.random() * documents.length)];
        
        const embed = new EmbedBuilder()
            .setTitle(`${document.title}`)
            .setImage(`https://cdn.sylvee.xyz/doc${document.path}.png`)

        await interaction.reply({ embeds: [embed] });
    },
}