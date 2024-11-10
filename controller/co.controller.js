const cO = require("../models//co.model");
const debug = require("debug")("app:temperatura-controller");

const controller = {};

controller.setCO = async (req, res) => {
    try{
        const {CO} = req.body;

        const co = new cO ({
            co : CO
        });

        const newCO = await co.save();

        if(!newCO){
            return res.status(409).json({ error: "No hay datos" }); 
        }
        return res.status(201).json(newGases);
    }catch(error){
        debug({error});
        return res.status(500).json({ error: "Internal server error" });
    }
}

controller.getCO = async (req,res) =>{
    try {
        const { CO } = req.body;
    
        const co =
          await cO
            .find({ co : CO })
        return res.status(200).json({ co })
      } catch (error) {
        debug({ error });
        return res.status(500).json({ error: "Internal server error" });
      }
}




module.exports = controller;