/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    let xhr = new XMLHttpRequest();
    console.log(options.callback);


    if (options.method == 'GET') {
        let dataGet;
        for (let data in options.data) {
            dataGet += data;
            
        }
        xhr.open(options.method, `${options.url}?`);
    }



    xhr.open(options.method, options.url);
    if (options.headers) {
        for (let header in options.headers) {
            xhr.setRequestHeader(header, options.headers[header]);
        }
    }



    if (options.data) {
        xhr.send(JSON.stringify(options.data));
    }
    xhr.responseType = options.responseType;

    xhr.addEventListener('readystatechange', (event) => {
        if (xhr.readyState == xhr.DONE) {
            options.callback(xhr.response);
        }


    });
    
    

};

const xhr = createRequest({
    url: 'https://example.com', // адрес
    headers: { // произвольные заголовки, могут отсутствовать
      'Content-type': 'application/json' 
    },
    data: { // произвольные данные, могут отсутствовать
      email: 'ivan@poselok.ru',
      password: 'odinodin'
    },
    responseType: 'json', // формат, в котором необходимо выдать результат
    method: 'GET', // метод запроса
    /*
      Функция, которая сработает после запроса.
      Если в процессе запроса произойдёт ошибка, её объект
      должен быть в параметре err.
      Если в запросе есть данные, они должны быть переданы в response.
    */
    callback: (err, response) => {
      console.log( 'Ошибка, если есть', err );
      console.log( 'Данные, если нет ошибки', response );
    }
  });
  console.log(xhr);