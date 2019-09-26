module.exports = function zeros(expression) {
  let factorial_arr = expression.split("*");
  let count_five = 0;
  let count_two = 0;
  factorial_arr.forEach(item =>{
    let num = parseInt(item);
    if (item.includes("!!")){
      let count = 0;
      for (let i = 5; i<=num; i *= 5){   
        count = Math.floor(num/i);
        if(count%2 === 0){
          count_five += count/2;
        }else{
          if (num%2)
            count_five += Math.floor(count/2) + 1;
          else
            count_five += Math.floor(count/2); 
        }
      }
      if(num%2 === 0){
        for (let i = 2; i<=num; i *= 2){    
          count_two += Math.floor(num/i);
        }

      }
      
    }else if(item.includes("!")){
      for (let i = 5; i<=num; i *= 5){
        count_five += Math.floor(num/i);
      }
      for (let i = 2; i<=num; i *= 2){    
        count_two += Math.floor(num/i);
      }
    }
  });

  return Math.min(count_five, count_two);
}
