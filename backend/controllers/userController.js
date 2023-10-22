const User = require("../models/user.model.js");

//update user
exports.updateUser = async(req, res)=> {
    const id = req.params.id

    try {
        
        const updateUser = await User.findByIdAndUpdate(id, {$set: req.body}, {new:true});

        res 
            .status(200)
            .json({
                status: true,
                message:"Successfully updated",
                date: updatedUser,
            });
    } catch (err) {
        res.status(500).json({success: false, message:"Failed to update"});
    }
};

//delete user
exports.deleteUser = async(req, res)=> {
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

//get  single user
exports.getSingleUser = async(req, res)=> {
    const id = req.params.id;

    try {
        
        const user = await User.findById(id).select("-password");

        res 
            .status(200)
            .json({
                status: true,
                message:"Users fond",
                date: user,
            });
    } catch (err) {
        res.status(404).json({success: false, message:"No users found"});
    }
};

//get  all user
exports.getAllUser = async(req, res)=> {

    try {
        
        const users = await User.find({}).select("-password");

        res 
            .status(200)
            .json({
                status: true,
                message:"User found",
                date: users,
            });
    } catch (err) {
        res.status(404).json({success: false, message:"No user found"});
    }
};


