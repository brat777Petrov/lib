const objectsTask = {
    //на вход всегда приходит просто объект в котором ключи и значения - строки
    //вернуть новый объект, что-бы в нём ключи и значения были поменяны местами
    //swapKeysWithValues({a: 'aa', b: 'bb'}) => { aa: 'a', bb: 'b' };
    swapKeysWithValues(obj) {
      let objNew = {};

      for (let key in obj) {
         objNew[obj[key]] = key;
      }
      return objNew;
    },

};