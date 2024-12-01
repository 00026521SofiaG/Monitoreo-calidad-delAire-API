const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const tempSchema = new Schema({
    temperatura:{
        type: String,
        require: true,
    }
    }, {timestamps: true}
    
);

module.exports = Mongoose.model("Temperatura", tempSchema);