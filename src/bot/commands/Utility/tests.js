const { MessageActionRow, MessageButton } = require('discord.js');
const { Command } = require('klasa');
const Discord = require('discord.js')

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            runIn: ['text'],
            aliases: ["test", "tests"],
            description: "Just a TEST command",
        });
    }

    async run(message, [...params]) {

		const row = new Discord.MessageEmbed()
			.addComponents(
				new MessageButton()
					.setCustomId('primary')
					.setLabel('Primary')
					.setStyle('PRIMARY'),
			);

		await message.reply({ content: 'Hi', components: [row] });
	}

          }

