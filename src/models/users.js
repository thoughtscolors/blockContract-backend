const usersQuery = require('../../queries/users')

const createUser = async (user) => {
  return await usersQuery.createUser(user)
}

const getUserById = async (id) => {
  return await usersQuery.getUserById(id)
}

const updateUser = async (user) => {
  return await usersQuery.updateUser(user)
}

const deleteUser = async (id) => {
  return await usersQuery.deleteUser(id)
}

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser
}
