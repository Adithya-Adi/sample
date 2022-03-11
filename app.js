const express = require('express');
require("./startup/db")()
const app = express();
// const bodyParser = require('body-parser')
app.use(express.json());
const {User}=require("./models/user")

//middleware
app.use(logger);

// app.use(bodyParser.json())
//Imports Routes
const postsRoute = require('./routes/posts')
app.use('/posts', postsRoute)

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
];

app.get('/:id',async(req,res)=>{
    try{
    const result=await User.find()
    res.send(result) 
    }catch(err){
        res.json({message:err})
    }
   
});
app.get('/posts',(req,res)=>{
    res.send('hii....');
});
app.get('/posts/:id',(req,res)=>{
    res.send(req.params.id);
});
app.get('/courses',(req,res)=>{
    res.send(courses);
});

app.get('/courses/:id',(req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('Course not found');
    res.send(course);
});



app.post("/", async(req,res)=>{
    const {name}=req.body
    const user=new User({name})
    const result=await user.save()
    res.send(result)
})


function logger(req,res,next){
    console.log('Log')
    next()
}
const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`connected to port ${port}`));