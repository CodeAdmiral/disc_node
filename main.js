process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason)
  process.exit(1)
});

const fs = require('fs');
const Discord = require('discord.js');
const Naughts = require('./Engine/naughts.js');
const NaughtsInterface = require('./Interface/NaughtsInterface.js');
const client = new Discord.Client();



//Log the bot in
client.login(fs.readFileSync('token.txt', 'utf8'));
var prefix = '12 ';

// Instantiate naught
naughtsInstance = new Naughts();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Create an event listener for messages
client.on('message', message => {

    //Check if the message is relevent to the naughts game
    NaughtsInterface.HandleMessage(message, prefix);
    
});


