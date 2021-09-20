/*
 * используя браузерный XmlHttpRequest реализовать 2 ф-ции
 * */
const requests = {
  /*
   * данная ф-ция должна выполнять GET запрос используя аргументы
   * @param {string} url - адрес запроса
   * @params {object} params - параметры запроса, это объект с параметрами, которые должны добавиться к url
   * @params {object} options - опции для запроса, headers, timeout, sync, возможно что-то ещё добавим
   * @param {function(error, response)} cb - callback который должен быть вызван после успешного выполнения запроса или ошибки
   * если всё выполнилось хорошо, тогда надо вызвать cb(null, response) если была ошибка - cb(error)
   * */
  httpGet(url, params, options, cb) {
      const fullUrl = url + encodeURIComponent('?')
           + objectToQuery(params);
          
      let x = new XMLHttpRequest();
          x.open("GET", fullUrl, options);
          x.send();
          x.onload = () => {
            let data = x.response;
            cb(null, data);
           };
          x.onerror = () => {
            cb(error);
          };                  
    },

  /**
   * смотреть описание httpGet
   * метод будет делать почти то же самое только данные будут отправляться через POST
   */
  httpPost(url, params, options, cb) {
    const body = objectToQuery(params);
          
      let x = new XMLHttpRequest();
          x.open("POST", url, options);
          x.setRequestHeader('Content-type', 'application/json; charset=utf-8');
          x.send(body);
          x.onload = () => {
            let data = x.response;
            cb(null, data);
           };
          x.onerror = () => {
            cb(error);
          };                  
   },

  /**
   * ф-ция на вход получает объект {key1: value1, key2: value2,.... } и возваращет строку в виде key1=value1&key2=value2....
   */
  objectToQuery(obj) {
      let param = '';
        for ( let key in obj ) {
          param += encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])
           + '&';

        }
        return param.substring(0, param.length-1) ;
   },
  /**
   * ф-ция на вход получает строку в виде key1=value1&key2=value2.... и возваращет объект {key1: value1, key2: value2,.... }
   */
  queryToObject(query) {
    const arrParam = query.split('&');
        let arrEl = [];
        let res = {};
        for ( let i = 0; i < arrParam.length; i++ ) {
          arrEl = arrParam[i].split('=');
          res[arrEl[0]] = decodeURIComponent(arrEl[1]);
        }
    
        return res;
  }
};