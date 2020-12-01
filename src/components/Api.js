// Токен: 033f0036-9ee8-4b41-8ee5-5354d3c009cf
// Идентификатор группы: cohort-17
// https://mesto.nomoreparties.co
// Идентификатор группы должен быть в URL сразу после v1. Всегда обращайтесь к своей группе. Если обратиться к чужой, сервер вернёт ошибку.import './index.css';

export default class Api {
  constructor(config) {
    this._baseURL = config.baseURL;
    this._cohortID = config.cohortID;
    this._token = config.token;
  }

  getUserInfo() {
    return fetch(`${this._baseURL}/v1/${this._cohortID}/users/me`, {
      headers: {
        authorization: this._token
      }
    })
      .then(res => {
        if(res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
      })
      .then(data => {
        return data;
      })
      .catch(err => console.log(err));
  }

  saveUserInfo(data) {
    return fetch(`${this._baseURL}/v1/${this._cohortID}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
      .then(res => {
        if(res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
      })
      .then(data => {
        return data;
      })
      .catch(err => console.log(err));
  }

  getInitialCards() {
    return fetch(`${this._baseURL}/v1/${this._cohortID}/cards`, {
      headers: {
        authorization: this._token
      }
    })
      .then(res => {
        if(res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
      })
      .then(data => {
        return data;
      })
      .catch(err => console.log(err));
  }

  saveCard(data) {
    return fetch(`${this._baseURL}/v1/${this._cohortID}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then(res => {
        if(res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
      })
      .then(data => {
        return data;
      })
      .catch(err => console.log(err));
  }

  deleteCard(data) {
    return fetch(`${this._baseURL}/v1/${this._cohortID}/cards/${data._id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
    })
      .then(res => {
        if(res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
      })
      .catch(err => console.log(err));
  }
}
