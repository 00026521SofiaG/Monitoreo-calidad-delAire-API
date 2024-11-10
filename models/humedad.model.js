const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const humedadSchema = new Schema({
    Humedad: {
        type: String
    }
    
})

module.exports = Mongoose.model("Humedad", humedadSchema);