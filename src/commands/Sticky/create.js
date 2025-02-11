import { SlashCommandBuilder } from "discord.js";
import StickyMessage from "../../../models/stickyMessage.js";

export const data = new SlashCommandBuilder()
    .setName('sticky')
    .setDescription('sticky')
    .addSubcommand((subcommand) =>
        subcommand
            .setName('create')
            .setDescription('Create a sticky message')
            .addStringOption((option) =>
                option
                    .setName('channel-id')
                    .setDescription('Set a channel Id for the sticky message.')
                    .setRequired(true)
            )
            .addBooleanOption((option) =>
                option
                    .setName('message-is-embed')
                    .setDescription('Is the message you are going to send a embed?')
                    .setRequired(true)
            )
            .addStringOption((option) =>
                option
                    .setName('message-id')
                    .setDescription('Message Id of the message that should be send.')
                    .setRequired(true)
            )
    );

export async function run({interaction, client, handler}) {
    await interaction.deferReply();

    const channelId = interaction.options.getString('channel-id');
    const messageId = interaction.options.getString('message-id');
    const isEmbed   = interaction.options.getBoolean('message-is-embed');
    const embedJson = interaction.options.getString('embed-json');

    let error = false;
    if (isEmbed && embedJson === undefined)
        error = true;

    if (!isEmbed && messageId === undefined)
        error = true;

    if (error) {
        console.log("❌ - Error in create command")
        interaction.editReply({
            content: `Error`,
            ephemeral: true
        });
        return;
    }

    const newMessage = new StickyMessage({
        channelId: channelId,
        isEmbed: isEmbed,
        embedJson: isEmbed ? embedJson : null,
        messageId: !isEmbed ? messageId : null
    });

    if (!isEmbed) {

        let message = undefined;
        try {
            message = await interaction.channel.messages.fetch(messageId);
        } catch (e) {
            console.log("❌ - Message not in same channel")
        }

        if (message == null) {
            interaction.editReply({
                content: `Cant find message, make sure u are in the same channel`,
                ephemeral: true
            });
            return;
        }

        let stickyChannelId = message.channelId;
        let stickyContent = message.content;

        newMessage.stickyMessageChannelId = stickyChannelId;
        newMessage.stickyMessageContent = stickyContent;
    }

    if (isEmbed) {

        let message = undefined;
        try {
            message = await interaction.channel.messages.fetch(messageId);
        } catch (e) {
            console.log("❌ - Message not in same channel")
        }

        if (message == null) {
            interaction.editReply({
                content: `Cant find message, make sure u are in the same channel`,
                ephemeral: true
            });
            return;
        }

        let stickyChannelId = message.channelId;
        let embed = message.embeds;

        newMessage.stickyMessageChannelId = stickyChannelId;
        newMessage.messageEmbed = embed;
    }

    await newMessage.save();

    interaction.editReply({
        content: `Message saved`,
        ephemeral: true
    });
    return console.log("✅ - Sticky created.");
}

export function autocomplete({ interaction, client, handler }) {

}