const express = require('express');
const User = require('../modles/User')
const router = express.Router();

router.post('/login', async function (req, res) {
  

    try{
        const result = User.findOne({email: req.body.email, password: req.body.password})

        if(result){
            res.send(result).status(200)
        }else{
            res.status(500).json(error)
        }
    }catch(error){
        res.status(500).json(error)
    }
})


router.post('/register', async function (req, res) {
  
    
    try{
        const result = User.findOne({email: req.body.email, password: req.body.password})

        if(result){
            res.send(result).status(200)
        }else{
            res.status(500).json(error)
        }
    }catch(error){
        res.status(500).json(error)
    }
})

router.post("/delete-job", async function (req, res) {
    try {
      await Job.findOneAndDelete({_id : req.body.transactionId})
      res.send("Job removed sucessfully");
    } catch (error) {
      res.status(500).json(error);
    }
  });


  module.exports = router;