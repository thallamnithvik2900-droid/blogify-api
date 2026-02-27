exports.getAllPosts = (req, res) => {
  res.status(200).json({
    success: true,
    data: [],
  });
};

exports.getPostById = (req, res) => {
  res.status(200).json({
    success: true,
    data: { id: req.params.id },
  });
};

exports.createPost = (req, res) => {
  res.status(201).json({
    success: true,
    data: req.body,
  });
};