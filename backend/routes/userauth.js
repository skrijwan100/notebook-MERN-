const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const { body, validationResult } = require('express-validator')
var jwt = require('jsonwebtoken');
const User = require("../models/User");
const fetchuser=require("../middleware/fecthuser")
JWT_SECERT="qp^)#gz*VNI"

// Route to register a new user
router.post("/register",[
    body('email',"Enter a valid email").isEmail(),
    body('name',"Enter your name").isLength({ min: 4 }),
    body('password',"Enter a password more then 5 word").isLength({ min: 5 }),
], async (req, res) => {
    const sceuess=true
    console.log(req.body);
    const { name, email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
        // Check if a user with the given email already exists
        let existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.json({ message: 'Email already in use' });
        }
        const salt = await bcrypt.genSalt(10)
        const secpass= await bcrypt.hash(req.body.password,salt) 

        // Create a new user instance with the request data
        const user = await User({
            name:req.body.name,
            password:secpass,
            email:req.body.email

        });

        // Save the new user to the database
        await user.save();

        const authtoken =jwt.sign({
            user:user.id,
        },JWT_SECERT)

        // Respond with the created user data
        res.status(201).json({sceuess,authtoken});

    } catch (error) {
        console.error(error);
        // Respond with an error message
        res.status(500).json({sceuess,error: "Internal Server Error",});
    }
});


// user login 
router.post("/login",[
    body('email',"Enter a valid email").isEmail(),
    body('password',"Enter the passsword").exists(), 
], async (req, res) => {
    const sceuess=true
    try {
        const {password,email}=req.body
        const error=validationResult(req)
        if(!error){
            return res.status(400).json({errors: error.array()})
        }
        const user= await User.findOne({email})
        if(!user){
            return res.status(400).json({"error":"Enter a valid email."})
        }
        const chakepassword= await bcrypt.compare(password,user.password)
        if(!chakepassword){
            return res.status(400).json({"error":"Enter a correct password"})
        }

        const authtoken =jwt.sign({
            user:user.id,
        },JWT_SECERT)

        res.status(201).json({sceuess,authtoken});
    }catch(error) {
        sceuess=false
        console.log(error)
        res.status(500).json({sceuess,"error":"Intarnal server error"});

        
    }

});
//Getuer data 
router.post("/getuser",fetchuser, async (req, res) => {
    try {
        ueserid=req.user
        console.log(ueserid)
        const user = await User.findById(ueserid).select("-password")
        res.status(201).send(user)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({"error":"Intarnal server error"});
        
    }
})

module.exports = router;
