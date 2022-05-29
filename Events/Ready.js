// Getting all of our required dependencies.
const colors = require("colors");
// Running our Ready event.
module.exports = {
  name: "ready",
  once: true,
  run: async(Bot) => {
  try{
    console.log(
      `[INFO] `.bold.red + `Ready! Logged in as ${Bot.user.tag}`.bold.brightBlue
    );
  } catch (error){
    console.log(String(error.stack).bgRed);
  }
    try {
      console.log(
        `
    ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
    ┃                                                  ┃ 
    ┃ Logged into the bot Successfully!                ┃
    ┃                                                  ┃ 
    ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
		`.bold.brightGreen
      );
    } catch (error) {
      console.log(String(error.stack).bgRed);
    }
  },
};
