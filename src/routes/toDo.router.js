const { getAll, create, remove, update } = require('../controllers/toDo.controllers');
const express = require('express');

const toDoRouter = express.Router();

toDoRouter.route("/") // /todos
	.get(getAll)
	.post(create);

toDoRouter.route("/:id") // /todos/:id
	.delete(remove)
	.put(update);

module.exports = toDoRouter;
