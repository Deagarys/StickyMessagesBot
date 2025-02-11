import mongoose, { Schema } from 'mongoose';
const stickyMessageSchema = new Schema({
    channelId: {
        type: String,
        required: true,
    },
    isEmbed: {
        type: Boolean,
        required: true
    },
    messageId: {
        type: String,
        required: false
    },
    messageEmbed: {
        type: JSON,
        required: false
    },
    lastMessageId: {
        type: String,
        required: false,
        nullable: true
    },
    stickyMessageChannelId: {
        type: String,
        required: false
    },
    stickyMessageContent: {
        type: String,
        required: false
    }
});

const model = mongoose.model('StickyMessage', stickyMessageSchema);
export const schema = model.schema;
export default model;