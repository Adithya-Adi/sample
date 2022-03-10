const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now 
     }
})
const Posts = mongoose.model('Post',postSchema)
exports.Posts = Posts
// module.exports = mongoose.model('Posts',postSchema)