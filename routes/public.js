const express = require('express');

const routes = express.Router();

//Send projects
routes.get('/projects',(req,res)=>{
    res
        .status(200)
        .json({projects:'my bests works'})
})

//Recive message  
routes.post('/contact',(req,res)=>{
    if(!req.body.message) res
        .status(400)
        .json({response:'wheres is my message?'});
    else res
        .status(200)
        .json({projects:'still without db logics'});

})

module.exports = routes;