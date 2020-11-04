export default class UserInfo {
  constructor({ personNameSelector, personJobSelector }) {
    this._personNameElement = document.querySelector(personNameSelector);
    this._personJobElement = document.querySelector(personJobSelector);
  }

  getUserInfo() {
    const userData = {};
    userData.name = this._personNameElement.textContent;
    userData.job = this._personJobElement.textContent;

    return userData;
  }

  setUserInfo(data) {
    this._personNameElement.textContent = data.nameInput;
    this._personJobElement.textContent = data.jobInput;
  }
}
