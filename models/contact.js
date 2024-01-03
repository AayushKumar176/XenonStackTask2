const mongoose = require("mongoose");
const validator = require("validator");

const contactSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("not valid email address");
            }
        }
    },
    mobile: {
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    }
});

const contact = new mongoose.model("contacts",contactSchema);

module.exports = contact;