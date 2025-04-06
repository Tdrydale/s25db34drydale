const mongoose = require("mongoose")
const dragonSchema = mongoose.Schema({
name: String,
color: String,
age: Number
})

module.exports = mongoose.model("Dragon", dragonSchema)
