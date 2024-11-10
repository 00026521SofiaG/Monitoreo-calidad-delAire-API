const Temperatura1 = require("../models/temperatura.model");
const debug = require("debug")("app:temperatura-controller");

const controller = {};

controller.setTemperatura = async (req, res) => {
    try{
        const {Temperatura} = req.body;

        const temperatura = new Temperatura1 ({
            Temperatura: Temperatura
        });

        const newTemperatura = await temperatura.save();

        if(!newTemperatura){
            return res.status(409).json({ error: "No hay temperaturas" }); 
        }
        return res.status(201).json(newTemperatura);
    }catch(error){
        debug({error});
        return res.status(500).json({ error: "Internal server error" });
    }
}

controller.getTemperatura = async (req,res) =>{
    try {
        const { Temperatura } = req.body;
    
        const temperatura =
          await Temperatura1
            .find({ Temperatura: Temperatura })
        return res.status(200).json({ temperatura })
      } catch (error) {
        debug({ error });
        return res.status(500).json({ error: "Internal server error" });
      }
}




module.exports = controller;