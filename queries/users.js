const knex = require('./db')
const bcrypt = require('bcryptjs')

const createUser = ({ email, name, password, pub_key }) => {
  console.log(email, name, password, pub_key);
  const salt = bcrypt.genSaltSync(10)
  const hashedPassword = bcrypt.hashSync(password, salt)
  console.log(hashedPassword);

  return knex('users')
  .insert({ email, name, password: hashedPassword, pub_key })
  .returning('*')
}

const getUserById = (id) => {
  return knex('users')
  .where({ id })
  .first()
}

const updateUser = (user) => {
  return knex('users')
  .where('id', user.id)
  .update(user)
  .returning('*')
}

const deleteUser = (id) => {
  return knex('users')
  .where({ id })
  .del()
  .returning('*')
}

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser
}
