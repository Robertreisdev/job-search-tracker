const express = require('express');
const AddJob = require('../modles/AddJob')
const router = express.Router();

router.post('/add-job', async function (req, res) {
  
    

    try{
        const newJob = new Job(req.body);

        if(newJob){
            res.send(newJob).status(200)
        }else{
            res.status(500).json(error)
        }
    }catch(error){
        res.status(500).json(error)
    }
})


router.post('/get-all-jobs', async function (req, res) {
  
    

    try{
        const result = await Jobs.find({})

        if(result){
            res.send(result).status(200)
        }else{
            res.status(500).json(error)
        }
    }catch(error){
        res.status(500).json(error)
    }
})