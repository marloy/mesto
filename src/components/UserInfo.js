export default class UserInfo {
  constructor({ personNameSelector, personJobSelector, personAvatarSelector }) {
    this._personNameElement = document.querySelector(personNameSelector);
    this._personJobElement = document.querySelector(personJobSelector);
    this._personAvatarElement = document.querySelector(personAvatarSelector);
  }

  getUserInfo() {
    const userData = {};
    userData.name = this._personNameElement.textContent;
    userData.job = this._personJobElement.textContent;

    return userData;
  }

  setUserAvatar(data) {
    if (data.avatar) {
      this._personAvatarElement.src = data.avatar;
    }
  }

  setUserInfo(data) {
    if (data.name) {
      this._personNameElement.textContent = data.name;
    }
    if (data.about) {
      this._personJobElement.textContent = data.about;
    }
  }
}
