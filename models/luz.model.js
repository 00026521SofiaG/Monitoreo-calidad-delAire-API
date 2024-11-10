const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const luzSchema = new Schema({
    Luz: {
        type: String
    }
    
})

module.exports = Mongoose.model("Luz", luzSchema);