const { Client, GatewayIntentBits } = require('discord.js');
const { exec } = require('child_process');
const PREFIX = "/";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent
    ],
    presence: { activities: [{ name: 'with Discord.js v14', type: 'PLAYING' }] }
});

client.login('il mio token');

client.once("ready", () => {
    console.log("BOT ONLINE!");
});

client.on("messageCreate", async (message) => {
    console.log(`Messaggio ricevuto: ${message.content}`);

    const args = message.content.slice(PREFIX.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'anime') {
        message.channel.send("Questo è il link per vedere gli anime: https://www.animeunity.to/");
    } else if (command === 'yacine') {
        message.channel.send("Quale cazzata dirai oggi?");
    } else if (command === 'ledion') {
        message.channel.send("pantheon diff");
    } else if (command === 'grazie') {
        message.channel.send("Ringrazia Not per aver creato questo bot ^_^");
    } else if (command ===  'alby' ) {
        message.channel.send("non quittare troppe partite");
    } else if (command === 'ciao') {
        message.channel.send("ciao");
    } else if (command === 'apri') {
        const animeName = args.join(' ');

        if (animeName) {
            const malUrl = `https://myanimelist.net/anime.php?q=${encodeURIComponent(animeName)}`;

            exec(`start ${malUrl}`, (error) => {
                if (error) {
                    console.error(error);
                    message.channel.send(`Errore nell'apertura di MyAnimeList per ${animeName}`);
                } else {
                    message.channel.send(`Aperto MyAnimeList per ${animeName}`);
                }
            });
        } else {
            message.channel.send('Devi specificare il nome di un anime.');
        }
    }
});
