const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const coSchema = new Schema({
    co: {
        type: String,
        require: true,
    }
    }, {timestamps: true}
    
)

module.exports = Mongoose.model("co", coSchema);