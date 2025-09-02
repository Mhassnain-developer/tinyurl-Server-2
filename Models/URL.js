import mongoose from "mongoose";

const URLSchema = mongoose.Schema({
    longUrl: {
        type: String,
        required: true,
    },
});

const URLs = mongoose.model("url", URLSchema);
export default URLs;