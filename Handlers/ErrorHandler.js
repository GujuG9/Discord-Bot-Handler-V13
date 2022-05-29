// Getting all of our required dependencies.
const colors = require("colors");

module.exports = (Bot) => {
  // For Unhandled Rejection errors.
  process.on("unhandledRejection", (error) => {
    console.log(" Error Handler ◈ Unhandled Rejection/Catch".bgRed);
    console.log(error);
  });
  // For Uncaught Exception errors.
  process.on("uncaughtException", (error) => {
    console.log(" Error Handler ◈ Uncaught Exception/Catch".bgRed);
    console.log(error);
  });
  // For Uncaught Exception errors.
  process.on("uncaughtExceptionMonitor", (error) => {
    console.log(" Error Handler ◈ Uncaught Exception/Catch (MONITOR)".bgRed);
    console.log(error);
  });
  // For Multiple Resolves errors.
  process.on("multipleResolves", (error) => {
    console.log(" Error Handler ◈ Multiple Resolves".bgRed);
    console.log(error);
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
