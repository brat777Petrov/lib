const stringTasks = {
  /** 777
   * вернуть строку, где все слова из исходной строки будут начинаться с заглавных букв
   */
  capitalizeWords(srcStr) {
    const arr = srcStr.split(' ');
    for ( let i = 0; i < arr.length; i++ ) {
      arr[i] = arr[i][0].toUpperCase() +  arr[i].slice(1) ;
    }
    return arr.join(' ');
   },

  /** 777
   *
   * на вход подается строка со словами разделенными пробелами
   * вернуть строку в camelCase
   * 'just a string' => 'justAString'
   */
  toCamelCase(srcStr) { 
    const arr = srcStr.split(' ');
    for ( let i = 1; i < arr.length; i++ ) {
      arr[i] = arr[i][0].toUpperCase() +  arr[i].slice(1);
    }
    return arr.join('');
  },

  /** 777+
   * на вход подается строка в camelCase
   * вернуть строку в snake_case
   * 'camelCaseString' => 'camel_case_string'
   */
  camelToSnake(srcStr) { 
  
    const arr = [];
    for ( let i = 0; i < srcStr.length; i++ ) {
     if (srcStr[i].toUpperCase() === srcStr[i]) {
      arr.push('_');
      arr.push(srcStr[i].toLowerCase());
     } else {
      arr.push(srcStr[i]);
     } 
    }
    return arr.join('');
  },

  /**
     * 
     * вернуть строку, в которой все слова будут начинаться с большой буквы
     * считать что на вход подается строка, в которой все слова разделены одним пробелом
     * capitalize('this string will be capitalized') => 'This String Will Be Capitalized'
     */
  capitalizeWords: function (str) {

  },
  /* 777+  на входе строка @srcString, в которой слова разделены пробелами, и ch - символ, из которого будем "рисовать" рамку
    вывести строку на консоль, так что-бы каждое слово было в новой строке а весь вывод был в текстовой псевдорамке
    например
    printInFrame('This string will be printed in frame', '*');
    ***********
    * This    *
    * string  *
    * will    *
    * be      *
    * printed *
    * in      *
    * frame   *
    * *********
     */
  printInFrame: function (srcString, ch) {
      const arr = srcString.split(' ');

      let maxLength = 0;
      for (let i = 0; i < arr.length; i++ ) {
        if ( maxLength < arr[i].length ) {
          maxLength = arr[i].length;
        }
      }

       lineCh = (ch) => {
         console.log(ch.repeat(maxLength + 4))
       }
        
      lineCh(ch);
      for (let i = 0; i < arr.length; i++ ) {
        let backLine = ' '.repeat(maxLength - arr[i].length);
        console.log('* ' + arr[i] + backLine + ' *');
      }
      lineCh(ch);
    
  },

  /** 777
   * вернуть строку, в которой все символы будут идти в обратном порядке
   * reverseString('abc') => 'cba';
   */
  reverseString(str) {
    return str.split('').reverse().join('');
  },

  /**
   * вернуть число, в котором цифры будут идти в обратном порядке
   * обратить внимание и правильно обработать случай когда число со знаком -
   */
  /*
  reverseNumber(2) => 2
  reverseNumber(12345) => 54321
  reverseNumber(543210) => 12345
  reverseNumber(1020) => 201
  reverseNumber(-345) => -543
   */
  reverseNumber: function (n) {
    let num = 0;
    const sign = n < 0 ? -1: 1;
         num = n * (sign);
         num = reverseString(num.toString());
         num = num * (sign);
    return +num;
  },
  /**
   * нужно посчитать кол-во каждого символа в строке
   * считать 'a' и 'A' разными символами
   * вывести результат в любом удобном виде
   */
  charCount: function (str) {
    let char = {};
    for (let i =0; i < str.length; i++) {
      if (!char[str[i]]) {
        char[str[i]] = 1;
      } else {
        char[str[i]] += 1;
      }
    }
   
    let result ='';
    for ( let key in char) {
     result += key + ': ' + char[key] + ', ';
    }

    return result.slice(0,result.length - 2);
  },

  /**
   * 
   * проверить являются ли строки анаграмами и вернуть true если да, иначе - вернуть false
   * пробелы игнорировать
   * примеры
   * areAnagrams('anagram', 'nag a ram') => true;
   * areAnagrams('Eleven plus two', 'Twelve plus one'); => true;
   * areAnagrams('O, Draconian devil', 'Leonardo da Vinci') => true;
   */
  areAnagrams: function (str1, str2) {
    const strNew1 = str1.toLowerCase().match(/\w/g).sort();
    const strNew2 = str2.toLowerCase().match(/\w/g).sort();
    
    return (charCount(strNew1) === charCount(strNew2));
  },
  /**
   * 
   * проверить, является ли строка палиндромом
   * палиндром - это такая строка, которая одинаково читается в обе стороны
   * примеры:
   * isPalindrome('a') => true;
   * isPalindrome('abc') => false;
   * isPalindrome('aabbaa') => true;
   */
  isPalindrome: function (str) {
    for ( i = 0; i <= str.length - i - 1; i++ ) {
      if ( str[i] !== str[str.length - i-1] || i === str.length - i -1 ) {
        if (str.length > 1) {
           return false;
        }
      }
    }
    return true;
  },
};