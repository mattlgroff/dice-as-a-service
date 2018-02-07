const dice = require('../controllers/dice.js')

module.exports = app => {
	app.get('/api/:dice_string', () => dice.roll(req, res, req.params.dice_string))
}