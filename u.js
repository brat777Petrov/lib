``;
/*
 * Тут будут разные вспомогательные методы, которые можно будет использовать для решения других задач
 * */
const U = {
  /*
   * ф-ция получает на вход строку в виде <param1>=<value1>&<param2>=<value2>&<param3>&...<paramN=valueN>
   *
   */
  queryToObject(query) {},

  objectToQuery(obj) {},

  //ф-ция должна возвращать Promise, который будет resolved когда скрипт из url будет загружен
  loadScript(url) {
      return new Promise ((resolve, reject) => {
      let script = document.createElement('script');
      script.src = url;
      document.head.append(script);
      script.onload = resolve();
    })


  },

   //
  //
  createHTMLElement(
    tag,
    options = {
      text,
      className,
      data,
      children,
      attributes,
      events,
    }
  ) {
    const element = document.createElement(tag);

    if (options.text) {
      element.innerText = options.text;
    }

    if (options.className) {
      element.className = options.className;
    }

    if (options.data) {
      Object.entries(options.data).map(([key, value]) => {
        element.setAttribute(`data-${key}`, value);
      });
    }

    if (options.children) {
      options.children.map((el) => {
        const child = document.createElement(el);
        element.append(child);
      });
    }

    if (options.attributes) {
      Object.entries(options.attributes).map(([key, value]) => {
        element.setAttribute(`${key}`, value);
      });
    }

    if (options.events) {
      Object.entries(options.events).map(([key, value]) => {
        element.addEventListener(key, value);
      });
    }

    return element;
  },

  confirm(msg) {
    return new Promise((resolve) => {
      //надо показать диалог, сделать самому диалог, у которого есть 2 кнопки - ok/cancel
      //promise должен резолвится после нажатия кнопок со значением true/false
      // true - confirmed, false - not confirmed
      const confirmContainer = createHTMLElement("div", {
        className: "confirm_container",
      });

      const message = createHTMLElement("p", {
        text: msg,
        className: "message",
      });

      const buttonOk = createHTMLElement("button", {
        text: "ok",
        className: "btn_ok",
        events: {
          click: () => {
            resolve(true);
          },
        },
      });

      const buttonCancel = createHTMLElement("button", {
        text: "cancel",
        className: "btn_cancel",
        events: {
          click: () => {
            resolve(false);
          },
        },
      });

      document.body.append(confirmContainer);
      confirmContainer.append(message);
      confirmContainer.append(buttonOk);
      confirmContainer.append(buttonCancel);
    });
  },

  formatFileSize(sizeInBytes) {
    const byteUnits = [
      ' kB' /*nls*/,
      ' MB' /*nls*/,
      ' GB' /*nls*/,
      ' TB' /*nls*/,
      ' PB' /*nls*/,
      ' EB' /*nls*/,
      ' ZB' /*nls*/,
      ' YB' /*nls*/,
    ];
    //1kB === 1024B
    for ( let i = 0; i < byteUnits.length; i++ ) {
      console.log(sizeInBytes/Math.pow(10, (i+2)) + byteUnits[i]);
    }
  },

  //cmpFn получает на вход (obj1, obj2) и возвращает 1 если obj1 > obj2, -1 если obj1 < obj2, 0 если obj1 == obj2
  minInArray(array, cmpFn) {
    let min = array[0];
    array.forEach(element => {
      if (cmpFn( min, element) > 0) min = element;
    });
  
    return min;
  },

  //ф-ция принимает на вход 2 числа, но они могут быть и не заданы, те можно использовать ф-цию так
  // randomInt(), если min не задан тогда считать его равным 0, если max не задан - то считать его равным Number.MAX_SAFE_INTEGER
  randomInt(min, max) {
    if ( typeof(min) === 'undefined' ) {
      min = 0;
    };
    if ( typeof(max) === 'undefined' ) {
      max = Number.MAX_SAFE_INTEGER;
    };
 
    return Math.floor(Math.random() * (max - min)) + min;
  },

  //ф-ция принимает на вход массив и callback
  //возвращает новый массив, элементы которого будут преобразованы fn
  //если fn возвращает null, то элемент не надо включать в результирующий массив
  filteredMap(array, fn) {
    let result = [];
    array.map((value) => {
      if ( fn(value) != null ) {
        result.push(fn(value));
      }
    });
    return result;
  },
};