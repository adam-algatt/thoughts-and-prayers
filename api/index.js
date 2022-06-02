const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./thought-routes.js');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;