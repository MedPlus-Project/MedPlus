const Doctor = require("../models/doctor.model.js");

//update docotor
exports.updateDoctor = async(req, res)=> {
    const id = req.params.id

    try {
        
        const updateDoctor = await User.findByIdAndUpdate(id, {$set: req.body}, {new:true});

        res 
            .status(200)
            .json({
                status: true,
                message:"Successfully updated",
                data: updateDoctor,
            });
    } catch (err) {
        res.status(500).json({success: false, message:"Failed to update"});
    }
};

//delete user
exports.deleteDoctor = async(req, res)=> {
    const id = req.params.id

    try {
        
        await User.findByIdAndDelete(id,);

        res 
            .status(200)
            .json({
                status: true,
                message:"Successfully deleted",
            });
    } catch (err) {
        res.status(500).json({success: false, message:"Failed to delete"});
    }
};

//get  single doctor
exports.getSingleDoctor = async(req, res)=> {
    const id = req.params.id;

    try {
        
        const doctor = await User.findById(id).select("-password");

        res 
            .status(200)
            .json({
                status: true,
                message:"Users fond",
                data: doctor,
            });
    } catch (err) {
        res.status(404).json({success: false, message:"No users found"});
    }
};

//get  all user
exports.getAllDoctor = async(req, res)=> {

    try {
        
        const doctor = await Doctor.find({}).select("-password");

        res 
            .status(200)
            .json({
                status: true,
                message:"User found",
                data: doctor,
            });
    } catch (err) {
        res.status(404).json({success: false, message:"No user found"});
    }
};


