module.exports = {
	roll: function(req, res){
    const dice_string = req.params.dice_string

    // Malformed string entered instead of #d#
    if(! dice_string.includes('d')){
      res.json({'Error': 'No d detected.'})
    }

		const dice_arr = dice_string.split('d')
    const num_of_dice = parseInt(dice_arr[0])
    const size_of_dice = parseInt(dice_arr[1])

    if (isNaN(num_of_dice) || isNaN(size_of_dice) || num_of_dice < 0 || size_of_dice < 0){
      res.json(
        {
          'Error': 'Please use a standard positive integer: #d#',
          'dice_array': dice_arr      
        })
    }

    // Set results_array to the results from random_roller
    const results_array = random_roller(num_of_dice, size_of_dice)

    // Send back the info
    res.json({'Results': 
     {
      'input': dice_string,
      'max': num_of_dice * size_of_dice,
      'min': num_of_dice,
      'results': results_array,
      'total': results_array.reduce(getSum)
      }
    })
	}
}


function random_roller(num, size){
  const results_arr = []

  for(let i=0; i<num; i++){
    // Generate a random number from the size.
    let result = Math.floor(Math.random() * size + 1)
    results_arr.push(result)
  }

  return results_arr
}


function getSum(total, num){
  return total + num
}