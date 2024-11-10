const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const tempSchema = new Schema({
    Temperatura: {
        type: String
    }
    
})

module.exports = Mongoose.model("Temperatura", tempSchema);