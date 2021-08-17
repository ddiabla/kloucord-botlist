const { Command } = require('klasa');

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            runIn: ['text'],
            aliases: ["pong", "latency"],
            description: "Check the bot's latency",
        });
    }

    async run(message, [...params]) {
        let now = Date.now()
        let m = await message.channel.send(`Pinging...`);
      m.edit(`1 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`2 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`3 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`4 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`5 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`6 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`7 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`8 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`9 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`10 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`11 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`12 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`13 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`14 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`15 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`16 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`17 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`18 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`19 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`20 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`1 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`2 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`3 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`4 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`5 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`6 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`7 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`8 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`9 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`10 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`11 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`12 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`13 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`14 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`15 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`16 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`17 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`18 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`19 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`20 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`1 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`2 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`3 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`4 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`5 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`6 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`7 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`8 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`9 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`10 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`11 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`12 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`13 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`14 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`15 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`16 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`17 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`18 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`19 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`20 - Pong! \`${Date.now() - now}\`ms`)
      m.edit(`Finished! Final ping is: \`${Date.now() - now}\`ms`)
    }

};