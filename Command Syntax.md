@File [Command Syntax and Explanation];
@Author [Gamemaster9];
@Version [V0.0.1]

# Here is the syntax for creating command files :-

```js
const D = require(`discord.js`);
const colors = require(`colors`);

module.exports = {
  name: "",
  description: "",
  options: [],
  ooner: false,
  permissions: ["", ""],
  roles: ["", ""],
  cooldown: 5,

  run: async (Bot, interaction) => {
  },
};
```

## **Explanation is here!**

### __BASICS__ :
```js
// Having our required dependencies.
const D = require(`discord.js`);
const colors = require(`colors`);

// Exporting all the needed stuffs.
module.exports = {
  
  // Name of the command.(Required)
  name: "",
  // Description of the command. (Required)
  description: "",
```
### __For extra options and settings__ :
```js
  // Adding some extra options for commands. (Optional)
  options: [
  
    {
      type: "", // Type of the option.
      name: "", // Option's name.
      description: "", // Option's description
      required: false, // If it is mandatory option or not. Default is "false".
    },
  
  ],
  
  // If the command is owner only command or not. Default is "false". (Optional)
  ooner: false,
  // If the user requires any extra permission to execute the command, to make admin commands, etc. (Optional)
  permissions: ["", ""],
  // If the user requires any specific role to use the command. (Optional)
  roles: ["", ""],
  // Cooldown for the command (in seconds). Default is 5 seconds. (Optional)
  cooldown: 5,
```
### __Final thing is to set the response!__
```js
  // Running our command using `run: async() => {}` (Required)
  run: async (Bot, interaction) => {
      // Do some stuff once the command is run...
  },
};
```

### **Note:** Add all the extra options and response in  `module.exports = {...}` itself.

*For Any kind of futher Info/ Help, you can contact TheseGamemaster9#8566 through DMs.*
