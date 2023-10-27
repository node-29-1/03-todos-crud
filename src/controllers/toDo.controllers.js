const catchError = require('../utils/catchError');
const ToDo = require('../models/ToDo');

const getAll = catchError(async (req, res) => {
  const toDos = await ToDo.findAll();
  return res.json(toDos);
});

module.exports = {
  getAll,
}
