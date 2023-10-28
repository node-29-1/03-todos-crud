const catchError = require('../utils/catchError');
const ToDo = require('../models/ToDo');

const getAll = catchError(async (req, res) => {
  const toDos = await ToDo.findAll();
  return res.json(toDos);
});

const create = catchError(async(req, res) => {
  const { title, description, isCompleted } = req.body;
  const toDo = await ToDo.create({ 
    title, description, isCompleted
  });
  return res.status(201).json(toDo);
})

const remove = catchError(async(req, res) => {
  const { id } = req.params;
  await ToDo.destroy({ where: { id } });
  return res.sendStatus(204);
})

const update = catchError(async(req, res) => {
  const { id } = req.params;
  const { title, description, isCompleted } = req.body;
  const toDo = await ToDo.update(
    { title, description, isCompleted },
    { where: { id }, returning: true }
  );
  return res.json(toDo);
});

module.exports = {
  getAll,
  create,
  remove,
  update,
}
