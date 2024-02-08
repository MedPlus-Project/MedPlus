const { callOpenAI } = require("../utils/openai"); // Replace 'yourFileName' with the actual filename
exports.addMedicalData = async (req, res, next) => {
  try {
    const medicalData = req.body;
    const result = await callOpenAI(medicalData);
    const data = JSON.parse(result);
    res.status(200).json({
      data: data,
      message: "Success",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
