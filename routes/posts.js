const express = require('express');
const { process_params } = require('express/lib/router');
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

router.delete('/:title', async(req,res)=>{
    try{
    const deleted = await Posts.remove({title: req.params.title})
    res.send(deleted)
    }catch(err){
        res.send(err);
    }
})

router.patch('/:title', async(req,res)=>{
    try{
    const updatedPost = await Posts.updateOne({title: req.params.title}, {$set: {title: req.body.title}})
    res.json(updatedPost)
}catch(err){
        res.send(err)
    }
})

module.exports = router
