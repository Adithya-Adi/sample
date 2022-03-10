const mongoose=require("mongoose")

module.exports=()=>{
    mongoose.connect("mongodb://localhost/test")
        .then(()=>console.log("connected to database"))
        .catch((err)=>console.log(err))
}
