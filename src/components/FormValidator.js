class FormValidator {
  constructor(config, element) {
    this._config = config;
    this._element = element;
  }

  _showErrorMessage (inputElement, errorMessage) {
    const errorElement = this._element.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.classList.add(this._config.errorClass);
  }

  _hideErrorMessage (inputElement) {
    const errorElement = this._element.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = '';
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
  }

  _checkInputValidity (inputElement) {
    if (!inputElement.validity.valid) {
      this._showErrorMessage(inputElement, inputElement.validationMessage);
    } else {
      this._hideErrorMessage(inputElement);
    }
  }

  _hasInvalidInput (inputList) {
    return inputList.some(input => {
      return !input.validity.valid;
    });
  }

  _toggleButtonState (inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._config.inactiveButtonClass);
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove(this._config.inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  }

  _setEventListeners() {
    const inputList = Array.from(this._element.querySelectorAll(this._config.inputSelector));
    const buttonElement = this._element.querySelector(this._config.submitButtonSelector);

    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  enableValidation () {
    this._element.addEventListener('submit', evt => evt.preventDefault());
    this._setEventListeners();
  };
}

export default FormValidator;


