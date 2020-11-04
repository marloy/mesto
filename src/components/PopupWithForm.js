import Popup from '../components/Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ handleSubmitForm }, popupSelector) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
  }

  _getInputValues() {
    this._inputList = this._popup.querySelectorAll('.popup__input');

    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);

    return this._formValues;
  }

  close() {
    this._popup.querySelector('.popup__form').reset();
    super.close();
  }

  setEventListeners() {
    super.setEventListeners();

    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitForm(this._getInputValues());

    })
  }
}
