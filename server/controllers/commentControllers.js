const Comment = require('../db/models/Comment');

exports.listComments = async (req, res) => {
  const comments = await Comment.list();
  res.send(comments);
};

exports.showComment = async (req, res) => {
  const { id } = req.params;

  const comment = await Comment.find(id);
  if (!comment) return res.sendStatus(404);

  res.send(comment);
};

exports.createComment = async (req, res) => {
  const { body, userId } = req.body;

  const comment = await Comment.create(body, userId);
  res.send(comment);
};
