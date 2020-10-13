const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'process.env.token';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '샤크야 안녕') {
    message.reply('네! 안녕하세요~!');
    }
  });

client.login(token);