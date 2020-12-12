import Popup from "./Popup.js";

export default class PopupConfirm extends Popup {
  constructor(PopupConfirmSelector) {
    super(PopupConfirmSelector);
  }

  setSubmitAction(action) {
    this._handleSubmit = action;
  }

  setEventListeners() {
    super.setEventListeners();

    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit();
    });
  }
}
