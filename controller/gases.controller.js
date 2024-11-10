const Gases1 = require("../models/gases.model");
const debug = require("debug")("app:temperatura-controller");

const controller = {};

controller.setGases = async (req, res) => {
    try{
        const {Gases} = req.body;

        const gases = new Gases1 ({
            Gases : Gases
        });

        const newGases = await gases.save();

        if(!newGases){
            return res.status(409).json({ error: "No hay datos" }); 
        }
        return res.status(201).json(newGases);
    }catch(error){
        debug({error});
        return res.status(500).json({ error: "Internal server error" });
    }
}

controller.getGases = async (req,res) =>{
    try {
        const { Gases } = req.body;
    
        const gases =
          await Gases1
            .find({ Gases : Gases })
        return res.status(200).json({ gases })
      } catch (error) {
        debug({ error });
        return res.status(500).json({ error: "Internal server error" });
      }
}




module.exports = controller;