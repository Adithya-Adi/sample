const express = require('express');
const router = express.Router()
const {Posts} = require('../models/Post');
const {User} = require('../models/user');


router.get('/',(req,res)=>{
    res.send('hii.');
});

router.post('/', async(req,res)=>{
    // console.log(req.body)
    const {title,description} = req.body
    const posts = new Posts({title,description})
    const result = await posts.save()
    res.send(result)
});

module.exports = router
