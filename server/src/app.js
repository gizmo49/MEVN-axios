const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')

const Post = require("../models/posts")

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())




//mongoose DB connection 
mongoose.connect('mongodb://node-shop:' + process.env.MONGO_ATLAS_PW + '@cluster0-shard-00-00-vdcp8.mongodb.net:27017,cluster0-shard-00-01-vdcp8.mongodb.net:27017,cluster0-shard-00-02-vdcp8.mongodb.net:27017/posts?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true' +
	{
		useMongoClient: true
	});


app.get('/posts', (req, res) => {
  Post.find({}, 'title description', function (error, posts) {
    if (error) { console.error(error); }
    res.send({
      posts: posts
    })
  }).sort({_id:-1})
})

app.post('/posts', (req, res) => {
  const new_post = new Post({
    _id: new mongoose.Types.ObjectId(),
    title:  req.body.title,
    description: req.body.description
  })

  new_post.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Post saved successfully!'
    })
  })
})

app.listen(process.env.PORT || 8081)