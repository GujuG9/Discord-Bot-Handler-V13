// Getting all of our required dependencies.
const MS = require("ms");
// Running our InteractionCreate event.
module.exports = {
  name: "interactionCreate",
  run: async (Bot, interaction) => {
    // Checking if the interaction is a command or not. If not then return.
    if (!interaction.isCommand()) return;
    // Checking if the command still exist in the Main commands' folder. If not then return.
    if (!Bot.commands.has(interaction.commandName)) return;
    // Getting our Command Files.
    const CMD_FILE = Bot.commands.get(interaction.commandName);

    // If the command is Owner only & Owner ID's are specified then allow only owners to use it.
    if (
      CMD_FILE.ooner &&
      Bot.config.OONER.length > 0 &&
      !Bot.config.OONER.includes(interaction.user.id)
    ) {
      // If the user is not the owner of the Bot then replying them for the same.
      interaction.reply({
        content: `> **${Bot.beauty.EMOJIS.wrong} Only \`${Bot.user.tag}\`'s Owner is allowed to use this command.**`,
        ephemeral: true,
      });
      return;
    }

    // If the command requires some permission(s) for user to have in order to use the command, then check if they have or not.
    if (
      CMD_FILE.permissions &&
      !interaction.member?.permissions.has(CMD_FILE.permissions)
    ) {
      // If user don't have required permission(s) then return a "missing permission" message.
      interaction.reply({
        content:
          `>>> **${Bot.beauty.EMOJIS.wrong} You must have the following permissions to use this command.** \n` +
          CMD_FILE.permissions.join(", "),
        ephemeral: true,
      });
      return;
    }

    // If the command requires any specific roles to use it then do this stuff.
    if (
      CMD_FILE.roles &&
      CMD_FILE.roles.length > 0 &&
      interaction.member.roles.cache.size > 0 &&
      !interaction.member.roles.cache.some((role) =>
        CMD_FILE.roles.includes(role.id)
      )
    ) {
      interaction.reply({
        content:
          `>>> **${Bot.beauty.EMOJIS.wrong} You must have any of the following role(s) to use this command.** \n` +
          CMD_FILE.roles.join(", "),
        ephemeral: true,
      });
      return;
    }

    // Creating and Checking the cooldown methods for the commands.
    if (!Bot.cooldown.has(`${CMD_FILE.name}_${interaction.user.id}`)) {
      // Getting the default cooldown amount.
      let COOLDOWN = Bot.config.DEFAULT_COOLDOWN;
      // If any specific cooldown is provided then set that as cooldown.
      if (CMD_FILE.cooldown) COOLDOWN = Bot.config.DEFAULT_COOLDOWN;
      // Now set the user in cooldown time.
      Bot.cooldown.set(`${CMD_FILE.name}_${interaction.user.id}`, Date.now());
      setTimeout(() => {
        Bot.cooldown.delete(`${CMD_FILE.name}_${interaction.user.id}`);
      }, COOLDOWN);
    } else {
      // Getting the expiry date for the cooldown that the user is in.
      const EXPIRY =
        Bot.cooldown.get(`${CMD_FILE.name}_${interaction.user.id}`) + COOLDOWN;
      // If the Expiry date is more than the current time when user uses the coomand then do some stuff.
      if (Date.now() < EXPIRY) {
        // Getting how much time is remaining for the cooldown.
        const REMAINING_TIME = MS(EXPIRY - Date.now());
        // Replying the user with the remaining cooldown time period.
        interaction.reply({
          content: `> **${Bot.beauty.EMOJIS.wrong} You are in Cooldown mode! Wait for \`${REMAINING_TIME}\` seconds to use this command again.**.`,
          ephemeral: true,
        });
      }
    }
    // Running our Actual command now.
    const CMD = Bot.commands.get(interaction.commandName);
    await CMD.run(Bot, interaction);

    // For Buttons
    if (interaction.isButton()) {
    }
    // For Select menus
    if (interaction.isSelectMenu()) {
    }
    // For Context menus
    if (interaction.isContextMenu()) {
      await interaction.deferReply({ ephemeral: false });
      const CMD = Bot.commands.get(interaction.commandName);
      if (CMD) {
        await CMD.run(Bot, interaction);
      }
    }
  },
};
