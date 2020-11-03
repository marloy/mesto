import { personName, personJob } from '../utils/constants.js';

export default class UserInfo {
  constructor({ personNameSelector, personJobSelector }) {
    this._personNameElement = document.querySelector(personNameSelector);
    this._personJobElement = document.querySelector(personJobSelector);
  }

  getUserInfo() {
    const userData = {};
    userData[name] = personName.textContent;
    userData[job] = personJob.textContent;

    return userData;
  }

  setUserInfo(data) {
    this._personNameElement.textContent = data.name;
    this._personJobElement.textContent = data.job;
  }
}
