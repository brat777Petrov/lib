const loopsTasks = {
  /**
   * 
   * @param {} n - целое число
   * нужно посчитать и вернуть сумму всех чисел начиная с 1 и до n
   */
  sumFromOneToN: function (n) {
   let arr = [];
   for ( let i = 1; i <= n; i++ ) {
    arr.push(i);
   };
   console.log(arr);
     return arr.reduce((sum, el) => {
      return sum + el;
     })
  },

  /**
   * вывести на консоль строку посимвольно всеми доступными циклами. for, for of, while, do .. while
   */
  printString(str) {
    for ( let i =0; i < str.length; i++ ) {
      console.log(str[i]);
    };

    for ( let i in str ) {
      console.log(str[i]);
    };

     i =0;
    while ( i < str.length ) {
      console.log(str[i]);
      i++;
    }

     i =0;
     do {
      console.log(str[i]);
      i++;
    } while ( i < str.length )
   },


  /**
   * на вход ф-ция получет 2 числа n, maxAttempts
   * n - максимальное число, maxAttemps - максимальное кол-во попыток угадывания
   * ф-ция генерирует псевдослучайное счисло между 1 и n
   * далее у пользователя есть maxAttemps попыток это число угадать
   * ф-ция должна запрашивать у пользователя число, через prompt
   * если пользователь угадал число - вернуть true, если все попытки использованы и число не угадано - false
   * использовать цикл do ... while
   */
  guessNumber(n, maxAttempts) {
    const number = Math.floor(Math.random(n) * n);
    
    let i = 0;
    do  {
      attempt = +prompt('Число ? ');
      if ( attempt == number ) {
        return true;
      } 
      i++;
    } while ( i < maxAttempts )

    return false;
   },

};