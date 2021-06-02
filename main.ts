const commands = new discord.command.CommandGroup({
  defaultPrefix: '!' // Use !<commandname>
});

commands.raw('help', (message) =>
  message.reply('Commands: help, hi, github. Use ! to use them.')
);

commands.raw('hi', (message) => 
  message.reply('Hi IG')
);

commands.raw('github', (message) =>
  message.reply('https://github.com/Platypus-Tech/new-platypus-os-drafts')
);
