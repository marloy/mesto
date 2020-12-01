import Popup from '../components/Popup.js'

export default class PopupDeleteCard extends Popup {
  constructor(popupDeleteCardSelector) {
    super(popupDeleteCardSelector);
  }

  setSubmitAction(action) {
    this._handleSubmit = action;
  }

  setEventListeners() {
    super.setEventListeners();

    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit();
    })
  }
}
