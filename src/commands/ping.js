const { SlashCommandBuilder } = require('@discordjs/builders');
const {MessageEmbed} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('핑')
        .setDescription('현재 핑을 출력합니다.'),
    async execute(interaction, client) {

        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`🏓 현재 핑은 ${Math.round(client.ws.ping)}ms 입니다.`)
            .setTimestamp(new Date());

        interaction.reply({ embeds: [ embed ] });
    },
};