class FormValidator {
  constructor(config, popupSelector) {
    this._config = config;
    this._element = document.querySelector(popupSelector);
  }

  _showErrorMessage(inputElement, errorMessage) {
    const errorElement = this._element.querySelector(
      `#${inputElement.id}-error`
    );
    errorElement.textContent = errorMessage;
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.classList.add(this._config.errorClass);
  }

  _hideErrorMessage(inputElement) {
    const errorElement = this._element.querySelector(
      `#${inputElement.id}-error`
    );
    errorElement.textContent = "";
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showErrorMessage(inputElement, inputElement.validationMessage);
    } else {
      this._hideErrorMessage(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((input) => {
      return !input.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._config.inactiveButtonClass);
      this._buttonElement.setAttribute("disabled", true);
    } else {
      this._buttonElement.classList.remove(this._config.inactiveButtonClass);
      this._buttonElement.removeAttribute("disabled");
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._element.querySelectorAll(this._config.inputSelector)
    );
    this._buttonElement = this._element.querySelector(
      this._config.submitButtonSelector
    );

    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  updateValidation() {
    this._inputList.forEach((inputElement) => {
      this._hideErrorMessage(inputElement);
      this._toggleButtonState();
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}

export default FormValidator;
