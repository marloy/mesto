// Находим попап и форму в DOM
let popup = document.querySelector('.popup');
let formElement = popup.querySelector('.popup__form');

// Находим кнопки в DOM
let openPopupButton = document.querySelector('.profile__edit-button');
let closePopupButton = popup.querySelector('.popup__close-button');
let savePopupButton = popup.querySelector('.popup__save-button');

// Находим элементы с именем и родом деятельности
let name = document.querySelector('.profile__name');
let job = document.querySelector('.profile__job');

// Находим поля формы
let nameInput = formElement.querySelector('.popup__input_el_name');
let jobInput = formElement.querySelector('.popup__input_el_job');

// Обработчик «отправки» формы
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы

    // Новые значения с помощью textContent
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;

    closePopup();
}

// Открыть попап
function openPopup() {
  // Новые значения полей формы
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;

  popup.classList.add('popup_opened');
}

// Закрыть попап
function closePopup() {
  popup.classList.remove('popup_opened');
}

// Прикрепляем обработчик к форме
formElement.addEventListener('submit', formSubmitHandler);

// Прикрепляем функции к кнопкам
openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
