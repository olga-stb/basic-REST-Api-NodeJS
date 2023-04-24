exports.getPosts = (req, res, next) => {
  // status 200 - 'success'
  res.status(200).json({
    posts: [
      {
        title: 'First Post',
        content: 'This is the first post!'
      }
    ]
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;

  // Create post in db

  // status 201 - 'success and something was created'
  res.status(201).json({
    message: 'Post created successfully!',
    post: {
      id: new Date().toISOString(),
      title: title,
      content: content
    }
  });
};