const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const gasesSchema = new Schema({
    Gases: {
        type: String
    }
    
})

module.exports = Mongoose.model("Gases", gasesSchema);