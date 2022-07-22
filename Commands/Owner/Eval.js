const D = require(`discord.js`);
const colors = require(`colors`);
const { inspect } = require(`util`);

module.exports = {
  name: "eval",
  description:
    "Bot Developer's can use this to eval code directly from discord.",
  options: [
    {
      type: "3", // Type of the option.
      name: "code", // Option's name.
      description: "Enter the code that you want to eval.", // Option's description
      required: true, // If it is mandatory option or not. Default is "false".
    },
  ],
  ooner: true,
  cooldown: 5,

  run: async (Bot, interaction) => {
    EVAL_CODE = interaction.options.getString("code");
    if (EVAL_CODE.includes(`token`)) {
      return console.log(`[ALERT] NO TOKEN GRABBING HEHE...`.bold.red);
    }

    EVELED = await eval(EVAL_CODE);
    let RESULT = inspect(EVELED);
    if (RESULT.includes(Bot.config.TOKEN)) {
      return console.log(`[ALERT] NO TOKEN GRABBING HEHE...`.bold.red);
    }

    await interaction.reply({ content: RESULT, ephemeral: true });
  },
};
