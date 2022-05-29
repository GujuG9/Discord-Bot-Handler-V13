// Getting all of our required dependencies.
const colros = require("colors");
// Running our Error event.
module.exports = {
  name: "error",
  once: true,
  run: async(error) => {
    console.log(`[ERROR] `.bold.red + `${error.stack}`.bold);
  },
};
