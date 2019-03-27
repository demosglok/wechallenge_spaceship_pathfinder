const router = require('express').Router();
const findPath = require('../controllers/findPath');
const commandCenter = require('../controllers/commandCenter');

router.get('/path', findPath);
router.get('/spaceship', commandCenter.spaceshipsList);
router.get('/spaceship_csv', commandCenter.spaceshipsListCSV);
router.get('/spaceship/:id', commandCenter.spaceshipHistory);

module.exports = router;