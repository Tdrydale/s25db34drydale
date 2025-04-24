const mongoose = require("mongoose")
const dragonSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 15
    },
    color: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 40
    },
    age: {
        type: Number,
        required: true,
        min: 1,
        max: 100
    }
})

module.exports = mongoose.model("Dragon", dragonSchema)
