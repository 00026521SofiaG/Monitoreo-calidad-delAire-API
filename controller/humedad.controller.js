const Humidity = require("../models/humedad.model");
const debug = require("debug")("app:humedad-controller");

const controller = {};

controller.setHumedad = async (req, res) => {
  try {
    console.log("Request Headers:", req.headers);  // Log headers for debugging
    console.log("Request Body:", req.body);        // Log body to see if data is received

    // Ensure req.body is an object
    if (!req.body || typeof req.body !== "object") {
      return res.status(400).json({ error: "Invalid or missing request body" });
    }

    // Convert the object into an array of { key, value } pairs
    const dataArray = Object.entries(req.body).map(([key, value]) => ({
      key,
      value,
    }));

    console.log("Transformed Data Array:", dataArray);

    // Loop through the array and save each item to the database
    const savedData = await Promise.all(
      dataArray.map(async ({ key, value }) => {
        // Assuming "key" is irrelevant for now, and you just save the "value"
        const humedad = new Humidity({
          Humedad: value, // Use the value from the array
        });

        return await humedad.save();
      })
    );

    if (!savedData || savedData.length === 0) {
      return res.status(409).json({ error: "No data was saved" });
    }

    return res.status(201).json(savedData);
  } catch (error) {
    console.error("Error in setTemp:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

controller.getHumedad = async (req,res) =>{
    try {
        const data = await Humidity.find().lean(); // Retrieve all documents
    
        // Transform the object to an array format
        const transformedData = data.map((item) => {
          const timestamp = item.timestamp ? new Date(item.timestamp) : null;
          return {
            Humedad: item.Humedad,
            timestamp: timestamp ? timestamp.toISOString().split('T')[0] : "Invalid Timestamp",
          };
        });
    
        console.log("Transformed Data:", transformedData); // Debug log
        res.json(transformedData); // Send the transformed array
      } catch (error) {
        console.error("Error retrieving data:", error);
        res.status(500).json({ error: "Internal server error" });
      }
}




module.exports = controller;