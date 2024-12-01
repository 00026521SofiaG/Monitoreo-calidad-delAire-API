const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const luzSchema = new Schema({
    Luz: {
        type: String
    }
    }, {timestamps: true}
)

module.exports = Mongoose.model("Luz", luzSchema);