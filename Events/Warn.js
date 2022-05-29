// Getting all of our required dependencies.
const colros = require("colors");
// Running our Warn event.
module.exports = {
  name: "warn",
  once: true,
  run: async(error) => {
    console.log(`[WANR] `.bold.yellow + `${error.stack}`.bold);
  },
};
