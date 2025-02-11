import 'dotenv/config';
import StickyMessage from "../../../models/stickyMessage.js";

export default async (message, client, handler) => {
    if (message.author.id === process.env.BOTID)
        return;

    const sticks = await StickyMessage.findOne({channelId: message.channelId}).catch(err => err);
    if (sticks === null)
        return;

    if (sticks.lastMessageId != null) {
        try {
            await message.channel.messages.delete(sticks.lastMessageId);
        } catch (e) {
            console.log("❌ - Message delete failed.");
        }

    }

    if (!sticks.isEmbed) {
        try {
            let sendMessage = await message.channel.send(sticks.stickyMessageContent);
            sticks.lastMessageId = sendMessage.id;
            await sticks.save();
        } catch (e) {
            console.log("❌ - Message send failed.");
        }
    }

    if (sticks.isEmbed) {
        let sendMessage = await message.channel.send({embeds: [sticks.messageEmbed[0].data]});
        sticks.lastMessageId = sendMessage.id;
        await sticks.save();
    }

    console.log("🔹 - Sticky message sent!");
}