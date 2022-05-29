#  🤖 A Discord Bot Handler for V13+

> A **Very easy**, **simple to understand & use**, **fast** and **one of the best** Discord Bot Handler for `discord.js v13+` Inspired by many outstanding Discord developers and [Discord.js Guide](https://discordjs.guide/#before-you-begin).

---

## 👋『 Introduction 』

This is a Discord Bot template or a Discord Bot handler in other words. This was made as a fun project to make a customized handler for some upcoming projects in discord.js v13+ and also decided to open-source it for many upcomming Discord developers out their!

---

## 👍『 Features 』

Despict being a small project, I have made my best to make the handler as feature rich as posible. **Inspired by many other developers out their!**

- Command Handler
    - An easy and clean way to create and execute Slash commands.
    - For creating multiple sub folders in main commands folder.
    - For having a clean input of different options in slash commands. 
    - For having multiple options, Eg. Owner Only commands, Permission commands, Cooldown, & Specific role commands.
    - An easy to use Command syntax!

- Events Handler
    - An easy and clean way to create and run multiple events.
    - An easy skeleton to make as many events as per the requirement.

- Error Handler
    - Handling with different errors is made easy!
    - conosle logs, every type of error with red background to spot instantly.

- Highly Customizable
    - You can customize this handler as per your needs, it's easy, simple and fast to do so.

---

## ⚙️『 Installation Guide 』

> Note: Some writings in this handler are as per the owner of it (Gamemaster9) for clarification here are how the writings has been changed as per what normal other developers use (capitalization may vary) :
> - Client (Discord client) is refered as **"Bot"**
> - Owner of Discord Bot is refered as **"ooner"**
> - Capitalization for file names, folder names, etc.

### **⚠️ Always remember to never commit or share your token or api keys publicly ⚠️**

- `Requirements :`
    - A machine to run it.
    - Basic knowledge about JavaScript and Discord.
    - Node.js v16.6 or higher.
    - Discord.js v13 or higher.
    - Comman sense.

- In `./Configs/Main.json` 
    - Enter your Discord bot's token in **"TOKEN"** field. (Required)
    - You can adjust **"OONER"** field as per the owner of the bot. (Required when using owner only commands). (Depends)
    - You can adjust **"TEST_GUILD"** and **"DEFAULT_COOLDOWN"** fields as per your need. (Optional)
    - You can adjust if the Bot should run commands as Global commands/ For Testing Guild [single guild]/ or as normal slash commands. (Optional)

- In `./Configs/Beauty.json`
    - You can edit your Bot's embed's settings, such as colour, footer, thumbnail, etc. (to use it gloablly without importing it everytime). (Optional)
    - You can adjust the use of emojis as per you needs. (Optional)

- Run `npm i` or `npm install` to install all required depedences. (Required)

- Run `node .` or `node Bot.js` to start the Bot and make it online!

---

## 📚『 More Information about Handler 』

> You can have sub-folders in the main `./Commands` folder. And command file(s) in that folder will be runed too!

> To use modals, buttons, select menus, and other slash functions make them over at `./Events/InteractionCreate.js` for ease usage and access later in the period of time.

---

## 📜『 Credits 』

### ➜ Author:

[**👤 Gamemaster9**](https://github.com/GujuG9)

### ➜ Sources:

**This project is inspired by many other outstanding creators out their! (Including official Discord.js guild)**

[Inpiration 1](https://github.com/Tomato6966) · 
[Inpiration 2](https://github.com/LukeIsHereToDevelop) · 
[Inpiration 3](https://discordjs.guide/)

**Some more as well!**

---

## ✋『 Contribution 』

**If you want to contribute towards this repository then follow these steps.**

> - Fork this Repository.
> - Edit it and save the changes you want to make.
> - Open the pull request.
> - After some checking I will take the actions acordingly.

```fix 
P.S. If you think of using this repo, please mention the credits accordingly. Thank you for giving your time to this.
```
