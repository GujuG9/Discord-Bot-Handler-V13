const D = require(`discord.js`);

module.exports = {
  name: "ping",
  description: "Shows the ping of the bot!",
  cooldown: 5,

  run: async (Bot, interaction) => {
    await interaction.reply({content: `Ping Pong! ${Math.round(Date.now() - date)}`, ephemeral: false});
  },
};
