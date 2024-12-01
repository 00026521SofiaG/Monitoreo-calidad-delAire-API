const Mongoose = require("mongoose");
const debug = require("debug")("app:mongoose");

const dbhost = process.env.DBHOST || "localhost";
const dbport = process.env.DBPORT || "27017";
const dbname = process.env.DBNAME || "airecalidad";

const dbUri = 'mongodb+srv://sofia:artefactos1@airecalidad.8cat3.mongodb.net/';


const connect = async () =>{
    debug(dbUri);
    try {
        await Mongoose.connect(dbUri); 
        debug(" Successful database connection ");
    } catch (error) {
        debug("Error while connecting to datbase");
        process.exit(1);
    }
      
}

module.exports = {
    connect
}