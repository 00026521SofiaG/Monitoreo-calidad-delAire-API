const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const humedadSchema = new Schema({
    Humedad: {
        type: String
    }    
}, {timestamps: true}
)

module.exports = Mongoose.model("Humedad", humedadSchema);