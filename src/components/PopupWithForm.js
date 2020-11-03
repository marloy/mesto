import Popup from '../components/Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
  }

  _getInputValues() {
    this._inputList = super._popup.querySelectorAll('.popup__input');

    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);

    return this._formValues;
  }

  close() {
    super._popup.reset();
    super.close();
  }

  setEventListeners() {
    super.setEventListeners();

    super._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    })
  }
}
