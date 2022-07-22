// Getting all of our required dependencies.
const D = require("discord.js");
const colors = require("colors");
const FS = require("fs");
const PATH = require("path");

module.exports = async (Bot) => {
  // Loading the Events file path and total files in it.
  let TOTAL_FILES = 0;
  const EVENTS_PATH = PATH.join(__dirname, "../Events");
  const EVENTS_FILES = FS.readdirSync(EVENTS_PATH).filter((file) =>
    file.endsWith(".js")
  );

  // Executing each event file with a for loop in try{}catch{}
  try {
    for (const file of EVENTS_FILES) {
      const EVENT = require(PATH.join(`../Events`, file));
      if (EVENT.once) {
        Bot.once(EVENT.name, (...args) => EVENT.run(Bot, ...args));
        TOTAL_FILES++;
      } else {
        Bot.on(EVENT.name, (...args) => EVENT.run(Bot, ...args));
        TOTAL_FILES++;
      }
    }
  } catch (error) {
    console.log(String(error.stack).bgRed);
  }

  // Logging the total amount of events loaded.
  console.log(
    `[INFO]`.bold.red +
      ` ${TOTAL_FILES} Events loaded successfully.`.bold.brightBlue
  );

  // Logging a beautiful success message to ensure everything is working perfectly.
  try {
    console.log(
      `
    ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
    ┃                                                  ┃ 
    ┃ All Events are Loaded Successfully!              ┃
    ┃                                                  ┃ 
    ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
    `.bold.brightGreen
    );
  } catch (error) {
    console.log(String(error.stack).bgRed);
  }

  // "Logging into the bot" message in console.
  try {
    console.log(
      `
    ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
    ┃                                                  ┃ 
    ┃ Logging into the Bot now...                      ┃
    ┃                                                  ┃ 
    ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
    `.bold.brightGreen
    );
  } catch (error) {
    console.log(String(error.stack).bgRed);
  }
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
