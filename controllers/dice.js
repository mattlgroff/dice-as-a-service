module.exports = {
	roll: function(req, res){
    const dice_string = req.params.dice_string
		const dice_arr = dice_string.split('d')
    const num_of_dice = parseInt(dice_arr[0])
    const size_of_dice = parseInt(dice_arr[1])

    // Malformed string entered instead of #d#
    if(! dice_string.includes('d')){
      res.json(
        {
          'error_msg': 'No d detected.',
          'failed_input': dice_string
      })
    }
    // Not a number, or a negative number.
    else if ( isNaN(num_of_dice) || isNaN(size_of_dice) || num_of_dice < 0 || size_of_dice < 0 ){
      res.json(
        {
          'error_msg': 'Please use a standard positive integer: #d#',
          'failed_input': dice_string      
        })
    }
    // 0 Values, responsd with zero.
    else if( num_of_dice === 0 || size_of_dice === 0 ){
      res.json({'results': 
       {
        'input': dice_string,
        'max': 0,
        'min': 0,
        'results': 0,
        'total': 0
        }
      })
    }
    // Everything is fine. No 0 or negative values.
    else{
      // Set results_array to the results from random_roller
      const results_array = random_roller(num_of_dice, size_of_dice)

      // Send back the info
      res.json({'results': 
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
}

// Input a die and how many, it rolls them and returns the result
random_roller = (num, size) => {
  const results_arr = []

  for(let i=0; i<num; i++){
    // Generate a random number from the size.
    let result = Math.floor(Math.random() * size + 1)
    results_arr.push(result)
  }

  return results_arr
}

// Used for results_array.reduce
getSum = (total, num) => {
  return total + num
}