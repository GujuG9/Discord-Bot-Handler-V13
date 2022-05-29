/**
 * @File [Main Discord Bot file.];
 * @Author [Gamemaster9];
 * @Version [V0.0.1]
 */

// Getting all of our required dependencies.
const D             = require("discord.js");
const Config        = require(`./Configs/Main.json`);

// Our Discord client aka our Bot.
const Bot = new D.Client({
  restTimeOffset    : 0,
  shards            : "auto",
  allowedMentions: {
    parse           : ["roles", "everyone", "users"],
    repliedUser     : true,
  },
  intents: [
    // Please refer to Discord docs to get specific Intents.
    D.Intents.FLAGS.GUILDS,
  ],
});

// Some Global variables that will be useful in future needs.
Bot.commands        = new D.Collection();
Bot.cooldown        = new D.Collection();
Bot.config          = require("./Configs/Main.json");
Bot.beauty          = require("./Configs/Beauty.json");

// Getting our Handlers on the mark!
["Events", "Commands", "ErrorHandler"].forEach((handler) => {
  require(`./Handlers/${handler}`)(Bot);
});

// Logging into our Bot!
Bot.login(Config.TOKEN);

/**┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
                              @ABOUT_THIS_PROJECT
            This Project is not made by all of my solo soul (Gamemaster9).
        Although it is written for getting each comfort out of Making a Discord bot.
              It is inspired by many outstanding creators out their!
          What I did is modified between some of my favorite Discord Handlers.
            And yes, I have also used some code from other projects as well.
            All of that Credits goes to their respective Authors/ Owners.
          Thanks to all of them, as this wouldn't be a reality without them.
   ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 */
