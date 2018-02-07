module.exports = {
	roll: function(req, res, dice_string){
    if(! dice_string.contains('d')){
      res.json({"Error": 'No d detected.'})
    }

		const dice_arr = dice_string.split('d')
    const num_of_dice = dice_arr[0]
    const size_of_dice = dice_arr[2] 
	}
}