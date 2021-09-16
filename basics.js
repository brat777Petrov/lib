const basicsTask = {
    /**
     * на вход ф-ция получает 3 числа, нужно вернуть сумму этих чисел
     */
    sum(a, b, c) {
        let sum = 0;
        return sum = a + b + c;
    },
    /**
     * аргументами могут быть не только числа
     * нужно вернуть сумму только чисел
     * 
     */
    safeSum(a, b, c) {
        let sum = 0;
        if ( typeof(a) === 'number' && !isNaN(a)) {
            sum += a;
        };
        if ( typeof(b) === 'number' && !isNaN(b)) {
            sum += b;
        };
        if ( typeof(c) === 'number' && !isNaN(c)) {
            sum += c;
        };

        return sum;
    },

    /**
     * на входе есть 3 числа
     * нужно найти максимальное
     */
    max(a, b, c) {
        m = Math.max(a,b,c);
        return m;
    },
    /**
     * 
     * на входе есть 3 числа
     * нужно найти минимальное
     */
    min(a, b, c) {
        m = Math.min(a,b,c);
        return m;
    },
    //если n целое число то вернуть true, иначе false
    isIntegerNumber(n) {
        return (parseInt(n) === n);
    },
    //ф-ция должна уметь округлить число n до l знаков после запятой, 1 <= l <= 10
    //roundNumber(0.66666666, 2) => 0.67
    //roundNumber(1, 1) => 1.0
    roundNumber(n, l) {
         return n.toFixed(l);
    },
    //на входе массив чисел
    //ф-ция должна вернуть массив процентовб т.е. сколько процентов занимает каждое число от общей суммы
    //percentage([1, 1]) => [0.5, 0.5]
    //percentage([1, 2, 3]) => [0.17, 0.33, 0.6]
    percentage(numbers) {
        const sumArr = numbers.reduce(function(sum, current){
        return sum + current;
      })
      const result = numbers.map(function(el){
        return (el/sumArr).toFixed(2);
      })
       
      return result;

    },
};