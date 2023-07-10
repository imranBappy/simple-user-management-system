const {
    usersGetController,
    userGetController,
    userPutController,
    userPostController,
    userDeleteController,
} = require('../controllers/userControllers');

const router = require('express').Router();

router.get('/', usersGetController);
router.get('/:id', userGetController);
router.post('/', userPostController);
router.put('/:id', userPutController);
router.delete('/:id', userDeleteController);


module.exports = router;