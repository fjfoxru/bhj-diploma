/**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет свойство URL, равно пустой строке.
 * */
class Entity {

  /**
   * Запрашивает с сервера список данных.
   * Это могут быть счета или доходы/расходы
   * (в зависимости от того, что наследуется от Entity)
   * */

  static URL = '';

  static list( data, callback = f => f ) {
    createRequest({
      data: data,
      method: 'GET',
      url: this.URL,
      callback: callback
    });

  }

  /**
   * Создаёт счёт или доход/расход с помощью запроса
   * на сервер. (в зависимости от того,
   * что наследуется от Entity)
   * */
  static create( data, callback = f => f ) {
    const cloneDate = Object.assign({_method: 'PUT'}, data);
    createRequest({
      data: cloneDate,
      method: 'POST',
      url: this.URL,
      callback: callback
    });



  }

  /**
   * Получает информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static get( id = '', data, callback = f => f ) {

    this.id = id;
    createRequest({
      data: data,
      method: 'GET',
      url: this.URL,
      callback: callback
    });


  }

  /**
   * Удаляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static remove( id = '', data, callback = f => f ) {
    const cloneDate = Object.assign({_method: 'PUT', id}, data);
    createRequest({
      data: cloneDate,
      method: 'POST',
      url: this.URL,
      callback: callback
    });
  }
}










