const User = require("../models/user.model.js");
const Doctor = require("../models/doctor.model.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


const generateToken = user => { 
    return jwt.sign({is:user._id, role:user.role}, process.env.SECRET_KEY, {
        expiresIn: '15d'
    })
}

const register = async (req, res) => {
    
    const { email, password, name, role, photo, gender } = req.body;
    //console.log(email,password,name,role,photo,gender);
    try {
        let existingUser = null;

        if (role === 'patient') {
            existingUser = await User.findOne({ email: email });
        } else if (role === 'doctor') {
            existingUser = await Doctor.findOne({ email: email });
        }

        if (existingUser) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        if (role === 'patient') {
            const newUser = new User({
                name,
                email,
                password: hashPassword,
                gender,
                photo,
                role,
            });
            await newUser.save();
        } else if (role === 'doctor') {
            const newUser = new Doctor({
                name,
                email,
                password: hashPassword,
                gender,
                photo,
                role,
            });
            await newUser.save();
        }

        res.status(200).json({ success: true, message: 'User successfully created' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server side error, try again' });
    }
}


const login = async(req, res) => {
    
    const {email} = req.body

    try{
    
        let user = null

        const patient = await User.findOne({email})
        const doctor = await Doctor.findOne({email})

        if (patient){
            user = patient
        }
        if(doctor){
            user = doctor
        }

        // check is user exist or not

        if(!user){
            return res.status(404).json({message: "User not foun"});
        }

        // compare password

        const isPasswordMatch = await bcrypt.compare(req.body.password, user.password)

        if(!isPasswordMatch){
            return res.status(400).json({ status:false, message:"Invalid credentials"});
        }

        //get token
        const token = generateToken(user);

        const {password, role, appointments, ...rest} = user._doc

        res
            .status(200)
            .json({status: true, message:"Successfully login", token, data:{...rest}});

    }catch(err){
         res.status(500).json({ status:false, message:"Failed to login"});
    }
}

module.exports = {register, login}