const Router = require('express');
const controller = require('./authController');
const router = new Router();
const {check} = require('express-validator');
const authMiddleware = require('./middlewares/authMiddleware');
const roleMiddleware = require('./middlewares/roleMiddleware');

router.post('/registration', [
    check('username', 'Username cannot be empty').notEmpty(),
    check('password', 'Password must be 4-20 chars long').isLength({min:4, max: 20})
], controller.registration);
router.post('/login', controller.login);
router.get('/users', authMiddleware, roleMiddleware(['ADMIN']), controller.getUsers);

module.exports = router;
