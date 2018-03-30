const commando = require('discord.js-commando');
const bot = new commando.Client();


bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('NDI4NjE2MDg3MDA1OTU0MDQ4.DZ8Ozw.aLMk5qS1tueadnkUfrvhULtmhQo');
