import mongoose from "mongoose"
import mongoos from "mongoose"

const messageSchema = new mongoose.Schema (
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        receiverId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        text: {
            type: String,
        },
        image: {
            type: String,
        }
    },
    {timestamps: true}
);

const Message = mongoos.model("Message", messageSchema);

export default Message;