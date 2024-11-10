const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const coSchema = new Schema({
    co: {
        type: String
    }
    
})

module.exports = Mongoose.model("co", coSchema);