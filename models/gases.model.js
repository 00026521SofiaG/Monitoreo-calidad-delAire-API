const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const gasesSchema = new Schema({
    Gases: {
        type: String
    }    
}, {timestamps: true}
)

module.exports = Mongoose.model("Gases", gasesSchema);