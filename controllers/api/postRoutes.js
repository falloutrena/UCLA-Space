const router = require('express').Router();

// postroute wich creates a post
// the route should use they post model
// the req.dot body will contain the new post data
// the responce will contain the new post data



router.post('/', (req, res)  => {
// create new post using the they req.body 
const newPost = {
    ...
    req.body,
    newPostCreated:true 
}
 res.status(200).json(newPost) 
})


router.delete('/:id', (req, res) => {
 const id = parseInt (req.params.id)
 
if(id < 10) {
    res.status(200).end()
} else {
    res.status(404).end()
}
})
http://localhost:3000/api/posts/


module.exports = router