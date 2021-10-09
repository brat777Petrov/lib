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
    const fullUrl = url + "?" + objectToQuery(params);

    let x = new XMLHttpRequest();
    x.open("GET", fullUrl, options);
    x.onload = () => {
      let data = x.response;
      cb(null, data);
    };
    x.onerror = (error) => {
      cb(error);
    };

    x.send();
  },

  /**
   * смотреть описание httpGet
   * метод будет делать почти то же самое только данные будут отправляться через POST
   */
  httpPost(url, urlParams, params, options, headers, timeout, sync, cb) {
    const fullUrl = url + "?" + objectToQuery(urlParams);
    const body = JSON.stringify(params);

    const x = new XMLHttpRequest();
    x.open("POST", fullUrl, !sync, options);
    x.setRequestHeader("Content-type", "application/json; charset=utf-8");
    //set headers // headers = {...}
    Object.entries(headers).forEach(([key, value]) => {
      x.setRequestHeader(`'${key}', '${value}'`);
    });

    //timeout
    x.timeout = timeout;
    x.ontimeout = () => {
      cb(new Error("timeout"));
    };

    x.onload = () => {
      const data = x.response;
      cb(null, data);
    };
    x.onerror = () => {
      cb(error);
    };

    x.send(body);
  },

  /**+
   * ф-ция на вход получает объект {key1: value1, key2: value2,.... } и возваращет строку в виде key1=value1&key2=value2....
   */
  objectToQuery(obj) {
    return Object.entries(obj)
      .map(([key, value]) => {
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      })
      .join("&");
  },
  /**
   * ф-ция на вход получает строку в виде key1=value1&key2=value2.... и возваращет объект {key1: value1, key2: value2,.... }
   */
  queryToObject(query) {
    const arrParam = query.split("&");
    return arrParam.reduce((acc, current) => {
      const [key, value] = current.split("=");
      acc[decodeURIComponent(key)] = decodeURIComponent(value);
      console.log(typeof current);
      return acc;
    }, {});
  },
};
