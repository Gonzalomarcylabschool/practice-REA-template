const express = require('express');
const commentControllers = require('../controllers/commentControllers');

const commentRouter = express.Router();

commentRouter.get('/', commentControllers.listComments);
commentRouter.get('/:id', commentControllers.showComment);
commentRouter.post('/', commentControllers.createComment);

module.exports = commentRouter;
