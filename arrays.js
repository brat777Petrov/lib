const arraysTask = {
  /**
 * 
 * @param array - массив, где могут быть не только числа
 * нужно посчитать и вернуть сумму всех чисел
 */
  totalSum: function (array) {
    let sum = 0;
    array.forEach((el) => {
        if ( typeof(el) === 'number' && !isNaN(el)) {
          sum += el;
        }  
       })
   return sum;

  },

  /**
   * на вход ф-ция получает 2 массива
   * нужно вернуть новый массив, в котором будут скомбинированы элементы из 2 массивов таким образом:
   * сначала будут идти первые элементы, потом вторые и тд, если в одном из массивов элементов больше не осталось то просто заполнять элементами из другого массива
   * пример: combine([1, 2, 3], ['a', 'b', 'c', 'd']) => [1, 'a', 2, 'b', 3, 'c', 'd']
   */
   // ***** +1 ********
  combine: function (array1, array2) {
    let maxLength = array1.length;
    if (maxLength < array2.length) {
      maxLength = array2.length;
    } 
    const arrConcat = [];
    for (let i = 0; i < maxLength; i++) {  
      if (array1[i]) {
        arrConcat.push(array1[i]);
      }
      if (array2[i]) {
        arrConcat.push(array2[i]);
      }
    }  
  },
  //вернуть массив, состоящий из идущих подряд чисел, начиная со start, и до end включительно
  //range(0, 3) => [0, 1, 2, 3]
  range(start, end) {
    let arr = [];
      for ( i = 0; i <= (end - start); i++ ) {
        arr[i] = start + i;
      }
      return arr;

  },
  //ф-ция должна вернуть последние n элементов массива
  //если n > array.length то вернуть копию массива
  lastN(array, n) {
    if ( n > array.length ) return array;

      let arr = [];
      for ( let i = n-1; i >= 0; i-- ) {
        arr[i] = array.pop();
      }
      return arr;
  },
  //ф-ция должна вернуть новый массив, в котором будут все элементы исоходного массива, но без дубликатов
  //unique([1, 2, 3, 3]) => [1, 2, 3]
  unique(array) {
     return Array.from(new Set(array));
  },
  /**
   * разбить исходный массив на несколько подмассивов длиной chunkSize
   * chunk([1, 2, 3, 4, 5], 3) => [[1, 2, 3], [4, 5]]
   */
  chunk: function (arr, chunkSize) {
    let arrChunk = [];
    let removed = [];
    const chunkNum = Math.floor(arr.length/chunkSize);

    for (let i = 0; i < chunkNum; i++ ) {
       removed = arr.splice(0, chunkSize);
      arrChunk.push(removed);
    }
     arrChunk.push(arr);
    return arrChunk;
  },
  //вернуть новый массив из элементов, для которых ф-ция cb вернёт true
  //аналог родного array.filter
  filter(array, cb) {
    let arr = [] ;
      let j = 0;
 
      for ( i = 0; i < array.length; i++ ) {
        if (cb(array[i])) {
          arr[j] = array[i];
          j++;
        }
      }
      return arr;
  },
  //эта ф-ция должна работать как array.forEach, но если cb возвращает false то обход цикла должен прикратиться
  breakableForEach(array, cb) {
    for (let i = 0; i < array.length; i++) {
        cb(array[i]);
        if (!cb(array[i])) {
           break;
        }
      }
  },
  //ф-ция должна вернуть true если в обеих массивах одинаковые элементы, иначе false
  //areArraysEqual([1, 2, 3], [2, 3, 1]) => true
  //areArraysEqual([1, 2, 2], [1, 2]) => false
  areArraysEqual(arr1, arr2) {
    
      arr1.sort();
      arr2.sort();
      return (arr1.toString() === arr2.toString());
    }
  
};