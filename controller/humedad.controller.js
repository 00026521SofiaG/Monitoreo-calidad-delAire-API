const Humidity = require("../models/humedad.model");
const debug = require("debug")("app:temperatura-controller");

const controller = {};

controller.setHumedad = async (req, res) => {
    try{
        const {Humedad} = req.body;

        const humedad = new Humidity ({
            Humedad: Humedad
        });

        const newHumedad = await humedad.save();

        if(!newHumedad){
            return res.status(409).json({ error: "No se guardo la humedad" }); 
        }
        return res.status(201).json(newHumedad);
    }catch(error){
        debug({error});
        return res.status(500).json({ error: "Internal server error" });
    }
}

controller.getHumedad = async (req,res) =>{
    try {
        const { Humedad } = req.body;
    
        const humedad =
          await Humidity
            .find({ Humedad : Humedad })
        return res.status(200).json({ humedad })
      } catch (error) {
        debug({ error });
        return res.status(500).json({ error: "Internal server error" });
      }
}




module.exports = controller;