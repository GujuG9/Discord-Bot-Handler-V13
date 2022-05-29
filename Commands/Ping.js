const D = require(`discord.js`);

module.exports = {
  name: "ping",
  description: "Shows the ping of the bot!",
  cooldown: 5,

  run: async (interaction, Bot) => {
    await interaction.reply({content: `Just a test!`, ephemeral: false});
  },
};