const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
});

userSchema.plugin(passportLocalMongoose);
//automatic username, salting, hashing, hash passport, build kr deta hai.

module.exports = mongoose.model("User", userSchema);