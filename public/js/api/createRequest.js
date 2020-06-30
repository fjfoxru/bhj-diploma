/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  let xhrResponce;
  let xhr = new XMLHttpRequest();
  let err;
  try {
    if (options.method == 'GET') {
        let dataGet = options.url + '?email=' + options.data.email + '&password=' + options.data.password; 
        xhr.open(options.method, dataGet);
        xhr.withCredentials = true;
        xhr.responseType = 'json';
        if (options.headers) {
          for (let header in options.headers) {
              xhr.setRequestHeader(header, options.headers[header]);
          }
        }
        xhr.send();
    } else {
        let formData = new FormData();
        for (let data in options.data) {
          formData.append(`${data}`, `${options.data[data]}`);
        }
          xhr.open(options.method, options.url);
          xhr.withCredentials = true;
          xhr.responseType = 'json';
          if (options.headers) {
            for (let header in options.headers) {
                xhr.setRequestHeader(header, options.headers[header]);
            }
          }
        
        xhr.send(formData);
    }
    err = null;

  } catch (err) {

  }
    xhr.addEventListener('readystatechange', (event) => {
        if (xhr.readyState == xhr.DONE) {
            xhrResponce = options.callback(err, xhr.response);
        }


    });

    
    
};

