const model = require('../models/users')

const createUser = async (req, res, next) => {
  try {
    const response = await model.createUser(req.body)
    res.status(201).json(response)
  } catch(err) {
    console.log(err);
    res.status(404).json(err)
  }
}

const getUserById = async (req, res, next) => {
  try {
    const response = await model.getUserById(req.params.id)
    res.status(200).json(response)
  } catch(err) {
    console.log(err);
    res.status(404).json(err)
  }
}

const updateUser = async (req, res, next) => {
  try {
    const response = await model.updateUser(req.params.id)
  } catch(err) {

  }
}

const deleteUser = async (req, res, next) => {
  try {
    const response = await model.deleteUser(req.params.id)
  } catch(err) {

  }
}

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser
}
