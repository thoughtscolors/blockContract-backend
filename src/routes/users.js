const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/users')

router.post('/', ctrl.createUser)
router.get('/:id', ctrl.getUserById)
router.patch('/:id', ctrl.updateUser)
router.delete('/:id', ctrl.deleteUser)


module.exports = router
