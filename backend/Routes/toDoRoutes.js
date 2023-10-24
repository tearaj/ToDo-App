const {Router} = require('express')
const { getToDo, saveToDo, updateToDo, deleteToDo, tester } = require('../controllers/toDoController')

const router = Router()

router.get('/',getToDo)
router.post('/save',saveToDo)
router.put('/update',updateToDo)
router.delete('/delete',deleteToDo)
router.get('/test',tester)
module.exports = router