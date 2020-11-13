// Токен: 033f0036-9ee8-4b41-8ee5-5354d3c009cf
// Идентификатор группы: cohort-17
// https://mesto.nomoreparties.co
// Идентификатор группы должен быть в URL сразу после v1. Всегда обращайтесь к своей группе. Если обратиться к чужой, сервер вернёт ошибку.import './index.css';

export default class Api {
  constructor(token, cohortId) {
    this._cohortId = cohortId;
    this._token = token;
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
        return new Promise.reject('')
      })
  }
}
