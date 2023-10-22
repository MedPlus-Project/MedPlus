const jwt = require ("jsonwebtoken");
const Doctor = require ("../models/doctor.model.js");
const User = require ("../models/user.model.js");

exports.authenticate = async(req, res, next) => {
    //get token from headers
    const authToken = req.headers.authorization;

    //check token is exists
    if(!authToken || !authToken.startsWith("Bearer")){
        return res.status(401).json({success: false, message: "No token, authorization denied"});
    }

    try {
        const token = authToken.split(" ")[1];

        // verify token
        const decode = jwt.verify(token, process.env.SECRET_KEY);

        req.userId = decode.id;
        req.role = decode.role;
        next();
    } catch (err) {
        if(err.name === "TokenExpiredError"){
            return res.status(401).json({message:"token is expired"});
        }

        return res.status(401).json({success:false, message:"Invalid token"});
    }
};

exports.restrict = (roles) => async (req, res, next) => {
    const userId = req.userId;
    
    let user;

   
    const patient = await User.findById(userId);
    const doctor = await Doctor.findById(userId);

    if (patient) {
        user = patient;
    }
    if (doctor) {
        user = doctor;
    }

    if (!user) {
        return res.status(401).json({ success: false, message: "User not found" });
    }

    if (!roles.includes(user.role)) {
        return res.status(401).json({ success: false, message: "You are not authorized" });
    }

    next();
};