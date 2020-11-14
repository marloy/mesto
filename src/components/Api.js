// Токен: 033f0036-9ee8-4b41-8ee5-5354d3c009cf
// Идентификатор группы: cohort-17
// https://mesto.nomoreparties.co
// Идентификатор группы должен быть в URL сразу после v1. Всегда обращайтесь к своей группе. Если обратиться к чужой, сервер вернёт ошибку.import './index.css';

export default class Api {
  constructor(config) {
    this._cohortId = config.cohortId;
    this._token = config.token;
  }

  getUserInfo() {
    return fetch(`https://mesto.nomoreparties.co/v1/${this._cohortId}/users/me`, {
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
    return fetch(`https://mesto.nomoreparties.co/v1/${this._cohortId}/users/me`, {
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
    return fetch(`https://mesto.nomoreparties.co/v1/${this._cohortId}/cards`, {
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
}
