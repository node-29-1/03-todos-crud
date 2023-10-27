const { getAll } = require('../controllers/toDo.controllers');
const express = require('express');

const toDoRouter = express.Router();

toDoRouter.route("/")
		.get(getAll)

module.exports = toDoRouter;
