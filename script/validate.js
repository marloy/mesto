const showErrorMessage = (formElement, inputElement, errorMessage, obj) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
  inputElement.classList.add(obj.inputErrorClass);
  errorElement.classList.add(obj.errorClass);
}

const hideErrorMessage = (formElement, inputElement, obj) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.textContent = '';
  inputElement.classList.remove(obj.inputErrorClass);
  errorElement.classList.remove(obj.errorClass);
}

const checkInputValidity = (formElement, inputElement, obj) => {
  if (!inputElement.validity.valid) {
    showErrorMessage(formElement, inputElement, inputElement.validationMessage, obj);
  } else {
    hideErrorMessage(formElement, inputElement, obj);
  }
}

const hasInvalidInput = inputList => {
  return inputList.some(input => {
    return !input.validity.valid;
  });
}

const toggleButtonState = (inputList, buttonElement, obj) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(obj.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(obj.inactiveButtonClass);
  }
}

const setEventListeners = (formElement, obj) => {
  const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
  const buttonElement = formElement.querySelector(obj.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, obj);
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, obj);
      toggleButtonState(inputList, buttonElement, obj);
    });
  });
}

const enableValidation = obj => {
  const formList = Array.from(document.querySelectorAll(obj.formSelector));
  formList.forEach(formElement => {
    formElement.addEventListener('submit', evt => {
      evt.preventDefault();
    });
    setEventListeners(formElement, obj);
  });
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
});
