module.exports = {
    name: "messageCreate",
    async execute(message) {

        if (message.author.id !== "1318490033464021032") return;
        if (message.channel.id === "1344570100589662268") return;
        const chance = Math.random() * 100;
        const voiceLines = [
            "NO! No! Not again... *Eugh* *Arugh* Can you please just... TRY to be quiet until they leave the shop? I really don't need the unnecessary whisper right now. Thank you.",
            "*Sigh* Hey. Listen. I'm... really tired right now, so, if you could just, keep it down, for the duration that they're in here, that'd be great. Thank you.",
            "Look. I know scaring this punk is entertaining and all, but, do you mind saving that after visiting hours are over? I think I have my fair share of existential dread as is, *Heh* Appreciate it."
        ];
        const voiceLine = voiceLines[Math.floor(Math.random() * voiceLines.length)];
        if (chance < 90) {
            return;
          } else {
            message.channel.send(`${voiceLine}`);
          };
    },
};