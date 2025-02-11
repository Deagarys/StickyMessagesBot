import 'dotenv/config';

import { Client, IntentsBitField } from 'discord.js';
import { CommandKit } from 'commandkit';

import { dirname as dn } from 'node:path';
import { fileURLToPath } from 'node:url';
import mongoose from "mongoose";

const dirname = dn(fileURLToPath(import.meta.url));

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});

new CommandKit({
    client,
    eventsPath: `${dirname}/events`,
    commandsPath: `${dirname}/commands`
});

(async () => {
    try {
        await mongoose.connect(process.env.DBURI);
        await client.login(process.env.TOKEN);
    } catch (e) {
        console.log(e);
    }
})();