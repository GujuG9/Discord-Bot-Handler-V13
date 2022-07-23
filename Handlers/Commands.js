// Getting all of our required dependencies.
const D = require("discord.js");
const colors = require("colors");
const FS = require("fs");
const PATH = require("path");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");

module.exports = (Bot) => {
  // Havign an array of all commands.
  const COMMANDS = [];
  var TOTAL_COMMANDS_COUNT = 0;

  // Gettign our all command files.
  FS.readdirSync("Commands/").forEach((dir) => {
    // If their is a folder in the Commands's dir then get files out of it.
    if (FS.lstatSync(`./Commands/${dir}`).isDirectory()) {
      COMMAND_FILES_FOLDER = FS.readdirSync(`Commands/${dir}`).filter((file) =>
        file.endsWith(".js")
      );
      try {
        // Using a For loop and storing all the commands in our COMMANDS array.
        for (const file of COMMAND_FILES_FOLDER) {
          const CMD_FILE_FOLDER = require(PATH.join(
            require.main.path,
            `Commands/${dir}`,
            file
          ));
          if (CMD_FILE_FOLDER.name && CMD_FILE_FOLDER.description) {
            Bot.commands.set(CMD_FILE_FOLDER.name, CMD_FILE_FOLDER);
            const commandObj = {
              name: CMD_FILE_FOLDER.name.toLowerCase(),
              description: CMD_FILE_FOLDER.description,
            };
            if (CMD_FILE_FOLDER.options) {
              Object.assign(commandObj, { options: CMD_FILE_FOLDER.options });
            }
            if (CMD_FILE_FOLDER.type) {
              Object.assign(commandObj, { type: CMD_FILE_FOLDER.type });
            }
            TOTAL_COMMANDS_COUNT++;
            COMMANDS.push(JSON.stringify(commandObj));
          }
        }
      } catch (error) {
        console.log(String(error.stack).bgRed);
      }
    }
  });

  // And also get all the files out from the main Commands' folder.
  COMMAND_FILES = FS.readdirSync("Commands").filter((file) =>
    file.endsWith(".js")
  );
  try {
    // Using a For loop and storing all the commands in our COMMANDS array.
    for (const file of COMMAND_FILES) {
      const COMMAND_FILES = require(PATH.join(
        require.main.path,
        "Commands",
        file
      ));
      if (COMMAND_FILES.name && COMMAND_FILES.description) {
        Bot.commands.set(COMMAND_FILES.name, COMMAND_FILES);
        const commandObj = {
          name: COMMAND_FILES.name.toLowerCase(),
          description: COMMAND_FILES.description,
        };
        if (COMMAND_FILES.options) {
          Object.assign(commandObj, { options: COMMAND_FILES.options });
        }
        if (COMMAND_FILES.type) {
          Object.assign(commandObj, { type: COMMAND_FILES.type });
        }
        TOTAL_COMMANDS_COUNT++;
        COMMANDS.push(JSON.stringify(commandObj));
      }
    }

    // Sending a success message in the console for the total amount of commands loaded.
    console.log(
      `[INFO] `.bold.red +
        `Checked ${TOTAL_COMMANDS_COUNT} Command files Successfully.`.bold.green
    );
  } catch (error) {
    console.log(String(error.stack).bgRed);
  }

  // Once the commands are loaded, now it's time to deploy them to our Discord bot once the bot is online!
  Bot.on("ready", async () => {
    // Gettign our all command files.
    const COMMAND_FILES = FS.readdirSync("Commands").filter((file) =>
      file.endsWith(".js")
    );
    const rest = new REST({ version: "10" }).setToken(Bot.config.TOKEN);
    try {
      // If the Test Mode is on then verify the test guild ID and load all the commands their only.
      if (Bot.config.TESTMODE === true) {
        if (!Bot.config.TEST_GUILD)
          throw new Error(
            `[ERROR] `.bold.red +
              `Test Guild's ID is either not provided or is Invalid in "Main.json".`
          );
        (async () => {
          try {
            await rest.put(
              Routes.applicationGuildCommands(
                Bot.application?.id,
                Bot.config.TEST_GUILD
              ),
              { body: Bot.commands }
            );
          } catch (error) {
            console.log(String(error.stack).bgRed);
          }
        })();
        console.log(
          `[INFO] `.bold.red +
            `Successfully deployed ${TOTAL_COMMANDS_COUNT} Commands in Test Guild Only.`
              .bold.brightBlue
        );
        return;
      }

      // If the Global option is on then deploy all the commands Globaly in all guilds.
      if (Bot.config.GLOBAL === true) {
        try {
          rest.put(Routes.applicationCommands(Bot.application?.id), {
            body: Bot.commands,
          });
        } catch (error) {
          console.log(String(error.stack).bgRed);
        }
        console.log(
          `[INFO] `.bold.red +
            `Successfully deployed ${TOTAL_COMMANDS_COUNT} Commands in all the Guilds possible.`
              .bold.brightBlue
        );
        console.log(
          `[INFO] `.bold.red +
            `Since you are using Blobal option, It might take an hour or more than that to depoly in all guilds possible.`
              .bold.yellow
        );
        return;
      }

      // If neither of the option is enable then load the all the commands in all guilds, one by one.
      if (Bot.config.GLOBAL === false && Bot.config.TESTMODE === false) {
        Bot.guilds.cache
          .map((guild) => guild)
          .forEach((guild) => {
            try {
              (async () => {
                try {
                  await rest.put(
                    Routes.applicationGuildCommands(
                      Bot.application?.id,
                      guild.id
                    ),
                    { body: Bot.commands }
                  );
                  console.log(
                    `[INFO] `.bold.red +
                      `Successfully deployed ${TOTAL_COMMANDS_COUNT} Commands at : `
                        .bold.brightBlue +
                      `${guild.name}`.bold
                  );
                } catch (error) {
                  console.log(String(error.stack).bgRed);
                }
              })();
            } catch (e) {
              console.log(String(error.stack).bgRed);
            }
          });
        return;
      }
    } catch (error) {
      console.log(String(error.stack).bgRed);
    }
  });
};

/**┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 *                       @ABOUT_THIS_PROJECT
 *     This Project is not made by all of my solo soul (Gamemaster9).
 *       It is inspired by many outstanding creators out their!
 *   What I did is modified between some of my favorite Discord Handlers.
 *    And yes, I have also used some code from other projects as well.
 *     All of that Credits goes to their respective Authors/ Owners.
 *   Thanks to all of them, as this wouldn't be a reality without them.
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 */
