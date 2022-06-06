const { SlashCommandBuilder } = require('@discordjs/builders');
const {MessageEmbed} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('유저정보')
        .setDescription('유저 정보를 출력합니다'),
    async execute(interaction, client) {

        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${interaction.user.username}`)
            .setThumbnail(`${interaction.user.avatarURL()}`)
            .addFields(
                { name: "계정 생성일", value: `${interaction.user.createdAt}`},
                { name: "ID", value: `${interaction.user.id}`, inline: true },
                { name: "계정 태그", value: `${interaction.user.tag}` }
            )
            .setFooter({text: `${interaction.user.username}`, iconURL: `${interaction.user.avatarURL()}`})
            .setTimestamp(new Date());

        await interaction.reply({ embeds: [embed] });
    },
};