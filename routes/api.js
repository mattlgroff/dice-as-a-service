const dice = require('../controllers/dice.js')

module.exports = app => {
	app.post('/api/:dice_string', dice.roll)
}