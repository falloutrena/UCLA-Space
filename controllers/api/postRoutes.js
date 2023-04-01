const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');
// postroute wich creates a post
// the route should use they post model
// the req.dot body will contain the new post data
// the responce will contain the new post data

router.post('/', withAuth, (req, res) => {
  try {
    // create new post using the they req.body
    const postData = Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(postData);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
});

router.delete('/:id', withAuth, (req, res) => {
  const id = parseInt(req.params.id);

  if (id < 10) {
    res.status(200).end();
  } else {
    res.status(404).end();
  }
});
//localhost:3000/api/posts/

module.exports = router;