const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { token, clientId, guildIds } = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');

const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
    guildIds.map(async(guildId) => {
        try {
            rest.put(Routes.applicationGuildCommands(clientId, guildId), {body: commands});
            console.log(`${guildId}에 성공적으로 커맨드를 등록하였습니다.`);
        } catch (error) {
            console.error(error);
        }
    })
})();