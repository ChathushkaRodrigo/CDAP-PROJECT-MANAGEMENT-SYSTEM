const crypto = require('crypto')
const User = require('../models/User')
const ErrorResponse = require('../utils/errorResponse')
const sendEmail = require('../utils/sendEmail')
const Group = require('../models/Group')
const jwt = require("jsonwebtoken");
const { Console } = require('console')
const StudentTopicInterestingForm = require('../models/StudentTopicInteresting')
const SubmissionPage = require('../models/SubmissionPage')
const imgModel = require('../models/ImageUpload');

//To view feedback
exports.viewfeedback =async(req,res,next) => {


    let token//to retreive username in backend

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        
        token = req.headers.authorization.split(" ")[1]
    }

    if(token =="null"){
        logged(token,res)
    }
    else{
    const decoded = jwt.verify(token,process.env.JWT_SECRET)


    const user = await User.findById(decoded.id)
    console.log(user.feedback)
    // const{email}=req.body;
    
    try{
        res.status(201).json({
            success: true,
            data: user.feedback
        })
    }catch(error){
        next(error)
    }
}
};


// old view marks method

exports.viewmarks =async(req,res,next) => {
    //const{email}=req.body;
    
    let token//to retreive username in backend
    
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        
        token = req.headers.authorization.split(" ")[1]
    }

    if(token == "null"){
        logged(token,res)
    }
    else{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        console.log(decoded)
        
        const user = await User.findById(decoded.id)
   

        try{
     /*   const studentmarks = await User.findOne({
         email
         
        })*/
        // const marks = studentmarks.marks
        // console.log(marks)
        res.status(201).json({
            success: true,
            data: user.marks
        })
        
    }catch(error){
        next(error)
    }
}
};

//Student topic interesting
exports.StudentTopicInterestingForm = async(req,res,next) => { //Student Recommendation Form
    console.log("Student recommendation api run")
    const {student_ID,Q1,Q2,Q3,Q4,Q5,Q6,Q7} = req.body
    try{
        const user = await StudentTopicInterestingForm.create({
            student_ID,Q1,Q2,Q3,Q4,Q5,Q6,Q7
            
        })
        console.log("Student recommendation success")
        // sendToken(user, 201, res)
    }catch(error){
        next(error)
        console.log("Student recommendation error")
    }
};

//user profile management

exports.userprofilemanagement =async(req,res,next) => {


    let token//to retreive username in backend

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        
        token = req.headers.authorization.split(" ")[1]
    }

    if(token =="null"){
        logged(token,res)
    }
    else{
    const decoded = jwt.verify(token,process.env.JWT_SECRET)


    const user = await User.findById(decoded.id)
    // console.log(user.feedback)
    // const{email}=req.body;
    
    try{
        res.status(201).json({
            success: true,
            data: user
        })
    }catch(error){
        next(error)
    }
}
};

exports.edituserprofile = async(req,res,next) => {
    try{
        const{personalAddress,phoneNumber}=req.body;

        let token//to retreive username in backend

    
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        
        token = req.headers.authorization.split(" ")[1]
    }
    console.log(req.headers.authorization);
    if(token =="null"){
        logged(token,res)
    }
    else{
    const decoded = jwt.verify(token,process.env.JWT_SECRET)


    const user = await User.findById(decoded.id)
    user.address = personalAddress;
    user.phoneNumber = phoneNumber;
    await user.save();

    res.status(201).json({
        success: true
    })
        
        
    }
    }catch(error){
        res.status(500).json({success:false, error:error.message})

    }
}

exports.status =async(req,res,next) => {


    let token//to retreive username in backend

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        
        token = req.headers.authorization.split(" ")[1]
    }

    if(token =="null"){
        logged(token,res)
    }
    else{
    const decoded = jwt.verify(token,process.env.JWT_SECRET)


    const user = await User.findById(decoded.id)
//use the batchID to retreive data with the batchID
    const batch = await SubmissionPage.find(user.batchID)
    console.log(batch)
    try{
        res.status(201).json({
            success: true,
            data: batch
        })
    }catch(error){
        next(error)
    }
}
};


exports.retrieveData =async(req,res,next) => {


    let token//to retreive username in backend

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        
        token = req.headers.authorization.split(" ")[1]
    }

    if(token =="null"){
        logged(token,res)
    }
    else{
    const decoded = jwt.verify(token,process.env.JWT_SECRET)


    const user = await User.findById(decoded.id)
    // console.log(user.feedback)
    // const{email}=req.body;
    
    try{
        res.status(201).json({
            success: true,
            data: user
        })
    }catch(error){
        next(error)
    }
}
};

exports.retrieveImages =async(req,res,next) => {

    imgModel.find({}, (err, items) => {
        if (err) {
          console.log(err);
          res.status(500).send('An error occurred', err);
        }
        else {
        //   res.render('imagesPage', { items: items });
        // if(items.name == "Shas99"){
        //     console.log("Shas99"+items)
        // }
        console.log(items[0]+"hello")
        res.status(201).json({
            success: true,
            data: items[1]
        })
        }
      });

};

const logged = (token,res) => {//check if token is null
    if(token == "null"){
        console.log("You are not logged in")
        res.status(500).json({success:false})
    }
}