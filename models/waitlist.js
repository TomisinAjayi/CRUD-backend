const mongoose = require("mongoose");

const waitlistSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },   
    },
    {
        timestamps: true
    }
);

const waitlistModel = mongoose.model("waitlist", waitlistSchema);
module.exports = waitlistModel;