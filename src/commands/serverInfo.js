const { SlashCommandBuilder } = require('@discordjs/builders');
const {MessageEmbed} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('서버정보')
        .setDescription('현재 서버의 정보를 보여줍니다.'),
    async execute(interaction, client) {

        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${interaction.guild.name}`)
            .setThumbnail(`${interaction.guild.iconURL()}`)
            .addFields(
                { name: "생성일", value: `${interaction.guild.createdAt}`},
                { name: "ID", value: `${interaction.guild.id}`, inline: true },
                { name: "유저 수", value: `${interaction.guild.memberCount}`, inline: true },
            )
            .setFooter({text: `${interaction.user.username}`, iconURL: `${interaction.user.avatarURL()}`})
            .setTimestamp(new Date());

        await interaction.reply({ embeds: [embed]});
    },
};