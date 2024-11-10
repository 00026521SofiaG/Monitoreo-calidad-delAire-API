const Luz1 = require("../models//luz.model");
const debug = require("debug")("app:temperatura-controller");

const controller = {};

controller.setluz = async (req, res) => {
    try{
        const {Luz} = req.body;

        const luz = new Luz1 ({
            Luz : Luz
        });

        const newLuz = await luz.save();

        if(!newLuz){
            return res.status(409).json({ error: "No hay datos" }); 
        }
        return res.status(201).json(newLuz);
    }catch(error){
        debug({error});
        return res.status(500).json({ error: "Internal server error" });
    }
}

controller.getLuz = async (req,res) =>{
    try {
        const {Luz } = req.body;
    
        const luz =
          await Luz1
            .find({ Luz : Luz })
        return res.status(200).json({ luz })
      } catch (error) {
        debug({ error });
        return res.status(500).json({ error: "Internal server error" });
      }
}




module.exports = controller;