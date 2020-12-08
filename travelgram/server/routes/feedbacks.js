const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const isAdmin = require('../middleware/isadmin');
const checkAuth = require('../middleware/check-auth');
const feedBack = require('../models/feedback');


router.post('/',checkAuth,async(req,res)=>{
    const feedback = new feedBack({
        name:req.body.name,
        description:req.body.description
    });

    try{
        const savedPost = await feedback.save();
        res.json(savedPost);
    }catch(err){
        res.json({ message : err});
    }

   
});












module.exports=router;